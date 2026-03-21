"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Search,
  Shuffle,
  Microscope,
  Languages,
  Clock,
  Scale,
  Puzzle,
} from "lucide-react";

const POWERS = [
  {
    icon: BookOpen,
    title: "Complex Document Handling",
    desc: "Processes long-form documents, academic papers, legal texts, and multi-page reports without losing context.",
  },
  {
    icon: Search,
    title: "Autonomous Web Search",
    desc: "No manual source input required. Praman independently formulates search queries and retrieves evidence.",
  },
  {
    icon: Shuffle,
    title: "Ambiguity Resolution",
    desc: "Detects vague or context-dependent claims and requests clarification or flags them transparently.",
  },
  {
    icon: Microscope,
    title: "Deep Source Analysis",
    desc: "Evaluates source credibility, bias rating, publication date, and author expertise before citing.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    desc: "Verifies content in 30+ languages, automatically translating and cross-referencing global sources.",
  },
  {
    icon: Clock,
    title: "Historical Context Awareness",
    desc: "Distinguishes between claims that were true historically vs. claims that remain true today.",
  },
  {
    icon: Scale,
    title: "Balanced Verdict Engine",
    desc: "Presents all sides of contested claims before assigning a verdict, avoiding false certainty.",
  },
  {
    icon: Puzzle,
    title: "API & Integration Ready",
    desc: "Embed Praman into your CMS, newsroom workflow, or LLM pipeline via a clean REST API.",
  },
];

export default function Powers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(129,140,248,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute left-0 top-1/3 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span
                className="inline-block text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                style={{
                  color: "#818CF8",
                  background: "rgba(129,140,248,0.08)",
                  border: "1px solid rgba(129,140,248,0.15)",
                }}
              >
                Capabilities
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our{" "}
                <span className="gradient-text">powers</span>
              </h2>
            </div>
            <p
              className="text-slate-400 max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Praman isn't just a fact-checker. It's a full-stack
              epistemic intelligence engine — capable of operating at scale,
              across domains.
            </p>
          </div>
        </motion.div>

        {/* Powers grid — alternating layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POWERS.map((power, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(129,140,248,0.3)",
                transition: { duration: 0.2 },
              }}
              className="relative p-5 rounded-2xl group cursor-default"
              style={{
                background: "rgba(13,19,32,0.6)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "border-color 0.2s",
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-3 right-4 text-5xl font-bold opacity-[0.04]"
                style={{ fontFamily: "var(--font-display)", color: "#818CF8" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, rgba(129,140,248,0.06) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(129,140,248,0.1)",
                    border: "1px solid rgba(129,140,248,0.15)",
                  }}
                >
                  <power.icon size={18} className="text-indigo-400" />
                </div>

                <h3
                  className="text-white font-semibold text-sm mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {power.title}
                </h3>
                <p
                  className="text-slate-500 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {power.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 relative overflow-hidden rounded-2xl p-8 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,19,32,0.9) 0%, rgba(15,23,42,0.9) 100%)",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
        >
          {/* Decorative */}
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Left text */}
            <div className="flex-1">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Praman is{" "}
                <span className="gradient-text">epistemically honest</span>
              </h3>
              <p
                className="text-slate-400 text-sm leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                We believe a fact-checking engine must be transparent about its
                own uncertainty. Praman will never fabricate confidence.
                If evidence is insufficient, it says so — and explains why.
              </p>
            </div>

            {/* Right: mini stats */}
            <div className="flex gap-6 shrink-0">
              {[
                { value: "0%", label: "Hallucination\nRate" },
                { value: "100%", label: "Source\nCitation" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-3xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs text-slate-500 whitespace-pre-line"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
