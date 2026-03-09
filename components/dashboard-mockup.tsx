"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowUpRight,
  FileCheck,
  LayoutGrid,
  Users,
  Coins,
  ChevronDown,
  ChevronRight,
  Shield,
  Search,
  Plus,
  MoreHorizontal,
  Sparkles,
  Settings,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Zap,
} from "lucide-react";
import { NavbarLogo } from "./ui/resizable-navbar";

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden font-sans border border-zinc-900 rounded-none md:rounded-xl shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
      // className="w-[200px] h-full bg-zinc-950/50 border-r border-zinc-800/40 flex flex-col shrink-0 backdrop-blur-xl"
      // variants={panelVariants}
      >
        {/* Logo/Platform */}
        <div className="p-3 border-b border-zinc-800/40">
         <NavbarLogo />
        </div>

        {/* Wallet Balance */}
        <div className="p-4 mx-3 my-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
          <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider mb-1">
            Total Balance
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-white font-semibold text-lg">12,450</span>
            <span className="text-zinc-500 text-xs font-medium">USDC</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={LayoutGrid} label="Dashboard" active />
          <NavItem icon={ShieldCheck} label="Active Escrows" badge={8} />
          <NavItem icon={ArrowUpRight} label="History" />
        </div>

        {/* Categories section */}
        <div className="mt-6 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Markets
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Users} label="Arbiter Network" />
            <NavItem icon={FileCheck} label="Templates" />
            <NavItem icon={Coins} label="Stellar Assets" />
          </div>
        </div>

        {/* Favorites section */}
        <div className="mt-6 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Watchlist
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem
              icon={Clock}
              label="Pending Release"
              color="text-amber-400"
            />
            <NavItem
              icon={AlertCircle}
              label="Disputed"
              color="text-rose-400"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto p-3 border-t border-zinc-800/40">
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={HelpCircle} label="Support" />
        </div>
      </motion.div>

      {/* Escrow List Panel */}
      <motion.div
        className="w-[300px] h-full bg-zinc-950/30 border-r border-zinc-800/40 flex flex-col shrink-0"
        // variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/40 flex items-center justify-between">
          <h3 className="text-white font-medium text-sm">Active Contracts</h3>
          <button className="p-1 hover:bg-zinc-800 rounded transition-colors">
            <Plus className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-900/50 border border-zinc-800/40 rounded-md text-zinc-500 text-[11px]">
            <Search className="w-3.5 h-3.5 text-zinc-600" />
            <span>Find contract...</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <EscrowItem
            id="#ESC-2490"
            title="UI/UX Design Milestone"
            amount="2,400"
            token="USDC"
            time="2h ago"
            status="funded"
            active
          />
          <EscrowItem
            id="#ESC-2488"
            title="Backend Integration (Stellar)"
            amount="8,000"
            token="XLM"
            time="1d ago"
            status="progress"
          />
          <EscrowItem
            id="#ESC-2485"
            title="Domain Purchase: holda.io"
            amount="1,200"
            token="USDC"
            time="3d ago"
            status="disputed"
          />
          <EscrowItem
            id="#ESC-2482"
            title="Legal Consulting - Q1"
            amount="500"
            token="EURC"
            time="1w ago"
            status="completed"
          />
          <EscrowItem
            id="#ESC-2480"
            title="Stellar Anchor Setup"
            amount="3,500"
            token="USDC"
            time="1w ago"
            status="progress"
          />
        </div>
      </motion.div>

      {/* Main Detail Panel */}
      <motion.div
        className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden"
        // variants={panelVariants}
      >
        {/* Detail Header */}
        <div className="px-6 py-3.5 border-b border-zinc-800/40 flex items-center justify-between shrink-0 bg-zinc-950/20">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-zinc-500">Workspace</span>
            <ChevronRight className="w-3 h-3 text-zinc-700" />
            <span className="text-zinc-500">Escrows</span>
            <ChevronRight className="w-3 h-3 text-zinc-700" />
            <span className="text-lime-400 font-medium select-none cursor-default">
              ESC-2490
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[10px] text-zinc-300 font-medium">
                Stella AI Monitoring
              </span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-zinc-500 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto scrollbar-hide">
          <div className="max-w-3xl mx-auto p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-white text-2xl font-semibold tracking-tight mb-2">
                  UI/UX Design Milestone
                </h2>
                <p className="text-zinc-400 text-sm">
                  Contract ID: a98b...7f2c • Stellar Mainnet
                </p>
              </div>
              <div className="text-right">
                <div className="text-white text-xl font-bold mb-1">
                  2,400.00 USDC
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-[10px] font-bold uppercase tracking-wider border border-lime-400/20">
                  Fully Funded
                </div>
              </div>
            </div>

            {/* Contract Entities */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <EntityBox
                label="Buyer"
                name="Leto Atreides"
                address="GD7S...P9XR"
              />
              <EntityBox
                label="Seller"
                name="Arrakis Ltd"
                address="GB7F...2KLR"
              />
              <EntityBox
                label="Arbiter"
                name="Holda Sentinel"
                address="GA9X...3MLP"
              />
            </div>

            {/* Stella AI Section */}
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 mb-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="w-8 h-8 text-lime-400" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-linear-to-br from-lime-400 to-green-500 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-black" />
                </div>
                <h3 className="text-white font-medium text-sm">
                  Stella AI Summary
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-1 h-auto bg-lime-400/30 rounded-full" />
                  <p className="text-zinc-400 text-[13px] leading-relaxed">
                    Terms specify delivery of Figma prototypes for the mobile
                    app within 48 hours. Stellar fee is locked at{" "}
                    <span className="text-white font-medium">0.0001 XLM</span>.
                    Release condition:{" "}
                    <span className="text-zinc-200">Milestone 1 Approval</span>.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <div className="flex items-center gap-1.5 text-lime-400/80">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Funds Verified On-chain</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Expires in 12 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Contract Terms (Old Code Block Refactored) */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-200 font-medium text-sm uppercase tracking-wider text-[11px]">
                  Contract Logic (Soroban)
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 hover:text-zinc-300 cursor-pointer">
                  <ExternalLink className="w-3 h-3" />
                  <span>View on Stellar Expert</span>
                </div>
              </div>
              <div className="bg-zinc-900/80 rounded-lg p-5 text-[12px] font-mono border border-zinc-800/50 shadow-inner">
                <div className="space-y-1.5">
                  <div>
                    <span className="text-purple-400">fn </span>
                    <span className="text-blue-400 whitespace-pre">
                      create_escrow
                    </span>
                    <span className="text-zinc-400">
                      (e: Env, buyer: Address, seller: Address, arbiter:
                      Address, amount: i128) {"{"}
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">
                      Initialize contract state
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-300 whitespace-pre">
                      Storage::set
                    </span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-orange-300">&quot;Status&quot;</span>
                    <span className="text-zinc-400">
                      , EscrowStatus::Funded);
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400 whitespace-pre">if </span>
                    <span className="text-zinc-400">
                      buyer_approved && seller_approved {"{"}
                    </span>
                  </div>
                  <div className="pl-8">
                    <span className="text-lime-400 whitespace-pre">
                      token::transfer
                    </span>
                    <span className="text-zinc-400">
                      (e, contract_address, seller, amount);
                    </span>
                  </div>
                  <div className="pl-4 text-zinc-400">{"}"}</div>
                  <div className="text-zinc-400">{"}"}</div>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="border-t border-zinc-800/40 pt-8">
              <div className="text-[11px] text-zinc-500 font-medium mb-6 uppercase tracking-wider">
                Blockchain Activity
              </div>
              <div className="space-y-6 relative">
                <div className="absolute left-[9px] top-2 bottom-2 w-px bg-zinc-800" />
                <TimelineItem
                  status="success"
                  title="Funds Locked in Escrow"
                  description="2,400.00 USDC has been successfully transferred to the contract address."
                  time="2 hours ago"
                />
                <TimelineItem
                  status="pending"
                  title="Contract Verified by Arbiter"
                  description="Holda Sentinel (GA9X...3MLP) verified that the terms align with the Stellar network rules."
                  time="5 hours ago"
                />
                <TimelineItem
                  status="info"
                  title="Escrow Created"
                  description="Contract draft initialized by Leto Atreides."
                  time="1 day ago"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  color,
}: {
  icon: React.ElementType;
  label: string;
  badge?: number;
  active?: boolean;
  color?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md cursor-pointer transition-all group ${
        active
          ? "bg-zinc-800/60 text-white shadow-sm border border-zinc-800"
          : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
      }`}
    >
      <Icon
        className={`w-4 h-4 ${active ? "text-lime-400" : color || "text-zinc-500 group-hover:text-zinc-400"}`}
      />
      <span className="flex-1 text-[12px] font-medium">{label}</span>
      {badge && (
        <span className="bg-lime-400 text-black text-[9px] min-w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold px-1">
          {badge}
        </span>
      )}
    </div>
  );
}

function EscrowItem({
  id,
  title,
  amount,
  token,
  time,
  status,
  active,
}: {
  id: string;
  title: string;
  amount: string;
  token: string;
  time: string;
  status: "funded" | "progress" | "disputed" | "completed";
  active?: boolean;
}) {
  const statusConfig = {
    funded: { color: "bg-lime-400", label: "Funded" },
    progress: { color: "bg-blue-400", label: "Working" },
    disputed: { color: "bg-rose-400", label: "Disputed" },
    completed: { color: "bg-zinc-500", label: "Closed" },
  };

  return (
    <div
      className={`px-4 py-4 border-b border-zinc-900/50 cursor-pointer transition-all group relative overflow-hidden ${
        active ? "bg-zinc-900/40" : "hover:bg-zinc-900/20"
      }`}
    >
      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.4)]" />
      )}
      <div className="flex items-start justify-between mb-1.5">
        <span className="text-[10px] text-zinc-500 font-mono tracking-tight">
          {id}
        </span>
        <span className="text-zinc-600 text-[10px] font-medium">{time}</span>
      </div>
      <p
        className={`text-[12px] font-medium mb-2 truncate ${active ? "text-white" : "text-zinc-300 group-hover:text-white"}`}
      >
        {title}
      </p>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${statusConfig[status].color}`}
          />
          <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">
            {statusConfig[status].label}
          </span>
        </div>
        <div className="text-[11px] font-semibold text-zinc-300">
          {amount}{" "}
          <span className="text-zinc-600 text-[9px] font-medium">{token}</span>
        </div>
      </div>
    </div>
  );
}

