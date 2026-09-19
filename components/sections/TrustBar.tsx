"use client";

import Divider from "@/components/ui/Divider";
import { attorney } from "@/lib/placeholders";
import { Star, Award, Users } from "lucide-react";

/**
 * TrustBar — Structural placeholder for verified testimonials, case results, and credentials.
 *
 * This section is intentionally designed and presents the content structure to the client.
 * It will be populated with real, verified content once the client supplies:
 *   - Written client testimonials (with consent)
 *   - Case outcomes (appropriately framed)
 *   - Bar admissions and professional credentials
 *
 * Do NOT invent, fabricate, or imply any specific outcomes, reviews, or credentials.
 */
export default function TrustBar() {
  return (
    <section
      className="bg-[#0F1F3D] py-16 sm:py-20 border-b border-[#1A3260]"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Divider width="28px" />
              <p
                className="text-[#B8996A] text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Why Clients Choose {attorney.name.split(" ")[0]}
              </p>
            </div>
            <h2
              id="trust-heading"
              className="text-white"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Committed to Every Client.
            </h2>
          </div>
        </div>

        {/* Three trust pillars — structural placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: Star,
              title: "Client Reviews",
              body: "Verified client testimonials will be featured here once the firm is operational and consent has been obtained.",
            },
            {
              icon: Award,
              title: "Bar Credentials",
              body: "Attorney Walker's bar admissions, academic qualifications, and professional memberships will be listed here upon verification.",
            },
            {
              icon: Users,
              title: "Community Focus",
              body: "The CCLAW Firm serves clients across personal injury, criminal defense, and immigration — welcoming individuals from all backgrounds.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border border-white/10 rounded-[2px] p-6 sm:p-8 bg-[#1A3260]/40"
            >
              <div className="w-10 h-10 rounded-full border border-[#B8996A]/50 flex items-center justify-center text-[#B8996A] mb-5">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3
                className="text-white text-lg font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant-garamond)" }}
              >
                {title}
              </h3>
              <p
                className="text-[#B8C5D8] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Prototype note */}
        <p
          className="text-[#5A7080] text-[11px] italic text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          This section will display verified client reviews, case outcomes, and credentials prior to launch.
          No testimonials, results, or awards have been fabricated.
        </p>

      </div>
    </section>
  );
}
