import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="overflow-hidden -mt-24 pt-20 relative flex flex-col lg:flex-row items-center justify-center w-full"
      data-element-locator="html > body:nth-of-type(1) > section:nth-of-type(1)"
    >
      {/* Accent glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />
      </div>
      <div className="lg:pt-28 lg:pb-32 max-w-7xl mx-auto pt-20 px-6 pb-24 relative ">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-32 lg:grid-cols-2 lg:justify-items-end">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300" />
              secured service
            </div>
            <h1 className="sm:text-6xl leading-[1.05] text-5xl font-medium tracking-tight font-bricolage">
              <span className="font-medium text-neutral-300 tracking-tight font-bricolage">
                Escrow on Stellar
              </span>
            </h1>
            <p className="text-neutral-400 max-w-xl mt-5 text-lg leading-relaxed">
              Holda enables secure, decentralized payments between buyers and
              sellers. Funds are held in trustless smart contracts and released
              automatically once conditions are met.
            </p>
            {/* Tags / mini metrics */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
                <span className="text-neutral-400 mr-1.5">Settlement:</span>
                3-5s
              </div>
              <div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
                <span className="text-neutral-400 mr-1.5">Fees:</span>
                &lt;$0.01
              </div>
              <div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
                <span className="text-neutral-400 mr-1.5">Assets:</span>
                USDC / EURC
              </div>
            </div>
            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-neutral-950 font-medium hover:brightness-95 active:translate-y-[1px] transition"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" className="" />
                  <path d="m12 5 7 7-7 7" className="" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/[0.08] active:translate-y-[1px] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white/80"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    className=""
                  />
                  <path d="M12 8v4" className="" />
                  <path d="M12 16h.01" className="" />
                </svg>
                Read the docs
              </a>
            </div>
            {/* Avatars / social proof */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                <Image
                  src="https://i.pravatar.cc/150?u=1"
                  alt="User"
                  height={32}
                  width={32}
                  className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover"
                />
                <Image
                  src="https://i.pravatar.cc/150?u=2"
                  alt="User"
                  height={32}
                  width={32}
                  className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover"
                />
                <Image
                  src="https://i.pravatar.cc/150?u=3"
                  alt="User"
                  height={32}
                  width={32}
                  className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover"
                />
                <div className="h-8 w-8 rounded-full bg-white/10 ring-2 ring-neutral-950 flex items-center justify-center text-[11px] text-neutral-300 border border-white/10">
                  +12
                </div>
              </div>
              <p className="text-sm text-neutral-400">
                Securing $2.4M+ in transactions across Stellar
              </p>
            </div>
          </div>
          {/* Right: Showcase phones */}
          <div className="relative w-full max-w-xl lg:max-w-none lg:mr-0 mx-auto">
            {/* Floating group container for subtle parallax */}
            <div
              id="phones"
              className="relative h-[500px] sm:h-[600px] scale-[0.8] xs:scale-[0.85] sm:scale-100 transition-transform origin-top lg:origin-right"
            >
              <div className="relative aspect-366/729 mx-auto max-w-[366px]">
                {/* iPhone 17 Pro Max Hardware Frame */}
                <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[54px] shadow-2xl bg-black ring-1 ring-white/10" />

                {/* Thin Bezels / Glass Screen */}
                <div className="absolute top-[12px] left-[12px] right-[10px] bottom-[10px] transform overflow-hidden bg-neutral-950 rounded-[44px] border border-white/5 ring-1 ring-white/10">
                  {/* Internal UI */}
                  <div className="flex flex-col h-full text-white font-sans overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-8 pt-6 pb-2 text-[10px] font-medium opacity-60">
                      <span>9:41</span>
                      <div className="flex gap-1.5 items-center">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 16h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* App Bar */}
                    <div className="px-6 py-4 flex justify-between items-center border-b border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm tracking-tight">
                          Holda Escrow
                        </span>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-neutral-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-lime-300 animate-pulse" />
                        GB7A...K9D2
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex-1 overflow-y-auto px-6 pt-6 pb-20 space-y-6 scrollbar-hide">
                      {/* Welcome Section */}
                      <div>
                        <h2 className="text-2xl font-medium font-bricolage tracking-tight">
                          Active Transactions
                        </h2>
                        <p className="text-xs text-neutral-500 mt-1">
                          Found 3 active escrow contracts
                        </p>
                      </div>

                      {/* Featured Escrow Card */}
                      <div className="p-5 rounded-3xl bg-neutral-900 border border-white/10 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-300/5 blur-3xl -mr-16 -mt-16 group-hover:bg-lime-300/10 transition-colors" />

                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <div>
                            <div className="px-2 py-0.5 rounded-md bg-lime-300/10 text-[10px] font-bold text-lime-300 uppercase tracking-widest border border-lime-300/20 inline-block mb-2">
                              Escrow Secured
                            </div>
                            <h3 className="text-lg font-medium">
                              Bounty Hunter V2
                            </h3>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                              Contract #0081
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-medium font-bricolage text-lime-300">
                              2,500 USDC
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              Service Fee: 0.1%
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6 relative z-10">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-neutral-400 font-medium">
                              Progress
                            </span>
                            <span className="text-white/80">75%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div className="h-full bg-lime-300 w-[75%] rounded-full shadow-[0_0_12px_rgba(190,242,100,0.3)]" />
                          </div>

                          <div className="flex gap-4 pt-1">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-lime-300/20 flex items-center justify-center">
                                <svg
                                  className="w-2.5 h-2.5 text-lime-300"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-[10px] text-neutral-400">
                                Code Audit
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                              </div>
                              <span className="text-[10px] text-neutral-400">
                                Final Release
                              </span>
                            </div>
                          </div>
                        </div>

                        <button className="w-full py-3.5 rounded-2xl bg-lime-300 text-black font-bold text-xs hover:brightness-95 active:scale-[0.98] transition flex items-center justify-center gap-2 relative z-10">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Verify & Release Funds
                        </button>
                      </div>

                      {/* Recent Activity List */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            Recent Activity
                          </h4>
                          <span className="text-[10px] text-lime-400 font-medium">
                            View All
                          </span>
                        </div>

                        <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold">
                              Payment Received
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              From wallet 0x3a...e4
                            </p>
                          </div>
                          <p className="text-xs font-medium">+1,200 USDC</p>
                        </div>

                        <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                          <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center border border-lime-500/20">
                            <svg
                              className="w-5 h-5 text-lime-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold">
                              Contract Signed
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              UI/UX Redesign #0042
                            </p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-lime-300" />
                        </div>
                      </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="px-10 py-5 flex justify-between items-center border-t border-white/5 bg-neutral-950/50 backdrop-blur-xl">
                      <div className="text-lime-300">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 12h3v10h14V12h3L12 2z" />
                        </svg>
                      </div>
                      <div className="opacity-30">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="opacity-30">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* iPhone Dynamic Island */}
                <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center border border-white/5">
                  <div className="w-1 h-1 rounded-full bg-blue-500/50 mr-2" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(190,242,100,0.5)]" />
                </div>
              </div>
            </div>
          </div>
          {/* end phones */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
