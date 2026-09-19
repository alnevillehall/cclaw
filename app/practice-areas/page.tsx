import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PracticeAreasGrid from "@/components/sections/PracticeAreasGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Divider from "@/components/ui/Divider";
import { firm, processOverview, sampleNotice } from "@/lib/placeholders";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: `Practice Areas Overview | ${firm.name}`,
  description: `Representative overview of legal practice areas and advisory services offered by ${firm.name}. Request an initial consultation.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Practice Areas Overview"
        subtitle={`${firm.name} provides focused, high-quality legal counsel across key disciplines. Explore our representative service areas below.`}
        breadcrumb="Practice Areas"
      />

      {/* Strategic Overview & Client Advisory Statement */}
      <section className="bg-[#F8F5EE] py-16 md:py-20 border-b border-[#E8E4DC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-3 mb-4">
              <Divider width="32px" />
              <p
                className="text-[#B8996A] text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Focused Disciplines
              </p>
            </div>
            <h2
              className="text-[#0F1F3D] mb-4"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Structured Legal Counsel Tailored to Client Objectives
            </h2>
            <p
              className="text-[#4A4A4A] text-[16px] leading-relaxed mb-6 font-normal"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Rather than maintaining a high-volume generalist caseload, {firm.name} concentrates on
              matters requiring detailed analytical scrutiny, aggressive representation, and bespoke strategy.
            </p>
            <div
              className="p-4 bg-[#E8E4DC]/80 border-l-2 border-[#B8996A] rounded-[2px] flex items-center gap-3 text-xs text-[#4A4A4A]"
              role="note"
            >
              <Info size={16} className="text-[#B8996A] shrink-0" aria-hidden="true" />
              <span>{sampleNotice.practiceAreas}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Centralized Practice Areas Grid */}
      <PracticeAreasGrid preview={false} />

      {/* Structured Legal Process / Representation Stages */}
      <section className="bg-[#E8E4DC] py-24 md:py-32 border-b border-[#D8D4CC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="max-w-[640px] mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Divider width="32px" />
              <p
                className="text-[#B8996A] text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Intake &amp; Strategy
              </p>
            </div>
            <h2
              className="text-[#0F1F3D] mb-4"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              How Matters Are Handled
            </h2>
            <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
              From preliminary evaluation through final resolution, client representation proceeds with
              methodical discipline and frequent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {processOverview.map((item) => (
              <div
                key={item.step}
                className="bg-[#F8F5EE] border border-[#D8D4CC] p-8 sm:p-10 rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-[#B8996A] block text-3xl sm:text-4xl font-light mb-4"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-[#0F1F3D] text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <CtaBanner
        headline="Evaluate Your Matter With Experienced Counsel"
        subline="Contact the firm to schedule a confidential preliminary review of your legal requirements."
        buttonLabel="Request an Assessment"
        buttonHref="/#contact"
      />
    </>
  );
}
