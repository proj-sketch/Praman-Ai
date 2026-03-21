"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileSearch,
  Globe,
  ShieldCheck,
  ChevronDown,
  Cpu,
  Link2,
  Layers,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: FileSearch,
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.25)",
    border: "rgba(59,130,246,0.2)",
    bg: "rgba(59,130,246,0.08)",
    title: "Claim Extraction",
    subtitle: "NLP & Semantic Parsing",
    desc: "The engine ingests your input — article, URL, or raw text — and uses advanced NLP to identify and isolate every verifiable factual claim within the content.",
    details: ["Named Entity Recognition", "Temporal Claim Detection", "Ambiguity Flagging", "Claim Deduplication"],
  },
  {
    step: "02",
    icon: Globe,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.2)",
    bg: "rgba(6,182,212,0.08)",
    title: "Evidence Retrieval",
    subtitle: "Autonomous Web Search",
    desc: "For each extracted claim, Praman autonomously queries 50+ authoritative sources — academic papers, news archives, government databases, and fact-check repositories.",
    details: ["Real-Time Web Search", "Source Credibility Scoring", "Multi-source Cross-reference", "Recency Weighting"],
  },
  {
    step: "03",
    icon: ShieldCheck,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.25)",
    border: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.08)",
    title: "Verification & Report",
    subtitle: "AI Reasoning & Output",
    desc: "Evidence is synthesized using LLM reasoning to assign a confidence score to each claim. Results are compiled into a structured, human-readable accuracy report with full citations.",
    details: ["Confidence Score Assignment", "Citation Mapping", "Verdict Classification", "Exportable Report"],
  },
];

export default function Flow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: "#818CF8",
              background: "rgba(129,140,248,0.08)",
              border: "1px solid rgba(129,140,248,0.15)",
            }}
          >
            Pipeline
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How Praman <span className="gradient-text">works</span>
          </h2>
          <p
            className="text-slate-400 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            A three-stage autonomous verification pipeline — from raw input to
            structured evidence in seconds.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col items-center gap-0">
          {STEPS.map((step, i) => (
            <div key={i} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="w-full max-w-5xl"
              >
                <div
                  className="relative rounded-2xl p-6 sm:p-8 group overflow-hidden"
                  style={{
                    background: "rgba(13,19,32,0.8)",
                    border: `1px solid ${step.border}`,
                  }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${step.glow} 0%, transparent 50%)`,
                    }}
                  />

                  <div className="relative flex flex-col sm:flex-row gap-6">
                    {/* Left: step number + icon */}
                    <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background: step.bg,
                          border: `1px solid ${step.border}`,
                          boxShadow: `0 0 30px ${step.glow}`,
                        }}
                      >
                        <step.icon size={24} style={{ color: step.color }} />
                      </div>
                      <div
                        className="font-bold text-4xl sm:text-5xl"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: step.color,
                          opacity: 0.2,
                        }}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Center: content */}
                    <div className="flex-1">
                      <div className="mb-1">
                        <span
                          className="text-xs tracking-wide"
                          style={{ color: step.color, fontFamily: "var(--font-body)" }}
                        >
                          {step.subtitle}
                        </span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-slate-400 text-sm leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {step.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((d, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{
                              background: step.bg,
                              color: step.color,
                              border: `1px solid ${step.border}`,
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connector arrow between steps */}
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.4 }}
                  className="flex flex-col items-center py-3"
                  style={{ transformOrigin: "top" }}
                >
                  <div
                    className="w-px h-8 flow-line opacity-40"
                  />
                  <ChevronDown size={16} className="text-blue-500 opacity-60" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: total flow summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { icon: Cpu, label: "AI Processing", value: "~800ms" },
            { icon: Link2, label: "Sources Checked", value: "50+" },
            { icon: Layers, label: "Claims Analyzed", value: "Unlimited" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 py-5 px-4 text-center"
              style={{ background: "rgba(13,19,32,0.5)" }}
            >
              <item.icon size={18} className="text-blue-400 mb-1 opacity-70" />
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.value}
              </span>
              <span
                className="text-xs text-slate-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
