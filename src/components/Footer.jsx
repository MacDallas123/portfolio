"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2,#10101a)] py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-4">
        <div
          className="font-syne font-extrabold text-base text-[var(--text-primary)] flex items-center"
        >
          <span className="text-[var(--accent)]">&lt;</span>
          SR
          <span className="text-[var(--accent)]">/&gt;</span>
        </div>
        <div
          className="font-dmmono text-xs text-[var(--text-muted)] text-center"
        >
          © {year} Stephane Roylex · Développeur Fullstack JavaScript · Fait avec{" "}
          <span className="text-[#ff6584]">♥</span> en Next.js
        </div>
        <div className="font-dmmono text-xs text-[var(--text-muted)] text-center md:text-right">
          <a
            href="#hero"
            className="text-[var(--accent)] no-underline hover:underline transition-colors"
          >
            ↑ Haut de page
          </a>
        </div>
      </div>
    </footer>
  );
}
