"use client";
import { useEffect, useRef } from "react";

const skills = [
  {
    category: "Frontend & Desktop",
    color: "#6c63ff",
    items: [
      { name: "Next.js / React", level: 95 },
      { name: "HTML / CSS / JS", level: 95 },
      { name: "Flutter", level: 75 },
      { name: "C# (développement desktop)", level: 85 },
    ],
  },
  {
    category: "Backend & Données",
    color: "#43e8a0",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python (Django)", level: 70 },
      { name: "PHP", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 85 },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "#ff6584",
    items: [
      { name: "Docker / Traefik", level: 80 },
      { name: "GitHub Actions / CI-CD", level: 85 },
      { name: "GitLab & GitLab CI/CD", level: 85 },
      { name: "Linux / VPS", level: 78 },
      { name: "Nginx / Reverse Proxy", level: 75 },
      { name: "Firebase", level: 45 },
    ],
  },
  {
    category: "Géospatial & IA",
    color: "#ffd700",
    items: [
      { name: "LeafletJS", level: 85 },
      { name: "OpenStreetMap", level: 85 },
      { name: "QGIS", level: 75 },
      { name: "Machine Learning", level: 45 },
      { name: "Agents IA", level: 85 },
      { name: "Ingénierie dirigée par les modèles", level: 78 },
      { name: "Systèmes & réseaux", level: 60 },
      { name: "Windows", level: 85 },
    ],
  },
];

const tools = [
  "Git",
  "GitLab",
  "VS Code",
  "Figma",
  "Postman",
  "Vercel",
  "Supabase",
  "Redis",
  "Jest",
  "QGIS",
  "Firebase",
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar) => {
              bar.style.transform = `scaleX(${bar.dataset.level || 0})`;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[var(--bg-2,#10101a)] px-4 py-24 sm:px-8 md:px-12 lg:px-10 xl:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="section-label">Compétences</div>
        <h2
          className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] mb-4 text-[var(--text-primary)]"
        >
          Mon stack technique
        </h2>
        <p className="text-[var(--text-secondary)] max-w-[480px] mb-16">
          Un socle technique varié, entre développement desktop, systèmes d&apos;information géographique (SIG) et intelligence artificielle.
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="glow-border bg-[var(--bg-card,#13131f)] rounded-xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-7">
                <div
                  className="rounded-full"
                  style={{
                    width: "10px",
                    height: "10px",
                    background: cat.color,
                    boxShadow: `0 0 12px ${cat.color}`,
                  }}
                />
                <span className="font-syne font-bold text-base text-[var(--text-primary)]">
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-col gap-5">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-[var(--text-secondary)]">
                        {item.name}
                      </span>
                      <span
                        className="text-[11px] font-medium"
                        style={{ color: cat.color }}
                      >
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-[var(--border)] rounded">
                      <div
                        className="skill-bar-fill"
                        data-level={item.level / 100}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${cat.color}aa, ${cat.color})`,
                          borderRadius: "1px",
                          transformOrigin: "left",
                          transform: "scaleX(0)",
                          transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="border-t border-[var(--border)] pt-12">
          <div className="font-dmmono text-[11px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-6">
            Outils & Technologies
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <div
                key={tool}
                className="glow-border bg-[var(--bg-card,#13131f)] rounded-lg py-2 px-5 font-dmmono text-xs text-[var(--text-secondary)] cursor-default transition-colors duration-200"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
