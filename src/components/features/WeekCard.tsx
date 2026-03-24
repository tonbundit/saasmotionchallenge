"use client";

import { motion } from "framer-motion";
import { ChallengeWeek } from "@/types";

interface WeekCardProps {
  week: ChallengeWeek;
  index: number;
}

export function WeekCard({ week, index }: WeekCardProps) {
  const isLocked = week.status === 'locked';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`wcard p-5 ${isLocked ? 'cl' : ''}`}
    >
      <div className="wc-top">
        <span className="wc-num">WEEK {week.week_number.toString().padStart(2, '0')}</span>
        <span className={`wc-bdg ${week.status === 'active' ? 'bc' : 'bl'}`}>
          {week.status.toUpperCase()}
        </span>
      </div>

      <h3 className="wc-tt mb-4">{week.title}</h3>

      <div className="wc-bar">
        <div 
          className="wc-fill" 
          style={{ width: week.status === 'completed' ? '100%' : '0%' }} 
        />
      </div>

      <div className="wc-foot mt-4">
        <span className="ms">
          {isLocked ? 'lock' : 'play_circle'}
        </span>
        <span className="text-[10px] font-mono">
          {isLocked ? 'UNLOCKS SOON' : 'START LESSON'}
        </span>
      </div>
    </motion.div>
  );
}
