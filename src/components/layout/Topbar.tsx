"use client";

import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";

export function Topbar() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="topbar"
    >
      <div className="logo">
        <div className="logo-icon">
          <div
            className="w-full h-full flex items-center justify-center text-[11px] font-black"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            SM
          </div>
        </div>
        <span>
          SaaS<span style={{ color: "var(--accent)" }}>Motion</span>
        </span>
      </div>

      <div className="tb-sp" />

      {/* Auth Status */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="user-pill">
            <span className="hidden sm:inline">{user?.email}</span>
            <button 
              className="user-logout"
              onClick={() => { /* Supabase signout logic */ }}
            >
              <span className="ms">logout</span>
            </button>
          </div>
        ) : (
          <div className="pill pill-w">
            Guest <span className="ml-2 text-[10px] opacity-50">MODE</span>
          </div>
        )}
        
        <div className="pill pill-s hidden md:inline-flex">
          <span style={{ fontSize: 7 }}>—</span> v2.0 LIVE
        </div>
      </div>
    </motion.nav>
  );
}
