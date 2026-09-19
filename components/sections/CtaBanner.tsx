import { ArrowRight, Lock } from "lucide-react";

interface CtaBannerProps {
  headline?: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  headline = "Discuss Your Legal Matter With Direct Attorney Counsel",
  subline = "Initial consultations provide a structured, confidential opportunity to review your legal situation and clarify options.",
  buttonLabel = "Schedule a Consultation",
  buttonHref = "/#contact",
}: CtaBannerProps) {
  return (
    <section
      className="bg-[#0F1F3D] py-20 md:py-24 border-y border-[#1A3260] relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Subtle geometric background line */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#B8996A" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-[720px]">
            <div className="flex items-center gap-2 text-[#B8996A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Lock size={13} aria-hidden="true" />
              <span>Confidential Inquiry</span>
            </div>

            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.18,
              }}
            >
              {headline}
            </h2>

            <p
              className="text-[#B8C5D8] text-[15px] sm:text-[16px] leading-relaxed font-normal"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {subline}
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2.5 bg-[#B8996A] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-8 py-4 rounded-[2px] hover:bg-[#9A7D52] transition-colors duration-200 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>{buttonLabel}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
