import Divider from "@/components/ui/Divider";
import { attorney } from "@/lib/placeholders";
import { GraduationCap, Scale, BookOpen, Users, Info } from "lucide-react";

export default function CredentialTimeline() {
  return (
    <section className="bg-[#E8E4DC] py-20 sm:py-24 md:py-32 border-b border-[#D8D4CC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="max-w-[700px] mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Divider width="32px" />
            <p
              className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Professional Background
            </p>
          </div>
          <h2
            className="text-[#0F1F3D] mb-4"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Credentials &amp; Admissions Framework
          </h2>
          <div
            className="p-4 bg-[#F8F5EE] border-l-3 border-[#7A5623] rounded-[2px] flex items-start gap-3 text-xs text-[#2C2C2C]"
            role="note"
          >
            <Info size={16} className="text-[#7A5623] shrink-0 mt-0.5" aria-hidden="true" />
            <span>{attorney.credentialsNotice}</span>
          </div>
        </div>

        {/* Credentials Grid (Structured Framework) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {attorney.sampleCredentials.map((item, i) => {
            const icons = [GraduationCap, Scale, BookOpen, Users];
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="bg-[#F8F5EE] border border-[#D8D4CC] p-6 sm:p-8 rounded-[2px] shadow-sm flex items-start gap-5"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[2px] bg-[#0F1F3D] text-[#B8996A] flex items-center justify-center shrink-0">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-[#0F1F3D] text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-[#5A5753] text-xs font-mono tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
