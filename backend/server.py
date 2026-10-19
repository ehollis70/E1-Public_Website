from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ReturnDocument
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator, EmailStr
from bson import ObjectId
from typing import List, Optional, Annotated
from pathlib import Path
import os
import logging
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


def coerce_objectid(v):
    if isinstance(v, ObjectId):
        return str(v)
    return v


PyObjectId = Annotated[str, BeforeValidator(coerce_objectid)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(extra="ignore", populate_by_name=True)

    id: PyObjectId = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")

    def to_mongo(self):
        return self.model_dump(by_alias=True)

    @classmethod
    def from_mongo(cls, doc):
        if not doc:
            return None
        if "_id" in doc and not isinstance(doc["_id"], str):
            doc["_id"] = str(doc["_id"])
        return cls(**doc)


class ContactSubmission(BaseDocument):
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str


class CaseStudyMetric(BaseModel):
    label: str
    value: str
    note: Optional[str] = None


class BeforeAfterRow(BaseModel):
    metric: str
    before: str
    after: str


class CaseStudyBase(BaseModel):
    slug: str
    title: str
    industry: Optional[str] = None
    companySize: Optional[str] = None
    metrics: List[CaseStudyMetric] = []
    challenge: str
    findings: str
    changes: str
    quote: Optional[str] = None
    quoteAttribution: Optional[str] = None
    beforeAfter: List[BeforeAfterRow] = []
    published: bool = False


class CaseStudy(CaseStudyBase, BaseDocument):
    createdAt: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class CaseStudyCreate(CaseStudyBase):
    pass


@api_router.get("/")
async def root():
    return {"message": "Employees First API"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact_submission(input: ContactCreate):
    submission = ContactSubmission(
        name=input.name.strip(),
        email=input.email,
        company=(input.company or "").strip() or None,
        message=input.message.strip(),
    )
    await db.contact_submissions.insert_one(submission.to_mongo())
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    docs = await db.contact_submissions.find().sort("created_at", -1).to_list(500)
    return [ContactSubmission.from_mongo(d) for d in docs]


@api_router.get("/case-studies", response_model=List[CaseStudy])
async def list_case_studies():
    docs = await db.case_studies.find({"published": True}).sort("createdAt", -1).to_list(100)
    return [CaseStudy.from_mongo(d) for d in docs]


@api_router.get("/case-studies/{slug}", response_model=CaseStudy)
async def get_case_study(slug: str, preview: bool = False):
    query = {"slug": slug} if preview else {"slug": slug, "published": True}
    doc = await db.case_studies.find_one(query)
    if not doc:
        raise HTTPException(status_code=404, detail="Case study not found")
    return CaseStudy.from_mongo(doc)


@api_router.post("/case-studies", response_model=CaseStudy)
async def create_case_study(input: CaseStudyCreate):
    if await db.case_studies.find_one({"slug": input.slug}):
        raise HTTPException(status_code=400, detail="A case study with this slug already exists")
    cs = CaseStudy(**input.model_dump())
    await db.case_studies.insert_one(cs.to_mongo())
    return cs


@api_router.patch("/case-studies/{slug}/publish", response_model=CaseStudy)
async def set_case_study_published(slug: str, published: bool = True):
    doc = await db.case_studies.find_one_and_update(
        {"slug": slug},
        {"$set": {"published": published}},
        return_document=ReturnDocument.AFTER,
    )
    if not doc:
        raise HTTPException(status_code=404, detail="Case study not found")
    return CaseStudy.from_mongo(doc)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
