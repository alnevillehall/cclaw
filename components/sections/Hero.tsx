import Image from "next/image";
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

            {/* Attorney name as identity anchor */}
            <p
              className="text-[#F0EDE6]/80 text-[13px] sm:text-[14px] tracking-[0.12em] uppercase font-semibold mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {attorney.name} — {attorney.role}
            </p>

            {/* [DRAFT — Pending client approval] */}
            <p
              className="text-[#B8C5D8] max-w-[580px] mb-8 sm:mb-10 text-[15px] sm:text-[17px] leading-relaxed font-normal"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Personal injury, criminal defense, and immigration representation
              tailored to your legal needs — with direct attorney access and
              principled advocacy for every client.
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

            {/* Key trust markers */}
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

          {/* Column 2: Attorney portrait */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Decorative accent geometry */}
              <div
                className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#B8996A]/30 rounded-[2px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#B8996A] pointer-events-none"
                aria-hidden="true"
              />

              {/* Attorney photo frame */}
              <div className="relative overflow-hidden rounded-[2px] shadow-2xl aspect-[4/5]">
                <Image
                  src={photography.attorneyPhotoPath}
                  alt={`${attorney.name}, ${attorney.role} — ${firm.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  priority
                />
                {/* Name overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F1F3D]/90 via-[#0F1F3D]/40 to-transparent px-6 pt-12 pb-5">
                  <p
                    className="text-white text-lg font-light"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    {attorney.name}
                  </p>
                  <p
                    className="text-[#B8996A] text-[10px] uppercase tracking-widest font-semibold mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {attorney.title} — {firm.shortName}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