function EntityBox({
  label,
  name,
  address,
}: {
  label: string;
  name: string;
  address: string;
}) {
  return (
    <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-lg p-3 hover:bg-zinc-900/50 transition-colors">
      <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider mb-1.5">
        {label}
      </p>
      <p className="text-zinc-200 text-xs font-semibold mb-0.5">{name}</p>
      <p className="text-[10px] text-zinc-500 font-mono truncate">{address}</p>
    </div>
  );
}

function TimelineItem({
  status,
  title,
  description,
  time,
}: {
  status: "success" | "pending" | "info";
  title: string;
  description: string;
  time: string;
}) {
  const iconConfig = {
    success: { color: "bg-lime-400", sub: "bg-lime-400/20" },
    pending: { color: "bg-amber-400", sub: "bg-amber-400/20" },
    info: { color: "bg-zinc-600", sub: "bg-zinc-600/20" },
  };

  return (
    <div className="flex items-start gap-4">
      <div className="relative mt-1">
        <div
          className={`w-5 h-5 rounded-full ${iconConfig[status].sub} flex items-center justify-center z-10 relative border border-zinc-900`}
        >
          <div className={`w-2 h-2 rounded-full ${iconConfig[status].color}`} />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-zinc-200 text-xs font-semibold tracking-tight">
            {title}
          </h4>
          <span className="text-zinc-500 text-[10px]">{time}</span>
        </div>
        <p className="text-zinc-500 text-[11px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
