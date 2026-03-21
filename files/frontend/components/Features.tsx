"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart2,
  Link,
  Gauge,
  FileText,
  Eye,
  Download,
} from "lucide-react";

const FEATURES = [
  {
    icon: BarChart2,
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.15)",
    title: "Interactive Accuracy Report",
    desc: "Get a fully interactive, color-coded dashboard showing verdict breakdowns per claim — with drillable evidence for each finding.",
    badge: "Core Feature",
  },
  {
    icon: Link,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.15)",
    title: "Citation Mapping",
    desc: "Every claim is linked to its exact source — article, paper, or database — so you can follow the evidence trail directly.",
    badge: "Transparency",
  },
  {
    icon: Gauge,
    color: "#818CF8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.15)",
    title: "Confidence Scoring",
    desc: "Each verified claim receives a percentage confidence score based on source quality, recency, and cross-reference strength.",
    badge: "AI-Powered",
  },
  {
    icon: FileText,
    color: "#4ADE80",
    bg: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.15)",
    title: "Multi-format Input",
    desc: "Paste raw text, drop a URL, or upload a PDF document. Praman handles any format without requiring manual preprocessing.",
    badge: "Flexible",
  },
  {
    icon: Eye,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.15)",
    title: "Verdict Classification",
    desc: "Claims are classified into True, Partially True, False, Misleading, or Unverifiable — with plain-language explanations.",
    badge: "Clear Output",
  },
  {
    icon: Download,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.15)",
    title: "Exportable Reports",
    desc: "Download your accuracy report as a PDF or JSON for compliance documentation, content review workflows, or team sharing.",
    badge: "Enterprise",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative z-10">
      {/* Decorative top border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-20"
        style={{
          background: "linear-gradient(180deg, transparent, #3B82F6, transparent)",
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
              color: "#4ADE80",
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.15)",
            }}
          >
            Features
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for{" "}
            <span className="gradient-text">clarity & trust</span>
          </h2>
          <p
            className="text-slate-400 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Every feature is designed to give you complete confidence in the
            information you share, publish, or act upon.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl group cursor-default overflow-hidden"
              style={{
                background: "rgba(13,19,32,0.7)",
                border: `1px solid ${feat.border}`,
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: `radial-gradient(ellipse at 0% 0%, ${feat.bg} 0%, transparent 60%)`,
                }}
              />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    color: feat.color,
                    background: feat.bg,
                    border: `1px solid ${feat.border}`,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {feat.badge}
                </span>
              </div>

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: feat.bg,
                    border: `1px solid ${feat.border}`,
                    boxShadow: `0 0 20px ${feat.bg}`,
                  }}
                >
                  <feat.icon size={22} style={{ color: feat.color }} />
                </div>

                <h3
                  className="text-white font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(8,145,178,0.12) 100%)",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div>
            <p
              className="text-white font-semibold text-lg mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to verify your first claim?
            </p>
            <p
              className="text-slate-400 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No account needed. Paste any text above and hit Verify.
            </p>
          </div>
          <motion.a
            href="#top"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #0891B2 100%)",
              boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
              fontFamily: "var(--font-display)",
            }}
          >
            Try it free →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
