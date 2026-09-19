import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { firm, attorney, photography } from "@/lib/placeholders";
import { ArrowRight } from "lucide-react";

export default function FirmIntro() {
  return (
    <section
      id="attorney-intro-section"
      className="bg-[#F8F5EE] py-20 sm:py-24 md:py-32 border-b border-[#E8E4DC]"
      aria-labelledby="attorney-intro-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Attorney portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Decorative background block */}
              <div
                className="hidden sm:block absolute -top-5 -left-5 w-full h-full bg-[#0F1F3D] rounded-[2px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Photo frame */}
              <div className="relative z-10 bg-white p-3 rounded-[2px] shadow-xl border border-[#E8E4DC]">
                <div className="relative w-full rounded-[2px] overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={photography.attorneyPhotoPath}
                    alt={`${attorney.name}, ${attorney.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 35vw"
                  />
                </div>
                <div className="p-4 bg-[#F8F5EE] mt-3 rounded-[2px] border border-[#E8E4DC]">
                  <p
                    className="text-[#0F1F3D] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {attorney.name}
                  </p>
                  <p className="text-[#5A5753] text-xs font-medium mt-0.5">{attorney.title}</p>
                </div>
              </div>

              {/* Brass corner accent */}
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#B8996A] pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Column 2: Editorial introduction */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Divider width="32px" />
              <p
                className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Lead Attorney
              </p>
            </div>

            <h2
              id="attorney-intro-heading"
              className="text-[#0F1F3D] mb-3"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              {attorney.name}
            </h2>

            <p
              className="text-[#7A5623] text-[12px] sm:text-[13px] tracking-[0.12em] uppercase font-semibold mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {attorney.role} &bull; {firm.name}
            </p>

            <p
              className="text-[#0F1F3D] text-[18px] sm:text-[20px] font-light leading-relaxed mb-6 italic"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              &ldquo;{attorney.bioHeadline}&rdquo;
            </p>

            <div className="space-y-4 mb-8 text-[#4A4A4A] text-[15px] sm:text-[16px] leading-relaxed">
              <p>{attorney.bioSummary}</p>
              <p>{attorney.bioParagraphs[0]}</p>
            </div>

            {/* Clear link to the About page */}
            <a
              href="/about"
              className="inline-flex items-center gap-2.5 bg-[#0F1F3D] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-[2px] hover:bg-[#1A3260] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8996A]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Read Full Attorney Profile</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
