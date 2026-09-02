import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";
import { contact, profile, emailjsConfig } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="06"
            title="Contact"
            subtitle={contact.blurb}
          />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-2">
            <div className="space-y-5">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-line bg-panel/60 p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <p className="font-medium">{contact.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-line bg-panel/60 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="font-medium">{contact.location}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                {profile.socials
                  .filter((s) => s.label !== "Email")
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-line px-4 py-2 font-mono text-xs text-muted hover:text-accent hover:border-accent transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className="mt-2 w-full rounded-md border border-line bg-panel/60 px-4 py-3 text-sm outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="mt-2 w-full rounded-md border border-line bg-panel/60 px-4 py-3 text-sm outline-none focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-mono text-xs text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="mt-2 w-full rounded-md border border-line bg-panel/60 px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="mt-2 w-full rounded-md border border-line bg-panel/60 px-4 py-3 text-sm outline-none focus:border-accent resize-none"
                  placeholder="What are you reaching out about?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-void hover:bg-accent-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <Send size={15} />
              </button>

              {status === "sent" && (
                <div className="flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                  <CheckCircle2 size={16} />
                  Message sent successfully — thanks for reaching out!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <XCircle size={16} />
                  Something went wrong — please try again, or email me
                  directly at {contact.email}.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}