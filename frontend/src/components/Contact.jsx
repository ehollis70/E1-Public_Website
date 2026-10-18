import { useState } from "react";
import axios from "axios";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic } from "./motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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
    <section id="contact" data-testid="contact-section" className="relative bg-deeper grain overflow-hidden">
      <div className="pointer-events-none absolute top-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-sky/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-[12px] font-medium tracking-[0.28em] uppercase text-sky mb-6">
              <span className="h-px w-10 bg-sky/70" /> Contact
            </p>
          </Reveal>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            <MaskedLinesInView lines={["Let's Start a", <em className="italic text-amber">Conversation</em>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-lg text-white/60 font-light leading-relaxed">
              Together, we can make sure you are always putting your Employees First. Tell us a little about your
              benefits program and we'll take it from there.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {status === "success" ? (
            <Reveal>
              <div
                data-testid="contact-success"
                className="h-full min-h-[380px] flex flex-col items-center justify-center text-center rounded-2xl border border-sky/30 bg-sky/5 p-10"
              >
                <CheckCircle2 className="h-14 w-14 text-sky" />
                <h3 className="mt-6 font-display text-3xl text-white">Thank you — message received.</h3>
                <p className="mt-3 max-w-sm text-white/60">
                  We'll be in touch shortly to start the conversation about your voluntary benefits.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-name" className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
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
                    <label htmlFor="cf-email" className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
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
                  <label htmlFor="cf-company" className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
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
                  <label htmlFor="cf-message" className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
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
                  <p data-testid="contact-error" className="text-amber text-sm">
                    {error}
                  </p>
                )}
                <Magnetic
                  as="button"
                  type="submit"
                  testid="contact-submit-button"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-amber px-10 py-4 text-[15px] font-semibold text-deeper transition-colors duration-300 hover:bg-white disabled:opacity-60"
                  strength={0.15}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
