import Divider from "@/components/ui/Divider";
import { firm, attorney, photography } from "@/lib/placeholders";
import { ArrowRight, ArrowUpRight, ShieldCheck, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#0F1F3D] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background: Subtle editorial grid texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F0EDE6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle bottom gradient transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-transparent to-[#0A1628]/40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-20 pt-28 pb-20 lg:py-32">
        {/* Two-column desktop composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Editorial messaging & actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <Divider width="36px" />
              <p
                className="text-[#B8996A] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {firm.name} &bull; Independent Practice
              </p>
            </div>

            {/* One clear, compelling H1 — [DRAFT: Pending client approval] */}
            <h1
              id="hero-heading"
              className="text-white mb-6 text-balance"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(36px, 5.5vw, 68px)",
                lineHeight: 1.08,
                fontWeight: 300,
                letterSpacing: "-0.015em",
              }}
            >
              Dedicated Legal Representation.{" "}
              <span className="italic text-[#B8996A] font-normal block sm:inline">
                A Clear Path Forward.
              </span>
            </h1>

            {/* [DRAFT — Pending client approval] */}
            <p
              className="text-[#B8C5D8] max-w-[580px] mb-8 sm:mb-10 text-[15px] sm:text-[18px] leading-relaxed font-normal"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Personal injury, criminal defense, and immigration representation
              tailored to your legal needs. Founded by {attorney.name} — direct
              attorney access, rigorous preparation, and principled advocacy for
              every client.
            </p>

            {/* Primary and secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8996A] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-[2px] hover:bg-[#9A7D52] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 text-[#F0EDE6] text-[12px] tracking-[0.09em] uppercase font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-[2px] border border-white/25 hover:border-white/60 hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8996A]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>Explore Practice Areas</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Key trust markers - stacked on mobile, 2 cols on sm+ */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex items-center gap-2.5 text-[#B8C5D8] text-xs">
                <ShieldCheck size={16} className="text-[#B8996A] shrink-0" aria-hidden="true" />
                <span>Confidential Initial Evaluation</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#B8C5D8] text-xs">
                <Compass size={16} className="text-[#B8996A] shrink-0" aria-hidden="true" />
                <span>Direct Attorney Representation</span>
              </div>
            </div>
          </div>

          {/* Column 2: Visual composition & explicit placeholder representation */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              
              {/* Decorative accent geometry (hidden on ultra-small mobile to eliminate edge jitter) */}
              <div
                className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#B8996A]/30 rounded-[2px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#B8996A] pointer-events-none"
                aria-hidden="true"
              />

              {/* Dignified placeholder presentation container */}
              <div className="relative bg-[#1A3260] border border-white/10 rounded-[2px] overflow-hidden flex flex-col justify-between aspect-[4/5] shadow-2xl">
                {/* Architectural Pattern */}
                <div className="absolute inset-0 opacity-[0.15]" aria-hidden="true">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="arch-lines" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B8996A" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#arch-lines)" />
                  </svg>
                </div>
                
                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-transparent to-transparent opacity-80" />
                
                {/* Clean, minimalist brand mark in the corner */}
                <div className="relative z-10 p-6 sm:p-10 flex flex-col h-full justify-end">
                  <div className="border-t border-[#B8996A]/30 pt-4">
                    <p
                      className="text-white text-xl font-light"
                      style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                    >
                      {firm.name}
                    </p>
                    <p className="text-[#B8C5D8] text-xs mt-1 uppercase tracking-widest font-medium">
                      Est. {firm.established === "Pending Verification" ? new Date().getFullYear() : firm.established}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
