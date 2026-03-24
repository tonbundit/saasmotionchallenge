"use client";

import { motion } from "framer-motion";

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

export function StatsRow() {
  return (
    <section className="max-w-[1120px] mx-auto px-8 mb-12">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="wcard p-5 text-center"
          >
            <div
              className="text-2xl font-extrabold italic"
              style={{ fontFamily: "var(--serif)", color: "var(--accent)" }}
            >
              {s.value}
            </div>
            <div
              className="text-[9px] tracking-[0.18em] uppercase mt-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
