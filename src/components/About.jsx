"use client";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 md:px-12 py-24 max-w-[1200px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Visual */}
        <div className="relative">
          {/* Code block decoration */}
          <div
            className="glow-border bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 font-mono text-[13px] leading-relaxed"
          >
            <div className="flex gap-1.5 mb-5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="text-[var(--text-muted)]">{'// À propos de moi'}</div>
            <div className="h-2" />
            <div>
              <span style={{ color: "#ff6584" }}>const</span>{" "}
              <span style={{ color: "#43e8a0" }}>developer</span>{" "}
              <span style={{ color: "var(--text-secondary)" }}>=</span>{" "}
              <span style={{ color: "#6c63ff" }}>{`{`}</span>
            </div>
            <div className="pl-5">
              <div>
                <span style={{ color: "#ff6584" }}>name</span>
                <span style={{ color: "var(--text-secondary)" }}>:</span>{" "}
                <span style={{ color: "#ffd700" }}>&quot;Stephane Roylex&quot;</span>
                <span style={{ color: "var(--text-secondary)" }}>,</span>
              </div>
              <div>
                <span style={{ color: "#ff6584" }}>degree</span>
                <span style={{ color: "var(--text-secondary)" }}>:</span>{" "}
                <span style={{ color: "#ffd700" }}>&quot;Master Informatique&quot;</span>
                <span style={{ color: "var(--text-secondary)" }}>,</span>
              </div>
              <div>
                <span style={{ color: "#ff6584" }}>location</span>
                <span style={{ color: "var(--text-secondary)" }}>:</span>{" "}
                <span style={{ color: "#ffd700" }}>&quot;Yaoundé, Cameroun&quot;</span>
                <span style={{ color: "var(--text-secondary)" }}>,</span>
              </div>
              <div>
                <span style={{ color: "#ff6584" }}>available</span>
                <span style={{ color: "var(--text-secondary)" }}>:</span>{" "}
                <span style={{ color: "#43e8a0" }}>true</span>
                <span style={{ color: "var(--text-secondary)" }}>,</span>
              </div>
              <div>
                <span style={{ color: "#ff6584" }}>passions</span>
                <span style={{ color: "var(--text-secondary)" }}>:</span>{" "}
                <span style={{ color: "#6c63ff" }}>[</span>
              </div>
              <div className="pl-5">
                <div style={{ color: "#ffd700" }}>&quot;Software Design&quot;</div>
                <div style={{ color: "#ffd700" }}>&quot;Open Source&quot;</div>
                <div style={{ color: "#ffd700" }}>&quot;UX Engineering&quot;</div>
              </div>
              <div>
                <span style={{ color: "#6c63ff" }}>]</span>
              </div>
            </div>
            <div>
              <span style={{ color: "#6c63ff" }}>{`}`}</span>
              <span style={{ color: "var(--text-secondary)" }}>;</span>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -top-5 -right-5 w-20 h-20 bg-[var(--accent)] rounded-full flex items-center justify-center font-syne font-extrabold text-[11px] text-center leading-tight text-white shadow-lg animate-float select-none"
            style={{ boxShadow: "0 8px 32px rgba(108,99,255,0.5)" }}
          >
            Bac+5
            <br />
            MASTER
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="section-label mb-3">À propos</div>
          <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-.02em] mb-6 text-[var(--text-primary)]">
            Construire des produits qui{" "}
            <span className="bg-gradient-to-tr from-[#6c63ff] to-[#ff6584] bg-clip-text text-transparent">
              ont du sens
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-[1.9] mb-5">
            Passionné de développement web depuis plus de 5 ans, j&apos;ai eu l&apos;opportunité de travailler sur des projets allant 
            des start-ups ambitieuses aux grandes entreprises, toujours avec la même exigence : 
            <strong className="text-[var(--text-primary)]"> un code propre, maintenable et performant</strong>.
          </p>
          <p className="text-[var(--text-secondary)] leading-[1.9] mb-10">
            Mon Master en Informatique m&apos;a apporté des bases solides en algorithmique, architecture logicielle et conception de systèmes distribués.
            Aujourd&apos;hui, je combine cette rigueur académique avec une approche pragmatique orientée livraison.
          </p>

          {/* Skills chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Docker",
              // "AWS",
              // "GraphQL",
            ].map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {/* Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "⚡",
                title: "Performance",
                desc: "Optimisation Core Web Vitals",
              },
              {
                icon: "🔒",
                title: "Sécurité",
                desc: "Best practices & OWASP",
              },
              {
                icon: "♿",
                title: "Accessibilité",
                desc: "WCAG 2.1 AA",
              },
              {
                icon: "📱",
                title: "Responsive",
                desc: "Mobile-first design",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="flex gap-3 items-start"
              >
                <span className="text-[20px] flex-shrink-0 mt-[2px]">{t.icon}</span>
                <div>
                  <div className="font-syne font-semibold text-[14px] text-[var(--text-primary)] mb-0.5">
                    {t.title}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
