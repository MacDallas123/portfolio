import "./globals.css";

export const metadata = {
  title: "Stéphane Roylex — Développeur Fullstack JavaScript",
  description: "Portfolio de Stéphane Roylex, développeur Fullstack JavaScript & TypeScript. Master en Informatique. Spécialisé en Next.js, React, Node.js et architecture cloud. Disponible pour des missions freelance.",
  keywords: ["développeur fullstack", "javascript", "typescript", "next.js", "react", "node.js", "portfolio", "freelance"],
  authors: [{ name: "Stéphane Roylex" }],
  creator: "Stéphane Roylex",
  metadataBase: new URL("https://stephaneroylex.dev"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://stephaneroylex.dev",
    title: "Stéphane Roylex — Développeur Fullstack JavaScript",
    description: "Développeur Fullstack passionné par les architectures modernes et l'expérience utilisateur. Master en Informatique.",
    siteName: "Stéphane Roylex Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stéphane Roylex - Développeur Fullstack JavaScript" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stéphane Roylex — Développeur Fullstack JavaScript",
    description: "Portfolio de Stéphane Roylex — Développeur Fullstack JavaScript & TypeScript. Spécialisé en Next.js, React, Node.js.",
    images: ["/og-image.png"],
    creator: "@stephaneroylex_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://stephaneroylex.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stéphane Roylex",
              jobTitle: "Développeur Fullstack JavaScript",
              description: "Développeur Fullstack JavaScript & TypeScript spécialisé en Next.js, React et Node.js. Titulaire d'un Master en Informatique.",
              url: "https://stephaneroylex.dev",
              sameAs: [
                "https://github.com/MacDallas123",
                "https://www.linkedin.com/in/roylex-stephane-53a4292bb",
                "https://x.com/StephaneRoylex",
                "https://gitlab.com/macdallas",
                "https://www.facebook.com/profile.php?id=61556815223880",
              ],
              // knowsAbout: ["JavaScript", "TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
              knowsAbout: ["JavaScript", "TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Université de Yaoundé I",
                description: "Master en Informatique",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
