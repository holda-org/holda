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
              {/* Phone 1: Upcoming trail card */}
              <div className="absolute left-[-10%] top-12 sm:left-0 sm:top-6 -rotate-6 sm:rotate-[-8deg] opacity-70 sm:opacity-100 transition-all">
                <div
                  className="sm:w-72 shadow-black/40 overflow-hidden bg-neutral-900 w-64 h-[620px] ring-white/10 ring-1 rounded-[2.2rem] relative shadow-2xl"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  {/* notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/70" />
                  <div className="p-5 flex items-center justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 border border-white/10">
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
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" className="" />
                      </svg>
                    </button>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 border border-white/10">
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
                        className="h-4 w-4"
                      >
                        <path
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                          className=""
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="px-5">
                    <h3 className="text-2xl font-bricolage font-medium tracking-tight">
                      Active Escrows
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      4 Pending • 1 Disputed
                    </p>
                  </div>
                  <div className="mt-4 pr-5 pl-5">
                    <div className="overflow-hidden rounded-3xl relative bg-neutral-800 border border-white/5 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-lime-300 flex items-center justify-center text-neutral-950 font-bold text-xs">
                            S
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white/90">
                              Stellar Web Design
                            </p>
                            <p className="text-[10px] text-white/50">
                              Contract: #8291
                            </p>
                          </div>
                        </div>
                        <div className="rounded-full bg-lime-300/10 px-2.5 py-1 text-[10px] font-medium text-lime-300 border border-lime-300/20">
                          Funded
                        </div>
                      </div>

                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <p className="text-[11px] text-white/50 uppercase tracking-wider">
                            Amount
                          </p>
                          <p className="text-2xl font-bricolage font-medium">
                            1,200 USDC
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] text-white/50 uppercase tracking-wider">
                            Fee
                          </p>
                          <p className="text-sm text-white/90">0.01 USDC</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-white/70">
                          <div className="h-5 w-5 rounded-full bg-lime-300/20 flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                          </div>
                          <span>Milestone 1: Wireframes Complete</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-white/40">
                          <div className="h-5 w-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          </div>
                          <span>Milestone 2: Frontend Implementation</span>
                        </div>
                      </div>

                      <button className="mt-6 w-full rounded-2xl bg-white/5 border border-white/10 py-3 text-xs font-medium text-white/80 hover:bg-white/10 transition">
                        Release Funds
                      </button>
                    </div>
                  </div>
                  <div className="px-5 mt-4">
                    <div className="flex items-center gap-2 text-xs text-white/60 bg-white/5 p-3 rounded-2xl border border-white/10">
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
                        className="h-4 w-4 text-lime-300"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span>Escrow secured by Stellar Smart Contract</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="h-1 w-16 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
              {/* Phone 2: Map route */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <div
                  className="sm:w-72 shadow-black/50 overflow-hidden bg-neutral-900 w-64 h-[620px] ring-white/10 ring-1 rounded-[2.2rem] relative shadow-2xl"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/70" />
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
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
                        <path d="m15 18-6-6 6-6" className="" />
                      </svg>
                    </button>
                    <div className="flex -space-x-2">
                      {/* <Image
                        src="https://i.pravatar.cc/150?u=4"
                        alt="User"
                        height={28}
                        width={28}
                        className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover"
                      /> */}
                      <Image
                        src="https://i.pravatar.cc/150?u=5"
                        alt="User"
                        height={28}
                        width={28}
                        className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover"
                      />
                      {/* <Image
                        src="https://i.pravatar.cc/150?u=6"
                        alt="User"
                        height={28}
                        width={28}
                        className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover"
                      />
                      <div className="h-7 w-7 rounded-full bg-white/10 ring-2 ring-neutral-900 flex items-center justify-center text-[10px] text-neutral-300 border border-white/10">
                        +5
                      </div> */}
                    </div>
                  </div>
                  <div className="px-5 mt-3">
                    <h3 className="text-2xl font-bricolage font-medium tracking-tight">
                      Vault Security
                    </h3>
                    <p className="text-sm text-white/60 mt-0.5">
                      Securely locking $14,200.00
                    </p>
                  </div>
                  <div className="relative mx-4 mt-3 h-[240px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black ring-1 ring-white/10 overflow-hidden">
                    {/* Stylized topo lines */}
                    <svg
                      viewBox="0 0 400 300"
                      className="absolute inset-0 h-full w-full text-neutral-700/40"
                    >
                      <defs className="">
                        <pattern
                          id="grid"
                          width={40}
                          height={40}
                          patternUnits="userSpaceOnUse"
                          className=""
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.6"
                            className=""
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#grid)"
                        className=""
                      />
                      {/* route */}
                      <path
                        d="M30,250 C80,180 120,220 160,180 C200,140 260,160 300,120 C330,95 360,110 370,90"
                        fill="none"
                        stroke="#d9ff3f"
                        strokeWidth={4}
                        strokeLinecap="round"
                        className=""
                      />
                      {/* start marker */}
                      <circle
                        cx={30}
                        cy={250}
                        r={8}
                        fill="#d9ff3f"
                        className=""
                      />
                      {/* end marker */}
                      <circle
                        cx={370}
                        cy={90}
                        r={8}
                        fill="#fef08a"
                        className=""
                      />
                    </svg>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="rounded-full bg-white/10 px-2.5 py-1 text-xs flex items-center text-white/80 border border-white/10 backdrop-blur">
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
                          className="h-3 w-3 inline mr-1"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Payment Security
                      </div>
                      <div className="rounded-full bg-lime-300/20 backdrop-blur px-2.5 py-1 text-xs font-medium text-lime-300 border border-lime-300/30">
                        99.9% Uptime
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 border border-white/10 backdrop-blur">
                        Statistics
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 border border-white/10 backdrop-blur">
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
                          className="h-3 w-3 text-lime-300"
                        >
                          <path
                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                            className=""
                          />
                          <path d="m9 11 3 3L22 4" className="" />
                        </svg>
                        <span className="text-xs text-white/70">
                          Secure Node
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-4">
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs text-white/60">
                          Stellar Transaction
                        </div>
                        <div className="text-xs text-lime-300">Pending</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="">
                          <div className="text-xl font-bricolage font-medium tracking-tight">
                            3.2s
                          </div>
                          <div className="text-[11px] text-white/60">
                            Settlement
                          </div>
                        </div>
                        <div>
                          <div className="text-xl font-bricolage font-medium tracking-tight">
                            224
                          </div>
                          <div className="text-[11px] text-white/60">
                            Confirmations
                          </div>
                        </div>
                        <div>
                          <div className="text-xl font-bricolage font-medium tracking-tight">
                            $0.001
                          </div>
                          <div className="text-[11px] text-white/60">
                            Network Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-4">
                    <button className="w-full rounded-xl bg-lime-300 px-4 py-3 text-neutral-950 font-medium text-sm flex items-center justify-center gap-2">
                      Verify Contract
                    </button>
                  </div>
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
