"use client";
import { useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/MacDallas123", icon: "⌥" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roylex-stephane-53a4292bb",
    icon: "in",
  },
  { label: "X", href: "https://x.com/StephaneRoylex", icon: "𝕏" },
  { label: "GitLab", href: "https://gitlab.com/macdallas", icon: "⌬" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61556815223880",
    icon: "f",
  },
  { label: "WhatsApp", href: "https://wa.me/237697549440", icon: "☎" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "L'envoi a échoué. Réessayez plus tard.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 md:px-12 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label flex justify-center mb-2">Contact</div>
          <h2
            className="font-extrabold font-syne text-[clamp(40px,6vw,72px)] tracking-tight text-primary leading-[1.0] mb-6"
          >
            Travaillons{" "}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#ff6584] bg-clip-text text-transparent">
              ensemble
            </span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-[15px] leading-[1.8]">
            Vous avez un projet en tête ? Une idée à développer ? Je suis disponible pour des missions freelance ou des opportunités en CDI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-[#43e8a014] border border-[#43e8a04d] rounded-xl px-4 py-12 sm:px-8 sm:py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-syne font-bold text-[22px] text-primary mb-3">Message envoyé !</h3>
                <p className="text-secondary text-sm mb-4">
                  Je vous répondrai dans les 24 heures. Merci pour votre intérêt !
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 py-2.5 px-6 bg-transparent border border-border-2 rounded-md text-secondary font-dmmono text-sm cursor-pointer hover:border-accent transition"
                  type="button"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-dmmono text-[11px] text-muted tracking-widest uppercase mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Votre nom complet"
                      className="w-full bg-bgcard border border-border rounded-md px-4 py-[14px] text-primary font-dmmono text-[13px] outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />
                  </div>
                  <div>
                    <label className="block font-dmmono text-[11px] text-muted tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Votre email"
                      className="w-full bg-bgcard border border-border rounded-md px-4 py-[14px] text-primary font-dmmono text-[13px] outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-dmmono text-[11px] text-muted tracking-widest uppercase mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Développement d'une application web..."
                    className="w-full bg-bgcard border border-border rounded-md px-4 py-[14px] text-primary font-dmmono text-[13px] outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                <div>
                  <label className="block font-dmmono text-[11px] text-muted tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre projet, vos besoins et votre timeline..."
                    rows={6}
                    className="w-full bg-bgcard border border-border rounded-md px-4 py-[14px] text-primary font-dmmono text-[13px] outline-none transition-colors duration-200 placeholder:text-muted resize-none focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                {status === "error" && (
                  <div className="bg-[#ff658414] border border-[#ff658440] rounded-md px-4 py-3 text-[13px] text-[#ff98a8]">
                    {errorMsg}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`py-4 px-8 rounded-md font-syne font-bold text-[15px] flex items-center justify-center gap-2
                    ${status === "sending"
                      ? "bg-border cursor-not-allowed opacity-70 shadow-none"
                      : "bg-accent hover:opacity-90 cursor-pointer shadow-lg transition"}
                    text-white`}
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message →"
                  )}
                </button>
              </form>
            )}
          </div>
          {/* Info sidebar */}
          <div className="flex flex-col gap-8">
            {/* Availability */}
            <div className="glow-border bg-bgcard rounded-xl py-6 px-4 sm:px-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#43e8a0] shadow-[0_0_10px_#43e8a0]" />
                <span className="font-dmmono text-xs text-[#43e8a0]">Disponible</span>
              </div>
              <div className="font-syne font-bold text-md text-primary mb-2">Prêt à démarrer</div>
              <p className="text-[13px] text-secondary leading-[1.6]">
                Actuellement disponible pour des missions freelance à partir de Mars 2025.
              </p>
            </div>
            {/* Contact info */}
            <div>
              <div className="font-dmmono text-[11px] tracking-wider uppercase text-muted mb-4">Contact direct</div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:roylexstephane@gmail.com"
                  className="flex items-center gap-3 text-secondary text-[13px] transition-colors hover:text-primary"
                >
                  <span className="text-accent">@</span> roylexstephane@gmail.com
                </a>
                <div className="flex items-center gap-3 text-secondary text-[13px]">
                  <span className="text-accent">📍</span> Yaoundé, Cameroun (Remote OK)
                </div>
                <div className="flex items-center gap-3 text-secondary text-[13px]">
                  <span className="text-accent">⏱</span> Réponse sous 24h
                </div>
              </div>
            </div>
            {/* Socials */}
            <div>
              <div className="font-dmmono text-[11px] tracking-wider uppercase text-muted mb-4">Réseaux</div>
              <div className="grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-border flex items-center gap-2.5 py-2 px-3 rounded-md bg-bgcard text-secondary text-xs font-dmmono transition-colors hover:text-primary"
                  >
                    <span className="text-accent text-sm">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
