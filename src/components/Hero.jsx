"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import profilePhoto from "@/assets/me.jpg";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match its container responsively
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle animation logic
    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${p.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(255,101,132,0.07) 0%, transparent 50%)",
        }}
      />

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,42,69,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,69,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-10 pt-[100px] pb-20 md:py-[120px] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        {/* Status badge */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-3)] shadow-md flex-shrink-0 flex items-center justify-center">
            <div
              className="w-2 h-2 rounded-full bg-[var(--accent-3)] animate-pulse"
              style={{ animation: "float 2s ease-in-out infinite" }}
            />
          </div>
          <span className="font-mono text-xs text-[var(--accent-3)] tracking-wider">
            Disponible pour de nouvelles missions
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-extrabold leading-[1] mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="block text-[clamp(2.1rem,6vw,5.25rem)] text-[var(--text-primary)] tracking-[-0.03em]">
            Stephane
          </span>
          <span className="block text-[clamp(2.1rem,6vw,5.25rem)] tracking-[-0.03em]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(135deg, #6c63ff, #ff6584)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Roylex
            </span>
          </span>
        </h1>
   

        {/* Role */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="font-mono text-[clamp(1rem,2.5vw,1.375rem)] text-[var(--text-secondary)] tracking-wide">
            Développeur Fullstack
          </span>
          <span className="w-px h-5 bg-[var(--border-2)] flex-shrink-0" />
          <span className="font-mono text-[clamp(1rem,2.5vw,1.375rem)] text-[var(--accent)] tracking-wide">
            JavaScript
          </span>
        </div>

        {/* Description */}
        <p className="max-w-xl text-[var(--text-secondary)] text-[15px] leading-relaxed mb-12">
          Titulaire d&apos;un{" "}
          <span className="text-[var(--text-primary)] italic">
            Master en Informatique
          </span>
          . Je conçois des interfaces élégantes et des architectures robustes avec{" "}
          <span className="text-[var(--accent)]">Next.js</span>
          ,{" "}
          <span className="text-[var(--accent)]">React</span>
          ,{" "}
          <span className="text-[var(--accent)]">Node.js</span> et{" "}
          <span className="text-[var(--accent)]">PostgreSQL</span>
          . Passionné par les systèmes performants et l&apos;UX qui fait la
          différence.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-[var(--accent)] text-white rounded-lg no-underline font-mono text-[13px] font-medium inline-flex items-center gap-2 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              boxShadow: "0 4px 24px rgba(108,99,255,0.4)",
            }}
          >
            Voir mes projets <span>→</span>
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-3.5 bg-transparent text-[var(--text-primary)] border border-[var(--border-2)] rounded-lg no-underline font-mono text-[13px] inline-flex items-center gap-2 transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            ↓ Télécharger CV
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-[var(--border)]">
          {[
            { value: "2+", label: "Années d'expérience" },
            { value: "10+", label: "Projets livrés" },
            { value: "5+", label: "Clients satisfaits" },
            { value: "100%", label: "Satisfaction client" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-extrabold text-4xl md:text-[36px] text-[var(--text-primary)] leading-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.value}
              </div>
              <div className="font-mono text-[11px] text-[var(--text-muted)] mt-1.5 tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div
          className="glow-border relative rounded-full overflow-hidden w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] flex-shrink-0"
          style={{ background: "var(--bg-card)" }}
        >
          <Image
            src={profilePhoto}
            alt="Portrait de Stéphane Roylex"
            fill
            sizes="(max-width: 1024px) 220px, 280px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        {/* <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider uppercase">Scroll</span> */}
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
