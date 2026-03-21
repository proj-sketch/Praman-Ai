"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Top section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #0891B2)",
                  boxShadow: "0 0 20px rgba(37,99,235,0.3)",
                }}
              >
                <ShieldCheck size={16} className="text-white" />
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Praman AI
              </span>
            </div>
            <p
              className="text-slate-500 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              The AI-powered fact-checking engine built to combat
              misinformation, verify claims, and build trust in digital
              content.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Github, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              {
                heading: "Product",
                links: ["How it Works", "Features", "API Docs", "Pricing"],
              },
              {
                heading: "Use Cases",
                links: ["Journalism", "Research", "Legal", "Education"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Privacy Policy", "Terms"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4
                  className="text-white text-xs font-semibold mb-3 tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-slate-600 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Praman AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{ boxShadow: "0 0 6px #22C55E" }}
            />
            <span
              className="text-xs text-slate-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
