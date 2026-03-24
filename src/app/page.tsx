"use client";

import { motion } from "framer-motion";

const techStack = [
  { label: "Next.js 16+", color: "var(--color-accent)" },
  { label: "TypeScript", color: "var(--color-accent3)" },
  { label: "Prisma ORM", color: "var(--color-accent4)" },
  { label: "Framer Motion", color: "var(--color-accent2)" },
  { label: "Lottie / Rive", color: "var(--color-accent)" },
  { label: "Supabase Auth", color: "var(--color-accent3)" },
];

const stats = [
  { value: "50", label: "WEEKS", sub: "Challenge" },
  { value: "16+", label: "NEXT.JS", sub: "Version" },
  { value: "500+", label: "MOTION", sub: "Assets" },
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
      {/* --- TOPBAR --- */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-[200] h-[58px] flex items-center px-7 gap-4"
        style={{
          background: "rgba(7, 7, 15, 0.9)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-extrabold text-[15px] tracking-tight">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black"
            style={{ background: "var(--color-accent)", color: "#07070f" }}
          >
            SM
          </div>
          <span>
            SaaS<span style={{ color: "var(--color-accent)" }}>Motion</span>
          </span>
        </div>

        <div className="flex-1" />

        {/* Pills */}
        <div className="pill pill-accent hidden md:inline-flex">
          <span style={{ fontSize: 7 }}>—</span> v2.0 LIVE
        </div>
        <div className="pill pill-ghost hidden lg:inline-flex">
          <strong className="text-white">50</strong> Week Challenge
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-[1120px] mx-auto px-8 pt-16 pb-12 grid lg:grid-cols-[1fr_200px] gap-8 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            50 WEEK CHALLENGE PLATFORM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="leading-[1.0] tracking-[-0.03em] mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(44px, 5.5vw, 72px)",
              fontStyle: "italic",
            }}
          >
            SaaS{" "}
            <em
              className="not-italic font-extrabold text-[0.58em] rounded-[5px] align-middle mr-1.5 px-3 py-0.5" 
              style={{
                fontFamily: "var(--font-sans)",
                background: "var(--color-accent)",
                color: "#07070f",
              }}
            >
              Motion
            </em>
            <br />
            Graphics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs leading-[1.9] max-w-lg"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(240,240,246,0.6)",
            }}
          >
            Platform สำหรับการเรียนรู้และสร้างสรรค์ SaaS Motion Graphics & Interactive UI <br />
            ร่วมท้าทาย Challenge 50 สัปดาห์ เพื่อพัฒนาทักษะระดับ Senior
          </motion.p>
        </div>

        {/* Right - Progress Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="flex flex-col items-center gap-2"
        >
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle
              cx="70" cy="70" r="56"
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="11"
            />
            <motion.circle
              cx="70" cy="70" r="56"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray="351.86"
              initial={{ strokeDashoffset: 351.86 }}
              animate={{ strokeDashoffset: 351.86 * 0.85 }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" as const }}
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            />
            <text
              x="70" y="64"
              textAnchor="middle"
              fill="var(--foreground)"
              style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 700 }}
            >
              15%
            </text>
            <text
              x="70" y="84"
              textAnchor="middle"
              fill="var(--color-muted)"
              style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em" }}
            >
              PROGRESS
            </text>
          </svg>
        </motion.div>
      </section>

      {/* --- STATS ROW --- */}
      <section className="max-w-[1120px] mx-auto px-8 mb-12">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass-card p-5 text-center"
            >
              <div
                className="text-2xl font-extrabold italic"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-accent)" }}
              >
                {s.value}
              </div>
              <div
                className="text-[9px] tracking-[0.18em] uppercase mt-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1120px] mx-auto px-8 pb-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Left Column - Feature Cards */}
          <div>
            {/* Tech Stack */}
            <div className="section-label mb-4">TECH STACK</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card p-4 group cursor-pointer"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${tech.color}, transparent)` }}
                  />
                  <div
                    className="text-[9px] tracking-[0.18em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: tech.color }}
                  >
                    MODULE
                  </div>
                  <div className="text-[14px] font-semibold">{tech.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Architecture Info */}
            <div className="divider mb-8" />
            <div className="section-label mb-4">ARCHITECTURE</div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 mb-6"
              style={{ borderColor: "rgba(232, 255, 71, 0.22)", background: "linear-gradient(135deg, rgba(232, 255, 71, 0.07) 0%, rgba(0, 212, 255, 0.04) 100%)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent3))" }} />
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded text-[10px] tracking-[0.18em] uppercase font-bold"
                  style={{ fontFamily: "var(--font-mono)", background: "var(--color-accent)", color: "#07070f" }}
                >
                  CLEAN ARCH
                </span>
                <span
                  className="text-[24px] italic flex-1 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Feature-based Modular Structure
                </span>
              </div>
              <p
                className="text-[13px] leading-relaxed mb-4"
                style={{ color: "rgba(240,240,246,0.6)" }}
              >
                โครงสร้างระบบที่เน้นความยืดหยุ่นและการขยายตัว รองรับทั้ง Web และ Desktop Application ด้วย Next.js 16 และ Zod Validation
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Lottie Files", desc: "After Effects to .lottie", accent: "var(--color-accent2)" },
                  { title: "Rive Interactive", desc: "State Machine Driven UI", accent: "var(--color-accent4)" },
                  { title: "Framer Motion", desc: "Micro-interactions", accent: "var(--color-accent3)" },
                  { title: "Prisma Client", desc: "Type-safe DB Access", accent: "var(--color-accent)" },
                ].map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-card p-5"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${feat.accent}, transparent)` }}
                    />
                    <div
                      className="text-[9px] tracking-[0.18em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-mono)", color: feat.accent }}
                    >
                      — INTEGRATED
                    </div>
                    <div className="text-[15px] italic mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {feat.title}
                    </div>
                    <div
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
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
            <div className="glass-card p-8 text-center">
              <div className="text-[10px] tracking-[0.2em] font-mono text-accent mb-4" style={{ color: "var(--color-accent)" }}>// ACCESS_RESTRICTED</div>
              <h3 className="font-serif italic text-2xl mb-6">Auth Fusion Active</h3>
              <p className="text-xs text-muted font-mono leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
                Legacy V1 authentication layer has been merged. 
                System re-calibration in progress.
              </p>
              <div className="w-full h-[1px] bg-border mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="btn-accent w-full justify-center opacity-50 cursor-not-allowed">
                Initializing...
              </div>
            </div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card p-5"
            >
              <div
                className="text-[9px] tracking-[0.18em] uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent3)" }}
              >
                // SYSTEM STATUS
              </div>
              {[
                { label: "Build", status: "Operational", color: "#34A853" },
                { label: "Database", status: "Connected", color: "#34A853" },
                { label: "Auth", status: "Ready", color: "var(--color-accent)" },
                { label: "Motion Engine", status: "Active", color: "var(--color-accent3)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
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
                      style={{ fontFamily: "var(--font-mono)", color: item.color }}
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
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
          >
            SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // TYPE-SAFE // FRAME-RATE OPTIMIZED // SUPABASE AUTH //
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] italic"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
          >
            SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // TYPE-SAFE // FRAME-RATE OPTIMIZED // SUPABASE AUTH //
          </span>
        </div>
      </footer>
    </main>
  );
}
