import Divider from "@/components/ui/Divider";
import { firmPhilosophy } from "@/lib/placeholders";
import { ShieldCheck, BookOpen, MessageSquare, Target } from "lucide-react";

export default function FirmPhilosophy() {
  return (
    <section
      id="firm-philosophy-section"
      className="bg-[#E8E4DC] py-20 sm:py-24 md:py-32 border-b border-[#D8D4CC]"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Divider width="32px" />
            <p
              className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {firmPhilosophy.eyebrow}
            </p>
          </div>

          <h2
            id="philosophy-heading"
            className="text-[#0F1F3D] mb-4"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {firmPhilosophy.headline}
          </h2>

          <p
            className="text-[#4A4A4A] text-[15px] sm:text-[16px] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every legal engagement is structured around thorough preparation, ethical advocacy,
            and honest assessment of legal positions. Below are the governing standards of practice.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {firmPhilosophy.principles.map((principle, index) => {
            const icons = [MessageSquare, BookOpen, ShieldCheck, Target];
            const IconComponent = icons[index % icons.length];

            return (
              <div
                key={principle.title}
                className="bg-[#F8F5EE] border border-[#D8D4CC] p-6 sm:p-8 lg:p-10 rounded-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full border border-[#7A5623]/60 flex items-center justify-center text-[#7A5623]">
                      <IconComponent size={18} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-[#5A5753]">0{index + 1}</span>
                  </div>

                  <h3
                    className="text-[#0F1F3D] mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant-garamond)",
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {principle.title}
                  </h3>

                  <p
                    className="text-[#4A4A4A] text-[15px] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {principle.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Draft Copy & Ethical Disclosure Note */}
        <div className="mt-12 pt-6 border-t border-[#D8D4CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5A5753]">
          <span>Draft philosophy copy &bull; Subject to attorney review</span>
          <span className="italic">Note: No specific outcomes or results are guaranteed.</span>
        </div>

      </div>
    </section>
  );
}
