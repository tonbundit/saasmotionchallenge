"use client";

import { useEffect } from "react";
import { Topbar } from "@/components/layout/Topbar";
import { Hero } from "@/components/features/Hero";
import { StatsRow } from "@/components/features/StatsRow";
import { WeekCard } from "@/components/features/WeekCard";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useChallengeStore } from "@/store/useChallengeStore";
import { ChallengeWeek } from "@/types";

// ข้อมูลจำลองสำหรับช่วงเริ่มต้น
const INITIAL_CHALLENGES: ChallengeWeek[] = [
  {
    id: "1",
    week_number: 1,
    title: "SaaS Glassmorphism Core",
    description: "Building the foundation of modern SaaS UI",
    status: "active",
    assets: {},
    unlocks_at: new Date().toISOString()
  },
  {
    id: "2",
    week_number: 2,
    title: "Dynamic Sidebar Motion",
    description: "Interactive navigation patterns",
    status: "locked",
    assets: {},
    unlocks_at: new Date().toISOString()
  },
  {
    id: "3",
    week_number: 3,
    title: "Data Visualization Anim",
    description: "Bringing charts to life",
    status: "locked",
    assets: {},
    unlocks_at: new Date().toISOString()
  }
];

export default function Home() {
  // 1. Initialize Auth Session
  useSupabaseAuth();

  const { weeks, setWeeks } = useChallengeStore();

  // 2. Load initial data (จะถูกเปลี่ยนเป็นการ fetch จริงในภายหลัง)
  useEffect(() => {
    if (weeks.length === 0) {
      setWeeks(INITIAL_CHALLENGES);
    }
  }, [weeks.length, setWeeks]);

  return (
    <main className="min-h-screen relative">
      <Topbar />
      <Hero />
      <StatsRow />

      <section className="max-w-[1120px] mx-auto px-8 pb-24 relative z-10">
        <div className="hero-eye mb-6">WEEKLY CHALLENGES</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.map((week, i) => (
            <WeekCard key={week.id} week={week} index={i} />
          ))}
        </div>

        {/* Footer Marquee */}
        <footer className="fixed bottom-0 left-0 right-0 z-[300] bg-[rgba(7,7,15,0.95)] backdrop-blur-lg border-t border-[var(--border2)] py-3 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[1, 2].map((i) => (
              <span key={i} className="text-[10px] font-mono font-bold tracking-[0.2em] text-[var(--accent)] uppercase italic">
                SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // SUPABASE AUTH //  
              </span>
            ))}
          </div>
        </footer>
      </section>
    </main>
  );
}
