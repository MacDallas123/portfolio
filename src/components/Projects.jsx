"use client";
import { useState } from "react";

const GITHUB_PROFILE = "https://github.com/MacDallas123";

const projects = [
  {
    title: "Host Manager",
    category: "Gestion de serveurs VPS",
    tags: ["Next.js", "Node.js", "WebSocket", "SSH", "Terminal intégré"],
    description:
      "Application web pour la gestion de serveurs VPS avec un terminal intégré directement dans le navigateur, permettant d'exécuter des commandes et de superviser ses serveurs sans quitter l'interface.",
    highlights: [
      "Terminal web intégré (SSH via navigateur)",
      "Supervision de serveurs VPS",
      "Interface centralisée de gestion",
    ],
    color: "#6c63ff",
    status: "En développement",
    link: "#",
    github: GITHUB_PROFILE,
  },
  {
    title: "Cartographie des services sociaux",
    category: "Application web géospatiale",
    tags: ["LeafletJS", "OpenStreetMap", "QGIS", "PostgreSQL/PostGIS"],
    description:
      "Application web géospatiale pour la localisation des services sociaux au Cameroun (santé, éducation, administration...), avec cartographie interactive et recherche par zone géographique.",
    highlights: [
      "Cartographie interactive (LeafletJS)",
      "Données géospatiales OpenStreetMap",
      "Traitement des données via QGIS",
    ],
    color: "#43e8a0",
    status: "En développement",
    link: "#",
    github: GITHUB_PROFILE,
  },
  {
    title: "REIMCA",
    category: "Application web immobilière",
    tags: ["React", "Node.js", "PostgreSQL", "LeafletJS"],
    description:
      "Application web de recherche de logements à louer ou à vendre au Cameroun. Publication d'annonces, filtres de recherche avancés et géolocalisation des biens immobiliers.",
    highlights: [
      "Recherche d'habitations (location & vente)",
      "Filtres de recherche avancés",
      "Géolocalisation des annonces",
    ],
    color: "#ff6584",
    status: "En développement",
    link: "#",
    github: GITHUB_PROFILE,
  },
  {
    title: "Portail multitâche",
    category: "Portail web multi-services",
    tags: ["Next.js/React", "Node.js/Express", "PostgreSQL", "Puppeteer"],
    description:
      "Portail web multitâche couvrant la génération de CV, de factures, de devis et d'avoirs. Génération de documents PDF, support multi-devises et traduction multilingue de l'interface.",
    highlights: [
      "Génération de CV, factures, devis, avoirs",
      "Génération de PDF (Puppeteer)",
      "Multi-devises & multilingue",
    ],
    color: "#ffd700",
    status: "En développement",
    link: "#",
    github: GITHUB_PROFILE,
  },
];

const statusColors = {
  "En développement": "#ffd700",
  Terminé: "#43e8a0",
  Recherche: "#6c63ff",
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-10 lg:px-20 w-full"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="section-label mb-4">Projets</div>
        <div className="flex flex-wrap gap-6 md:gap-8 justify-between items-end mb-16">
          <h2
            className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] text-[var(--text-primary)] leading-[1.1] tracking-tight"
          >
            Projets récents
          </h2>
          <a
            href="#contact"
            className="border-b border-[var(--accent)] text-[var(--accent)] text-[13px] pb-0.5 font-dmmono no-underline hover:opacity-80 transition"
          >
            Voir tous les projets →
          </a>
        </div>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-6 
            md:gap-8
            w-full"
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`
                flex flex-col gap-4 rounded-xl
                p-7 md:p-8 cursor-pointer
                transition-all
                duration-300
                border
                ${hovered === i
                  ? ""
                  : "border-[var(--border)]"
                }
                `}
              style={{
                background: "var(--bg-card, #13131f)",
                borderColor:
                  hovered === i ? project.color : "var(--border)",
                transform:
                  hovered === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? `0 20px 60px ${project.color}20`
                    : "none",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-1">
                <div
                  className="flex items-center justify-center text-[18px] w-10 h-10 rounded-lg"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {["🖥️", "🗺️", "🏠", "📄"][i]}
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: statusColors[project.status] || "#999",
                    }}
                  />
                  <span
                    className="font-dmmono text-[11px]"
                    style={{
                      color: statusColors[project.status] || "var(--text-muted)",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              {/* Title & category */}
              <div>
                <div className="font-dmmono uppercase text-[10px] text-[var(--text-muted)] tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="font-syne font-bold text-lg text-[var(--text-primary)] leading-tight">
                  {project.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7] flex-grow">
                {project.description}
              </p>
              {/* Highlights */}
              <div className="flex flex-col gap-1">
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]"
                  >
                    <span
                      style={{ color: project.color, fontSize: "10px" }}
                    >
                      ▸
                    </span>
                    {h}
                  </div>
                ))}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-dmmono"
                    style={{
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Actions */}
              <div className="flex gap-3 pt-2 border-t mt-2 border-[var(--border)]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[12px] font-dmmono text-[var(--text-muted)] no-underline hover:text-[var(--text-primary)] transition-colors"
                >
                  ⌥ GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
