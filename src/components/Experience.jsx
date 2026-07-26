"use client";

const experiences = [
  {
    type: "hackathon",
    title: "Hackathon MTN — Lutte contre les VBG",
    org: "MTN Cameroun",
    location: "Cameroun",
    period: "",
    description:
      "Participation à un hackathon organisé par MTN sur le thème de la lutte contre les violences basées sur le genre (VBG). Développement d'un bot Telegram et d'un site web dans le cadre de ce projet.",
    highlights: [
      "Bot Telegram de sensibilisation / signalement",
      "Site web associé au projet",
      // TODO Mac: ajoute ici le résultat/classement, la taille de l'équipe, les technos précises, etc.
    ],
    tags: ["Telegram Bot", "Développement web"],
    color: "#6c63ff",
  },
  // TODO Mac: ajoute ici tes prochaines expériences (stages, missions, contrats)
  // en suivant le même format que l'entrée ci-dessus :
  // {
  //   type: "work",
  //   title: "Intitulé du poste",
  //   org: "Nom de la structure",
  //   location: "Ville, Pays",
  //   period: "Ex: Juin 2025 — Août 2025",
  //   description: "Description courte de la mission.",
  //   highlights: ["Point clé 1", "Point clé 2"],
  //   tags: ["Techno 1", "Techno 2"],
  //   color: "#43e8a0",
  // },
];

const education = [
  {
    degree: "Master 2 SIGL (Systèmes Informatiques et Génie Logiciel)",
    school: "Université de Yaoundé I",
    period: "En cours",
    description:
      "Approfondissement des compétences en Ingénierie Dirigée par les Modèles (IDM), optimisation et tests logiciels, ainsi que traitement et analyse de données à grande échelle (Big Data).",
    color: "#6c63ff",
  },
  {
    degree: "Licence en informatique",
    school: "Université de Yaoundé I",
    period: "",
    description:
      "Bases solides en algorithmique, programmation orientée objet, bases de données relationnelles et réseaux informatiques.",
    color: "#43e8a0",
  },
  {
    degree: "Formation fullstack PHP",
    school: "",
    period: "",
    description:
      "Formation pratique au développement web fullstack avec PHP : back-end orienté objet, bases de données MySQL et intégration front-end.",
    color: "#ff6584",
  },
];

// TODO Mac: ajoute tes certifications ici si tu en as, ex:
// { name: "Nom de la certification", org: "Organisme", year: "2024", icon: "🏅" }
const certifications = [];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--bg-2,#10101a)] px-4 sm:px-8 md:px-12 py-24 md:py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="section-label">Parcours</div>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] tracking-tight mb-16 text-primary -tracking-[.02em]">
          Expérience & Formation
        </h2>
        {/* grid responsive: col 1 or 2 on small, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-16 xl:gap-20">
          {/* Experiences */}
          <div>
            <div className="font-dmmono text-[11px] tracking-wider uppercase text-[var(--text-muted)] mb-8">
              Expériences professionnelles
            </div>
            <div className="relative">
              {/* Timeline vertical line - hidden on xs, shown on sm+ */}
              <div className="hidden md:block absolute left-[15px] top-5 bottom-5 w-px bg-[var(--border)]" />
              <div className="flex flex-col gap-10">
                {experiences.map((exp, i) => (
                  <div key={exp.title} className="flex gap-6 sm:gap-8 relative">
                    {/* Dot */}
                    <div className="flex-shrink-0 w-8 flex justify-center pt-1.5 relative z-10">
                      <div
                        className="rounded-full mt-1.5"
                        style={{
                          width: "10px",
                          height: "10px",
                          background: exp.color,
                          boxShadow: `0 0 12px ${exp.color}`,
                        }}
                      />
                    </div>
                    {/* Content */}
                    <div className="glow-border flex-1 rounded-xl bg-[var(--bg-card,#13131f)] p-6">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h3 className="font-syne font-bold text-[16px] text-primary mb-[2px]">
                            {exp.title}
                          </h3>
                          <div
                            className="font-dmmono text-[12px]"
                            style={{ color: exp.color }}
                          >
                            {exp.org} · {exp.location}
                          </div>
                        </div>
                        {exp.period && (
                          <span className="font-dmmono text-[11px] text-[var(--text-muted)] whitespace-nowrap bg-[var(--bg)] px-2.5 py-1 rounded-full border border-[var(--border)]">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-secondary leading-normal mb-4">
                        {exp.description}
                      </p>
                      <div className="mb-4">
                        {exp.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-start gap-2 text-[12px] text-[var(--text-muted)] mb-1"
                          >
                            <span
                              className="mt-[2px]"
                              style={{ color: exp.color }}
                            >
                              ▸
                            </span>
                            {h}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-dmmono"
                            style={{
                              background: `${exp.color}12`,
                              border: `1px solid ${exp.color}30`,
                              color: exp.color,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="font-dmmono text-[11px] tracking-wider uppercase text-[var(--text-muted)] mb-8">
              Formation académique
            </div>
            <div className="flex flex-col gap-6 mb-12">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="glow-border bg-[var(--bg-card,#13131f)] rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="flex-shrink-0 rounded-sm mt-1"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: edu.color,
                        boxShadow: `0 0 8px ${edu.color}`,
                      }}
                    />
                    <div>
                      <h3 className="font-syne font-bold text-[15px] text-primary mb-1">
                        {edu.degree}
                      </h3>
                      {edu.school && (
                        <div
                          className="font-dmmono text-[12px] mb-1"
                          style={{ color: edu.color }}
                        >
                          {edu.school}
                        </div>
                      )}
                      {(edu.period || edu.mention) && (
                        <div className="flex gap-2 items-center flex-wrap">
                          {edu.period && (
                            <span className="font-dmmono text-[11px] text-[var(--text-muted)]">
                              {edu.period}
                            </span>
                          )}
                          {edu.mention && (
                            <span className="font-dmmono text-[11px] text-[#43e8a0] bg-[#43e8a01a] px-2 py-0.5 rounded-full border border-[#43e8a04d]">
                              {edu.mention}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-[12px] text-secondary leading-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Certifications */}
            {/* TODO Mac: décommente et complète cette section si tu as des
                certifications à afficher, en suivant ce format :
                { name: "Nom de la certification", org: "Organisme", year: "2024", icon: "🏅" } */}
            {certifications.length > 0 && (
            <div>
              <div className="font-dmmono text-[11px] tracking-wider uppercase text-[var(--text-muted)] mb-5">
                Certifications
              </div>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-card,#13131f)] border border-[var(--border)] rounded-lg"
                  >
                    <span className="text-[20px]">{cert.icon}</span>
                    <div className="flex-1">
                      <div className="text-[13px] text-primary font-dmmono">
                        {cert.name}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-dmmono">
                        {cert.org}
                      </div>
                    </div>
                    <span className="font-dmmono text-[11px] text-[var(--text-muted)]">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
