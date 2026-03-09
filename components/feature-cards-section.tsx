"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function FeatureCardsSection() {
  return (
    <div className="relative z-20" style={{ backgroundColor: "#09090B" }}>
      <section className="lg:py-32 px-2 md:px-4 z-10 w-full pt-24 pb-24 relative">
        {/* Section Header */}
        <div className="md:mb-24 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto mb-16 px-6 relative">
          <div className="w-full flex justify-between items-end border-b border-zinc-800/80 pb-3 mb-2 relative">
            <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900 border border-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] relative">
                  <div className="absolute inset-0 m-auto w-full h-[0.5px] bg-black rotate-45"></div>
                </div>
              </div>
              <span
                className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase font-bold"
                style={{ textShadow: "0 1px 1px rgba(0,0,0,1)" }}
              >
                HUB. 01 // ESCROW
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-zinc-950 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_6px_#84cc16,inset_0_1px_1px_rgba(255,255,255,0.8)] animate-pulse"></div>
              <span
                className="text-[9px] font-mono text-lime-400 tracking-widest uppercase font-bold"
                style={{ textShadow: "0 0 4px rgba(132,204,22,0.4)" }}
              >
                Net.Stellar
              </span>
            </div>
          </div>

          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-t-2 border-zinc-700/30"></div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-r-2 border-b-2 border-zinc-700/30"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col gap-5 mt-2"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-lime-600/5 blur-[80px] rounded-full pointer-events-none z-0"></div>

            <h2
              className="relative z-10 md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
            >
              Autonomous Escrow. <br className="hidden sm:block" />
              Programmable Trust.
            </h2>

            <p
              className="relative z-10 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed tracking-tight"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
            >
              Every contract verified by Soroban, securing global transactions
              with mathematical certainty.
            </p>
          </motion.div>

          <div className="mt-4 flex items-center justify-center gap-4 opacity-50">
            <div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                ></div>
              ))}
            </div>
            <span
              className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] font-bold"
              style={{
                textShadow:
                  "0 1px 1px rgba(255,255,255,0.1), 0 -1px 1px rgba(0,0,0,1)",
              }}
            >
              SEC-IV.009
            </span>
            <div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
          </div>
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-6">
          {/* Card 1: Monitoring / Settlement */}
          <HardwareCard
            id="TX.01"
            title="Sub-second Settlement"
            description="Continuous on-chain monitoring with instant fund release upon term fulfillment."
            // accentColor="lime"
          >
            <div
              className="absolute inset-0 opacity-20 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(132,204,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.4) 1px, transparent 1px)",
                backgroundSize: "10px 10px",
                backgroundPosition: "-1px -1px",
              }}
            ></div>
            <svg
              className="absolute inset-0 w-full h-full z-10 pt-2"
              preserveAspectRatio="none"
              viewBox="0 0 100 40"
            >
              <defs>
                <linearGradient
                  id="trace-gradient-holda"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#84cc16" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#84cc16" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24 L100,40 L0,40 Z"
                fill="url(#trace-gradient-holda)"
              />
              <path
                d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24"
                fill="none"
                stroke="#84cc16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: "drop-shadow(0 0 4px rgba(132,204,22,1))" }}
              />
            </svg>
            <div className="absolute top-2 left-2 z-20 flex flex-col">
              <span className="text-[9px] font-bold text-lime-500/80 uppercase tracking-widest drop-shadow-[0_0_2px_rgba(132,204,22,0.8)]">
                Live.Stellar
              </span>
            </div>
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_6px_#84cc16] animate-pulse"></div>
              <span className="text-[10px] font-mono font-medium text-lime-100 tracking-wider">
                ON-CHAIN
              </span>
            </div>
          </HardwareCard>

          {/* Card 2: Routing / Release Rules */}
          <HardwareCard
            id="RUL.02"
            title="Flexible Release Rules"
            description="Dynamic conditional logic ensuring payments only move when milestones are met."
            // accentColor="blue"
          >
            <div
              className="absolute inset-0 opacity-20 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
                backgroundPosition: "-1px -1px",
              }}
            ></div>
            <svg
              className="absolute inset-0 w-full h-full z-10"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 20 50 L 60 50 L 90 25 L 160 25"
                fill="none"
                stroke="#27272a"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M 60 50 L 90 75 L 160 75"
                fill="none"
                stroke="#27272a"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                className="transition-opacity duration-300 group-hover:opacity-0"
                d="M 20 50 L 60 50 L 90 25 L 160 25"
                fill="none"
                stroke="#84cc16"
                strokeWidth="3"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 0 5px rgba(132,204,22,0.8))" }}
              />
              <path
                className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                d="M 20 50 L 60 50 L 90 75 L 160 75"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 0 5px rgba(59,130,246,0.8))" }}
              />
              <circle
                cx="20"
                cy="50"
                r="4"
                fill="#27272a"
                stroke="#71717a"
                strokeWidth="2"
              />
              <circle cx="60" cy="50" r="2.5" fill="#71717a" />
              <circle
                cx="160"
                cy="25"
                r="4"
                fill="#27272a"
                stroke="#71717a"
                strokeWidth="2"
              />
              <circle
                cx="160"
                cy="75"
                r="4"
                fill="#27272a"
                stroke="#71717a"
                strokeWidth="2"
              />
            </svg>
          </HardwareCard>

          {/* Card 3: Redundancy / Multi-sig */}
          <HardwareCard
            id="SIG.03"
            title="Multi-sig Protection"
            description="Distributed key management protocols ensuring no single point of failure."
            // accentColor="orange"
          >
            <div
              className="absolute inset-0 opacity-[0.25] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 6px)",
              }}
            ></div>
            <div
              className="absolute top-1/2 left-[5rem] right-[5rem] h-3 bg-zinc-950 border-t border-b border-black -translate-y-1/2 z-0"
              style={{ boxShadow: "inset 0 4px 8px rgba(0,0,0,1)" }}
            ></div>
            <div
              className="absolute top-1/2 left-[4.8rem] w-9 h-7 -translate-y-1/2 rounded-[2px] transition-all duration-[400ms] group-hover:left-[calc(100%-7.05rem)] z-10 flex flex-col justify-center items-center gap-[3px]"
              style={{
                background:
                  "linear-gradient(to bottom, #71717a 0%, #3f3f46 100%)",
                border: "1px solid #18181b",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.4)",
              }}
            >
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
              </div>
              <div className="w-5 h-[1.5px] bg-black opacity-80 shadow-[0_1px_0_rgba(255,255,255,0.2)]"></div>
            </div>
          </HardwareCard>

          {/* Card 4: AI / Stella */}
          <HardwareCard
            id="AI.04"
            title="Stella AI Verification"
            description="Algorithmic auditing of contract terms and counterparty reputation."
            // accentColor="green"
          >
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center border border-zinc-800 bg-zinc-900/50"
              style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.05)" }}
            >
              <div className="absolute inset-[4px] rounded-full border border-lime-500/20 z-10 animate-pulse"></div>
              <div
                className="absolute inset-0 origin-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 animate-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 60%, rgba(132,204,22,0.1) 90%, rgba(132,204,22,0.9) 100%)",
                  animationDuration: "3s",
                }}
              ></div>
              <Shield className="w-8 h-8 text-lime-400 z-20 drop-shadow-[0_0_8px_#84cc16]" />
            </div>
            <div className="absolute -right-4 -bottom-1 w-12 h-5 bg-zinc-950 rounded-[2px] border border-black flex items-center justify-center z-20">
              <span className="text-[8px] font-mono font-bold text-lime-400 tracking-wider">
                AI.OK
              </span>
            </div>
          </HardwareCard>
        </div>
      </section>
    </div>
  );
}

