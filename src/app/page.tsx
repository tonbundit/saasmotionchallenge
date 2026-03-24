"use client";

import { motion } from "framer-motion";
import { Topbar } from "@/components/layout/Topbar";
import { Hero } from "@/components/features/Hero";
import { StatsRow } from "@/components/features/StatsRow";

const techStack = [
  { label: "Next.js 16+", color: "var(--accent)" },
  { label: "TypeScript", color: "var(--accent3)" },
  { label: "Prisma ORM", color: "var(--accent4)" },
  { label: "Framer Motion", color: "var(--accent2)" },
  { label: "Lottie / Rive", color: "var(--accent)" },
  { label: "Supabase Auth", color: "var(--accent3)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" as const },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Topbar />
      <Hero />
      <StatsRow />

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1120px] mx-auto px-8 pb-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Left Column - Feature Cards */}
          <div>
            {/* Tech Stack */}
            <div className="hero-eye mb-4">TECH STACK</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="wcard p-4 group cursor-pointer"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${tech.color}, transparent)` }}
                  />
                  <div
                    className="wc-num mb-2"
                    style={{ color: tech.color }}
                  >
                    MODULE
                  </div>
                  <div className="text-[14px] font-semibold">{tech.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Architecture Info */}
            <div className="divider mb-8" />
            <div className="hero-eye mb-4">ARCHITECTURE</div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ac on p-6 mb-6"
              style={{ background: "linear-gradient(135deg, rgba(232, 255, 71, 0.07) 0%, rgba(0, 212, 255, 0.04) 100%)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, var(--accent), var(--accent3))" }} />
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded text-[10px] tracking-[0.18em] uppercase font-bold"
                  style={{ fontFamily: "var(--mono)", background: "var(--accent)", color: "var(--bg)" }}
                >
                  CLEAN ARCH
                </span>
                <span
                  className="text-[24px] italic flex-1 leading-tight"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  Feature-based Modular Structure
                </span>
              </div>
              <p
                className="text-[13px] leading-relaxed mb-4"
                style={{ color: "var(--text2)" }}
              >
                โครงสร้างระบบที่เน้นความยืดหยุ่นและการขยายตัว รองรับทั้ง Web และ Desktop Application ด้วย Next.js 16 และ Zod Validation
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Lottie Files", desc: "After Effects to .lottie", accent: "var(--accent2)" },
                  { title: "Rive Interactive", desc: "State Machine Driven UI", accent: "var(--accent4)" },
                  { title: "Framer Motion", desc: "Micro-interactions", accent: "var(--accent3)" },
                  { title: "Prisma Client", desc: "Type-safe DB Access", accent: "var(--accent)" },
                ].map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="wcard p-5"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${feat.accent}, transparent)` }}
                    />
                    <div
                      className="wc-num mb-1"
                      style={{ color: feat.accent }}
                    >
                      — INTEGRATED
                    </div>
                    <div className="wc-tt mb-1">
                      {feat.title}
                    </div>
                    <div
                      className="text-[11px]"
                      style={{ fontFamily: "var(--mono)", color: "var(--muted)" }}
                    >
                      {feat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Placeholder */}
          <div className="flex flex-col gap-6">
            <div className="wcard p-8 text-center">
              <div className="wc-num text-accent mb-4" style={{ color: "var(--accent)" }}>// ACCESS_RESTRICTED</div>
              <h3 className="wc-tt text-2xl mb-6">Auth Fusion Active</h3>
              <p className="text-xs text-muted font-mono leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Legacy V1 authentication layer has been merged. 
                System re-calibration in progress.
              </p>
              <div className="w-full h-[1px] bg-border mb-8" style={{ background: "var(--border)" }} />
              <div className="auth-btn w-full justify-center opacity-50 cursor-not-allowed">
                Initializing...
              </div>
            </div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="wcard p-5"
            >
              <div
                className="wc-num mb-3"
                style={{ color: "var(--accent3)" }}
              >
                // SYSTEM STATUS
              </div>
              {[
                { label: "Build", status: "Operational", color: "#34A853" },
                { label: "Database", status: "Connected", color: "#34A853" },
                { label: "Auth", status: "Ready", color: "var(--accent)" },
                { label: "Motion Engine", status: "Active", color: "var(--accent3)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "var(--mono)", color: "var(--muted)" }}
                  >
                    {item.label}
                  </span>
                  <span className="flex items-center gap-2">
                    <span
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ background: item.color, animation: "blink 2s infinite" }}
                    />
                    <span
                      className="text-[10px] font-bold"
                      style={{ fontFamily: "var(--mono)", color: item.color }}
                    >
                      {item.status}
                    </span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER MARQUEE --- */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-50 px-8 py-3 flex items-center overflow-hidden whitespace-nowrap"
        style={{
          background: "rgba(7, 7, 15, 0.95)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(232, 255, 71, 0.15)",
        }}
      >
        <div className="flex gap-12 animate-marquee">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] italic"
            style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
          >
            SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // TYPE-SAFE // FRAME-RATE OPTIMIZED // SUPABASE AUTH //
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] italic"
            style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
          >
            SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // TYPE-SAFE // FRAME-RATE OPTIMIZED // SUPABASE AUTH //
          </span>
        </div>
      </footer>
    </main>
  );
}
