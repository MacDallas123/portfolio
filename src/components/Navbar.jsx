"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, and close it if the
  // viewport grows back to desktop size so it can never get stuck open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 border-b
        ${isMenuOpen ? "z-[1101]" : "z-[500]"}
        ${
          isMenuOpen
            ? "bg-[#0a0a0f] border-[rgba(42,42,69,0.6)]"
            : scrolled
              ? "bg-[rgba(10,10,15,0.92)] border-[rgba(42,42,69,0.6)] backdrop-blur-lg"
              : "bg-[rgba(10,10,15,0.55)] border-transparent backdrop-blur-md"
        }`}
    >
      {/* Logo */}
      <a href="#hero" className="no-underline flex-shrink-0" onClick={closeMenu}>
        <div
          className="font-extrabold text-[18px] tracking-[-0.02em]"
          style={{ fontFamily: "'Syne',sans-serif", color: "var(--text-primary)" }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          SR
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </div>
      </a>

      {/* Nav links - Desktop */}
      <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className={`no-underline font-mono text-xs tracking-wider transition-colors duration-200
              ${
                active === l.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="no-underline px-5 py-2 bg-[var(--accent)] text-white rounded-md font-mono text-xs font-medium transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Travailler ensemble →
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="relative z-[502] flex md:hidden items-center justify-center w-10 h-10 rounded-md bg-[var(--accent)] text-white transition-colors flex-shrink-0"
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((s) => !s)}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

    </header>

      {/* Mobile menu — sibling of header so it covers the full viewport */}
      <div
        className={`md:hidden fixed inset-0 z-[1100] flex flex-col items-center gap-4 overflow-y-auto overscroll-contain px-4 pt-24 pb-10 transition-opacity duration-300 bg-[#0a0a0f]
          ${isMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}
        aria-hidden={!isMenuOpen}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => {
              setActive(l.href);
              closeMenu();
            }}
            className={`no-underline font-mono text-lg px-4 py-2 rounded transition-colors duration-200 text-center
              ${
                active === l.href
                  ? "text-[var(--accent)] bg-[rgba(42,42,69,0.3)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="no-underline mt-2 px-8 py-3 bg-[var(--accent)] text-white rounded-md font-mono text-base font-medium transition-all duration-200 hover:opacity-85"
          style={{ fontFamily: "'DM Mono', monospace" }}
          onClick={closeMenu}
        >
          Travailler ensemble →
        </a>
      </div>
    </>
  );
}
