"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowRight,
  MessageSquare,
  GitBranch,
  X,
  Puzzle,
  Figma,
} from "lucide-react";

const carouselCards = [
  {
    id: 1,
    category: "Freelance Payments",
    title: "Clients lock funds before work begins",
    icon: ArrowRight,
    mockup: "intercom",
  },
  {
    id: 2,
    category: "E-commerce",
    title: "Funds held until delivery is confirmed",
    icon: Plus,
    mockup: "github",
  },
  {
    id: 3,
    category: "P2P Transactions",
    title: "Reduce fraud risk for individual trades",
    icon: ArrowRight,
    mockup: "mobile",
  },
  {
    id: 4,
    category: "Web3 Marketplaces",
    title: "Integrate Holda for NFT marketplaces",
    icon: ArrowRight,
    mockup: "asks",
  },
  {
    id: 5,
    category: "Cross-border Payments",
    title: "Leverage Stellar's global anchor network",
    icon: ArrowRight,
    mockup: "integrations",
  },
  {
    id: 6,
    category: "Service Marketplaces",
    title: "Milestone-based payments for consulting",
    icon: ArrowRight,
    mockup: "figma",
  },
  {
    id: 7,
    category: "Stellar Infrastructure",
    title: "Fast, low-cost settlement in seconds",
    icon: ArrowRight,
    mockup: "api",
  },
];

function IntercomMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>StellarSupport</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-500">buyer@stellar.org</span>
      </div>
      <p className="text-sm text-zinc-300">
        Dispute raised: Condition 3{" "}
        <span className="text-zinc-500">unmet...</span>
      </p>

      <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-zinc-700 rounded flex items-center justify-center">
          <span className="text-[10px] text-zinc-400">S</span>
        </div>
        <span className="text-sm text-zinc-300">USDC</span>
        <span className="text-xs text-zinc-500">Secure Lock</span>
      </div>

      <div className="mt-1 flex items-center gap-2 bg-zinc-800/30 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-yellow-500/20 rounded flex items-center justify-center">
          <span className="text-[10px] text-yellow-500">◆</span>
        </div>
        <span className="text-sm text-zinc-400">Multi-cloud cost</span>
        <span className="text-xs text-zinc-500">dashboard</span>
      </div>

      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 rounded-full border border-zinc-600" />
        <span className="text-sm text-zinc-500">Escrow Verified</span>
        <div className="ml-2 flex items-center gap-1 text-xs text-zinc-600">
          <span>📅</span>
          <span>Mar 2026</span>
        </div>
      </div>
    </div>
  );
}

function GitHubMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <GitBranch className="w-3.5 h-3.5 text-zinc-500" />
        <span className="text-zinc-400">#20319</span>
        <span className="text-zinc-500">igor/lin 15287</span>
        <span className="text-blue-400/70">add sourc...</span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">igor</span>
          <span className="text-zinc-600">linked</span>
          <span className="text-blue-400/70">igor/lin 15287</span>
          <span className="text-zinc-600">add sou...</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">igor</span>
          <span className="text-zinc-600">
            changed status from In Progre...
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">GitHub</span>
          <span className="text-zinc-600">changed status from In Revie...</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-500">Stella</span>
          <span className="text-zinc-600">changed status to RELEASED...</span>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-zinc-400 mb-2">Inbox</div>
          <div className="space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 bg-zinc-800/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AsksMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center">
        <X className="w-12 h-12 text-zinc-400" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function IntegrationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center"
          >
            <Puzzle className="w-5 h-5 text-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FigmaMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Figma className="w-16 h-16 text-zinc-400" />
      </div>
    </div>
  );
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-lg px-4 py-2 border border-zinc-700/50">
        <span className="text-xs font-mono text-lime-400">HOLDA SDK</span>
      </div>
    </div>
  );
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "intercom":
      return <IntercomMockup />;
    case "github":
      return <GitHubMockup />;
    case "mobile":
      return <MobileMockup />;
    case "asks":
      return <AsksMockup />;
    case "integrations":
      return <IntegrationsMockup />;
    case "figma":
      return <FigmaMockup />;
    case "api":
      return <ApiMockup />;
    default:
      return null;
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1));
  };

  const scrollRight = () => {
    setScrollPosition(
      Math.min(carouselCards.length - visibleCards, scrollPosition + 1),
    );
  };

  return (
    <section
      className="relative pt-24 px-2 md:px-4 lg:px-6 w-full "
      style={{ backgroundColor: "#09090B" }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none rounded-t-2xl"
        style={{
          height: "20%",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="w-full md:w-3xl lg:w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">
                Use cases and integrations
              </span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Collaborate across
              <br />
              tools and teams
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            Expand the capabilities of the Holda system with a wide variety of
            integrations that keep your transactions secure and transparent.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden w-sm md:w-md lg:w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${scrollPosition * (100 / visibleCards)}%)`,
            }}
          >
            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer - refactored for proper icon alignment */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">
                          {card.category}
                        </p>
                        <p className="text-sm text-zinc-200 leading-snug">
                          {card.title}
                        </p>
                      </div>
                      {/* Icon button - fixed size, vertically centered */}
                      <button className="shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 transition-colors">
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= carouselCards.length - visibleCards}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
