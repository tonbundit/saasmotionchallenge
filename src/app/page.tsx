"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Topbar } from "@/components/layout/Topbar";
import { Hero } from "@/components/features/Hero";
import { StatsRow } from "@/components/features/StatsRow";
import { WeekCard } from "@/components/features/WeekCard";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useChallengeStore } from "@/store/useChallengeStore";
import { ChallengeWeek } from "@/types";

const INITIAL_CHALLENGES: ChallengeWeek[] = [
  { id: "1", week_number: 1, title: "SaaS Glassmorphism Core", description: "Building the foundation", status: "active", assets: {}, unlocks_at: new Date().toISOString() },
  { id: "2", week_number: 2, title: "Dynamic Sidebar Motion", description: "Interactive navigation", status: "locked", assets: {}, unlocks_at: new Date().toISOString() },
  { id: "3", week_number: 3, title: "Data Visualization Anim", description: "Bringing charts to life", status: "locked", assets: {}, unlocks_at: new Date().toISOString() }
];

export default function Home() {
  useSupabaseAuth();
  const { weeks, setWeeks } = useChallengeStore();
  const [currentView, setView] = useState<'db' | 'gl' | 'pr'>('db');

  useEffect(() => {
    if (weeks.length === 0) setWeeks(INITIAL_CHALLENGES);
  }, [weeks.length, setWeeks]);

  return (
    <main className="min-h-screen relative">
      <Topbar />
      
      <AnimatePresence mode="wait">
        {currentView === 'db' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Hero />
            <StatsRow />

            <section className="max-w-[1120px] mx-auto px-8 pb-24 relative z-10">
              {/* Active Banner */}
              <div className="ac mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="hero-eye mb-2">CURRENT CHALLENGE</div>
                  <h2 className="wc-tt text-2xl" style={{ margin: 0 }}>Week 01: Glassmorphism Design</h2>
                  <p className="text-xs opacity-60 mt-2 font-mono">Deadline: 6 Days Remaining</p>
                </div>
                <button className="pill pill-s px-8 py-3 text-sm">CONTINUE WORKING</button>
              </div>

              <div className="hero-eye mb-6">WEEKLY PROGRESS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeks.map((week, i) => (
                  <WeekCard key={week.id} week={week} index={i} />
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {currentView === 'gl' && (
          <motion.div
            key="gallery"
            className="max-w-[1120px] mx-auto px-8 py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="ms text-6xl mb-6 opacity-20">auto_awesome_motion</div>
            <h2 className="text-3xl font-serif italic mb-4">Challenge Gallery</h2>
            <p className="text-muted font-mono text-sm">Complete challenges to see your work here.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Bar (View Switcher) */}
      <nav className="action-bar">
        <button 
          className={`ab-btn ${currentView === 'db' ? 'on' : ''}`}
          onClick={() => setView('db')}
        >
          <span className="ms">dashboard</span>
          <span className="hidden sm:inline">Dashboard</span>
        </button>
        <button 
          className={`ab-btn ${currentView === 'gl' ? 'on' : ''}`}
          onClick={() => setView('gl')}
        >
          <span className="ms">grid_view</span>
          <span className="hidden sm:inline">Gallery</span>
        </button>
        <button 
          className={`ab-btn ${currentView === 'pr' ? 'on' : ''}`}
          onClick={() => setView('pr')}
        >
          <span className="ms">person</span>
          <span className="hidden sm:inline">Profile</span>
        </button>
      </nav>

      <footer className="fixed bottom-0 left-0 right-0 z-[300] bg-[rgba(7,7,15,0.95)] backdrop-blur-lg border-t border-[var(--border2)] py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[1, 2].map((i) => (
            <span key={i} className="text-[10px] font-mono font-bold tracking-[0.2em] text-[var(--accent)] uppercase italic">
              SAAS MOTION // 50 WEEK CHALLENGE // LOTTIE & RIVE READY // CLEAN ARCHITECTURE // SUPABASE AUTH //  
            </span>
          ))}
        </div>
      </footer>
    </main>
  );
}