function HardwareCard({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col group transition-all duration-500 hover:-translate-y-1 w-full rounded-3xl p-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #3f3f46 0%, #27272a 8%, #18181b 100%)",
        boxShadow:
          "0 20px 40px -10px rgba(0,0,0,0.9), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.8)",
        border: "1px solid #111",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
        }}
      ></div>

      <div className="relative z-10 flex justify-between items-center mb-6 px-1">
        <span
          className="text-xs font-bold text-zinc-600 uppercase tracking-widest"
          style={{
            textShadow:
              "0px 1px 1px rgba(255,255,255,0.1), 0px -1px 1px rgba(0,0,0,0.8)",
          }}
        >
          {id}
        </span>
        <div className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)]">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-black transition-colors duration-500 group-hover:bg-lime-500 group-hover:shadow-[0_0_8px_#84cc16]"></div>
        </div>
      </div>

      <div className="relative z-10 mb-8 w-full h-32 bg-zinc-950 rounded-md overflow-hidden flex items-center justify-center border border-black shadow-[inset_0_8px_16px_rgba(0,0,0,1)]">
        {children}
      </div>

      <div className="relative z-10 px-1 mt-auto">
        <h3
          className="text-base text-zinc-200 font-medium tracking-tight mb-1"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-zinc-400 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
