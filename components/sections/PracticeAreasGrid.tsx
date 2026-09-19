import Divider from "@/components/ui/Divider";
import { practiceAreas, sampleNotice } from "@/lib/placeholders";
import {
  Scale,
  Shield,
  Users,
  ArrowRight,
  Info,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>> = {
  Scale,
  Shield,
  Users,
};

interface PracticeAreasGridProps {
  /** If true, shows preview set for homepage; otherwise full set. */
  preview?: boolean;
}

export default function PracticeAreasGrid({ preview = false }: PracticeAreasGridProps) {
  // Firm has exactly 3 confirmed practice areas; preview shows all three.
  const areas = preview ? practiceAreas.slice(0, 3) : practiceAreas;

  return (
    <section
      id="practice-areas-section"
      className="bg-[#F8F5EE] py-20 sm:py-24 md:py-32 border-b border-[#E8E4DC]"
      aria-labelledby="practice-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-4">
              <Divider width="32px" />
              <p
                className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Areas of Practice
              </p>
            </div>
            <h2
              id="practice-heading"
              className="text-[#0F1F3D]"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(30px, 4vw, 50px)",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Legal Services &amp; Counsel
            </h2>
          </div>

          {preview && (
            <div className="shrink-0">
              <a
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-[#0F1F3D] hover:text-[#B8996A] text-[12px] tracking-[0.08em] uppercase font-semibold border-b border-[#B8996A] pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>View Full Overview</span>
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        {/* Clear representative disclosure notice */}
        <div
          className="mb-10 px-4 py-3.5 bg-[#E8E4DC]/80 border-l-3 border-[#7A5623] rounded-[2px] flex items-center gap-3 text-xs text-[#2C2C2C]"
          role="note"
          aria-label="Sample content disclosure"
        >
          <Info size={16} className="text-[#7A5623] shrink-0" aria-hidden="true" />
          <span>{sampleNotice.practiceAreas}</span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((area, index) => {
            const Icon = iconMap[area.icon] ?? Scale;
            return (
              <article
                key={area.slug}
                id={area.slug}
                className="group bg-white border border-[#E8E4DC] hover:border-[#B8996A] p-6 sm:p-8 lg:p-10 rounded-[2px] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(15,31,61,0.08)] flex flex-col justify-between focus-within:ring-2 focus-within:ring-[#B8996A]"
              >
                <div>
                  {/* Top line with icon & sample badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[2px] bg-[#0F1F3D] flex items-center justify-center text-[#B8996A] group-hover:bg-[#B8996A] group-hover:text-white transition-colors duration-300">
                      <Icon size={22} aria-hidden={true} />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase font-medium text-[#5A5753] bg-[#F8F5EE] px-2.5 py-1 rounded-[2px] border border-[#E8E4DC]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {area.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#0F1F3D] group-hover:text-[#1A3260] mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant-garamond)",
                      fontSize: "clamp(20px, 2vw, 25px)",
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#4A4A4A] text-[15px] leading-relaxed mb-6 font-normal"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {preview ? area.short : area.description}
                  </p>
                </div>

                {/* Link to Practice Areas Page or Consultation */}
                <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
                  {preview ? (
                    <a
                      href={`/practice-areas#${area.slug}`}
                      className="inline-flex items-center gap-2 text-[#0F1F3D] group-hover:text-[#7A5623] text-[12px] tracking-[0.08em] uppercase font-semibold transition-colors focus-visible:outline-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <span>Read Overview</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-[#7A5623] hover:text-[#0F1F3D] text-[12px] tracking-[0.08em] uppercase font-semibold transition-colors focus-visible:outline-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <span>Inquire Regarding This Area</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  )}
                  <span className="text-xs text-[#5A5753] font-mono">0{index + 1}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
