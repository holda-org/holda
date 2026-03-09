"use client";
import { AISection } from "@/components/ai-section";
import { CTASection } from "@/components/cta-section";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { FeatureCardsSection } from "@/components/feature-cards-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/landing-page/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ProductDirectionSection } from "@/components/product-direction-section";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { WorkflowsSection } from "@/components/workflows-section";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const navItems = [
    {
      name: "Docs",
      link: "#docs",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY / 300, 1) * -20;
      setYOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>


      <>
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

          {/* Main content */}
          <div className="relative z-10 pt-28 flex flex-col">
            {/* Hero text - contained and centered */}
            <div className="w-full flex justify-center px-6 mt-16">
              <div className="w-full max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] text-balance"
                >
                  Secure, trustless escrow for the modern internet
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 text-lg text-zinc-400"
                >
                  Holda is a decentralized escrow platform built on Stellar that
                  enables
                  <br />
                  secure, trustless payments between buyers and sellers.
                </motion.p>
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
            </div>

            {/* 3D Stage - full bleed */}
            <div
              className="relative mt-16"
              style={{
                width: "100vw",
                marginLeft: "-50vw",
                marginRight: "-50vw",
                position: "relative",
                left: "50%",
                right: "50%",
                height: "700px",
                marginTop: "-60px",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #09090B 20%, transparent 100%)",
                }}
              />

              {/* Perspective container */}
              <div
                style={{
                  transform: `translateY(${yOffset}px)`,
                  transition: "transform 0.1s ease-out",
                  contain: "strict",
                  perspective: "4000px",
                  perspectiveOrigin: "100% 0",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                {/* Transformed base */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    backgroundColor: "#09090B",
                    transformOrigin: "0 0",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    border: "1px solid #1e1e1e",
                    borderRadius: "10px",
                    width: "1600px",
                    height: "900px",
                    margin: "280px auto auto",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                    transformStyle: "preserve-3d",
                    overflow: "hidden",
                  }}
                >
                  <DashboardMockup />
                </motion.div>
              </div>
            </div>

            {/* <LogoCloud /> */}
            <FeatureCardsSection />
            <AISection />
            <ProductDirectionSection />
            <WorkflowsSection />
            <CTASection />
            <Footer />
          </div>
        </section>
      </>

      {/* Navbar */}
    </div>
  );
}
