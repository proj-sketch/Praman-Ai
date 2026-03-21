"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldAlert,
  Brain,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Lock,
  Users,
} from "lucide-react";

const WHY_CARDS = [
  {
    icon: AlertTriangle,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.2)",
    title: "Rampant Misinformation",
    desc: "Over 60% of viral content contains at least one verifiably false claim. Manual fact-checking can't keep up.",
  },
  {
    icon: Brain,
    color: "#EF4444",
    glow: "rgba(239,68,68,0.2)",
    title: "LLM Hallucinations",
    desc: "AI models confidently fabricate facts. Praman catches these fabrications before they spread or cause harm.",
  },
  {
    icon: Lock,
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.2)",
    title: "Trust & Compliance",
    desc: "Regulated industries demand verified content. Praman provides audit-ready accuracy trails and source citations.",
  },
  {
    icon: Users,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.2)",
    title: "Public Trust Erosion",
    desc: "When misinformation spreads, institutional trust collapses. Praman helps rebuild credibility at scale.",
  },
];

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, inView };
}

export default function About() {
  const { ref: sectionRef, inView: sectionInView } = useReveal();
  const { ref: cardsRef, inView: cardsInView } = useReveal();

  return (
    <section className="section-padding relative z-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* What is Praman AI */}
        <div ref={sectionRef} className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: "#60A5FA",
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              About
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What is{" "}
              <span className="gradient-text">Praman AI?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left: explanation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              <p
                className="text-slate-300 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <strong className="text-white font-semibold">Praman AI</strong> is an autonomous 
                fact-checking engine. It works like a tireless AI detective—autonomously 
                retrieving credible evidence and delivering structured, citation-backed 
                accuracy reports to combat misinformation and LLM hallucinations.
              </p>

              {/* Visual Flow diagram instead of bullets */}
              <div className="flex items-center justify-between relative mt-10 px-4 py-8 bg-slate-900/30 rounded-2xl border border-white/5">
                {/* Connecting line */}
                <div className="absolute left-10 right-10 top-1/2 w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 -translate-y-1/2" />
                
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <div className="absolute inset-0 bg-blue-500/20 shimmer" />
                    <Brain size={24} className="text-blue-400 relative z-10" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>Analyze</span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <div className="absolute inset-0 bg-cyan-500/20 shimmer blur-sm delay-150" />
                    <BarChart3 size={24} className="text-cyan-400 relative z-10" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>Retrieve</span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-green-950/80 border border-green-500/40 flex items-center justify-center relative shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                    <div className="absolute inset-0 rounded-full border border-green-400 pulse-ring text-green-500/40" />
                    <CheckCircle2 size={24} className="text-green-400 relative z-10" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>Verify</span>
                </div>
              </div>
            </motion.div>

            {/* Right: visual card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative"
            >
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: "rgba(13,19,32,0.8)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-30" />

                {/* Mock accuracy report UI */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs text-slate-500 tracking-wide"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      ACCURACY REPORT
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        color: "#4ADE80",
                        border: "1px solid rgba(34,197,94,0.2)",
                      }}
                    >
                      Verified
                    </span>
                  </div>

                  {/* Claims list */}
                  {[
                    { claim: "Global temperatures rose 1.1°C since 1850", score: 96, status: "true" },
                    { claim: "Arctic ice has declined 40% since 1979", score: 89, status: "true" },
                    { claim: "CO₂ levels hit record 423 ppm in 2024", score: 94, status: "true" },
                    { claim: "Oceans absorb 90% of excess heat", score: 42, status: "partial" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="mb-3 p-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span
                          className="text-xs text-slate-300 leading-snug"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.claim}
                        </span>
                        <span
                          className="text-xs font-semibold shrink-0"
                          style={{
                            color:
                              item.status === "true" ? "#4ADE80" : "#F59E0B",
                          }}
                        >
                          {item.score}%
                        </span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={sectionInView ? { width: `${item.score}%` } : {}}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              item.status === "true"
                                ? "linear-gradient(90deg, #22C55E, #4ADE80)"
                                : "linear-gradient(90deg, #F59E0B, #FBBF24)",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <div className="mt-4 flex items-center gap-2">
                    <BarChart3 size={14} className="text-blue-400" />
                    <span className="text-xs text-slate-500">
                      3 sources verified · Report generated in 2.1s
                    </span>
                  </div>
                </div>
              </div>

              {/* Glow below card */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 rounded-full blur-2xl opacity-20"
                style={{ background: "#3B82F6" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Why Use Praman AI */}
        <div ref={cardsRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: "#F59E0B",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.15)",
              }}
            >
              Why It Matters
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The problem is{" "}
              <span className="gradient-text-warm">real & urgent</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative p-5 rounded-2xl group cursor-default"
                style={{
                  background: "rgba(13,19,32,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${card.glow} 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative"
                  style={{
                    background: `${card.glow}`,
                    border: `1px solid ${card.color}22`,
                  }}
                >
                  <card.icon size={20} style={{ color: card.color }} />
                </div>

                <h3
                  className="text-white font-semibold mb-2 text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-slate-400 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 p-5 rounded-2xl flex flex-wrap gap-8 justify-around"
            style={{
              background: "rgba(59,130,246,0.04)",
              border: "1px solid rgba(59,130,246,0.1)",
            }}
          >
            {[
              { value: "3.6B", label: "Fake news items shared daily" },
              { value: "78%", label: "People can't spot misinformation" },
              { value: "$78B", label: "Annual cost of misinformation" },
              { value: "< 3s", label: "Praman's verification time" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: i === 3 ? "#4ADE80" : "#F1F5F9",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-slate-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
