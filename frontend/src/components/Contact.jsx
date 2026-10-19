import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, CheckCircle2, Loader2, ExternalLink } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic } from "./motion";
import { HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID } from "@/config";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const hubspotOn = Boolean(HUBSPOT_FORM_ID);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hubspotOn) return;
    const s = document.createElement("script");
    s.src = "https://js.hsforms.net/forms/embed/v3.js";
    s.async = true;
    s.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-[-20%] left-[55%] h-[460px] w-[460px] rounded-full bg-pale/30 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
              <span className="h-[3px] w-10 rounded-full bg-amber" /> Contact
            </p>
          </Reveal>
          <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            <MaskedLinesInView lines={["Let's Start a", <em className="italic text-amber">Conversation</em>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-lg text-ink font-light leading-relaxed">
              Together, we can make sure you are always putting your Employees First. Tell us a little about your
              benefits program and we'll take it from there.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {hubspotOn ? (
            <Reveal delay={0.1}>
              <div
                data-testid="hubspot-form"
                className="rounded-2xl bg-paper border border-navy/10 p-6 lg:p-8 shadow-[0_30px_60px_-40px_rgba(0,58,112,0.4)] min-h-[380px]"
              >
                <div id="hubspot-form" />
                <noscript>
                  <p className="text-ink text-sm">
                    JavaScript is off, so the form can't load here.{" "}
                    <a
                      href="https://www.myemployeesfirst.com/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-navy"
                    >
                      Use our form on myemployeesfirst.com <ExternalLink className="inline h-3 w-3" />
                    </a>
                  </p>
                </noscript>
              </div>
            </Reveal>
          ) : status === "success" ? (
            <Reveal>
              <div
                data-testid="contact-success"
                className="h-full min-h-[380px] flex flex-col items-center justify-center text-center rounded-2xl bg-paper border border-green/40 p-10"
              >
                <CheckCircle2 className="h-14 w-14 text-green" />
                <h3 className="mt-6 font-display text-3xl text-navy">Thank you — message received.</h3>
                <p className="mt-3 max-w-sm text-ink">
                  We'll be in touch shortly to start the conversation about your voluntary benefits.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-2xl bg-paper border border-navy/10 p-8 lg:p-10 space-y-5 shadow-[0_30px_60px_-40px_rgba(0,58,112,0.4)]"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-name" className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">
                      Name *
                    </label>
                    <input
                      id="cf-name"
                      data-testid="contact-name-input"
                      className="field"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">
                      Email *
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      data-testid="contact-email-input"
                      className="field"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-company" className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">
                    Company
                  </label>
                  <input
                    id="cf-company"
                    data-testid="contact-company-input"
                    className="field"
                    placeholder="Company name"
                    value={form.company}
                    onChange={set("company")}
                  />
                </div>
                <div>
                  <label htmlFor="cf-message" className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="cf-message"
                    data-testid="contact-message-input"
                    rows={5}
                    className="field resize-none"
                    placeholder="Tell us about your voluntary benefits program..."
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>
                {error && (
                  <p data-testid="contact-error" className="text-amber font-semibold text-sm">
                    {error}
                  </p>
                )}
                <Magnetic
                  as="button"
                  type="submit"
                  testid="contact-submit-button"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-amber px-10 py-4 text-[15px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(255,158,27,0.65)] transition-colors duration-300 hover:bg-navy hover:text-white disabled:opacity-60"
                  strength={0.15}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Magnetic>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
