import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Divider from "@/components/ui/Divider";
import { attorney, firm, photography } from "@/lib/placeholders";

export default function AttorneySpotlight() {
  return (
    <section className="bg-[#F8F5EE] py-20 sm:py-24 md:py-32 border-b border-[#E8E4DC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Column 1: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              <div
                className="hidden sm:block absolute -top-5 -left-5 w-full h-full bg-[#E8E4DC] rounded-[2px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 bg-white p-3 rounded-[2px] shadow-lg border border-[#D8D4CC]">
                <PlaceholderImage
                  label={photography.attorneyPortraitPlaceholder}
                  aspectRatio="4/5"
                  className="rounded-[2px]"
                />
                <div className="mt-3 p-4 bg-[#F8F5EE] rounded-[2px] border border-[#E8E4DC]">
                  <p
                    className="text-[#0F1F3D] font-medium text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {attorney.name}
                  </p>
                  <p className="text-[#5A5753] text-xs font-medium mt-0.5">
                    {attorney.title} &bull; {firm.name}
                  </p>
                </div>
              </div>
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#B8996A] pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Column 2: Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Divider width="32px" />
                <p
                  className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Attorney Profile
                </p>
              </div>

              <h2
                className="text-[#0F1F3D] mb-3"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontSize: "clamp(30px, 4.5vw, 50px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {attorney.name}
              </h2>

              <p
                className="text-[#7A5623] text-[12px] sm:text-[13px] tracking-[0.12em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {attorney.role} &bull; {firm.name}
              </p>
            </div>

            <p
              className="text-[#0F1F3D] text-[18px] sm:text-[20px] font-light leading-relaxed italic border-l-2 border-[#B8996A] pl-5 py-1"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              &ldquo;{attorney.bioHeadline}&rdquo;
            </p>

            <div className="space-y-4 text-[#4A4A4A] text-[15px] sm:text-[16px] leading-relaxed">
              <p>{attorney.bioSummary}</p>
              {attorney.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#0F1F3D] hover:bg-[#1A3260] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8996A]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>Request a Consultation with {attorney.name}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
