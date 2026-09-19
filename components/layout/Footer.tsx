import { ExternalLink, Phone, Mail, MapPin, Shield } from "lucide-react";
import { firm, navLinks, sampleNotice } from "@/lib/placeholders";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-[#F0EDE6] border-t border-[#1A3260]">
      {/* Discreet Prototype Identification Bar */}
      <div className="bg-[#0F1F3D] border-b border-white/10 px-6 py-2.5">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#B8C5D8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8996A]" aria-hidden="true" />
            <span className="font-medium tracking-wide uppercase">{sampleNotice.prototypeIdentification}</span>
          </div>
          <span className="text-[#8A8680]">Provisional Branding · Copy Pending Attorney Review · Contact Details Pending</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Firm Branding & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col leading-none">
              <span
                className="text-white text-[20px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {firm.logo.primaryText}
              </span>
              <span
                className="text-[#B8996A] text-[10px] tracking-[0.25em] uppercase mt-1 font-normal"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {firm.logo.secondaryText}
              </span>
            </div>

            <p
              className="text-[#B8C5D8] text-[14px] leading-relaxed max-w-[360px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              An independent legal practice providing focused, high-touch counsel. Meticulous preparation,
              uncompromising ethics, and direct attorney engagement.
            </p>

            <div className="pt-2">
              <a
                href={firm.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#8A8680] hover:text-[#B8996A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                aria-label="LinkedIn Profile Placeholder (opens in a new tab)"
              >
                <ExternalLink size={14} aria-hidden="true" />
                <span style={{ fontFamily: "var(--font-inter)" }}>Professional Profile (LinkedIn Placeholder)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[#B8996A] font-semibold mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Navigation
            </p>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#B8C5D8] hover:text-[#B8996A] text-sm transition-colors block py-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Details Placeholders */}
          <div className="md:col-span-4 space-y-4">
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[#B8996A] font-semibold mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Direct Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${firm.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-[#B8C5D8] hover:text-[#B8996A] transition-colors group"
                >
                  <Phone size={14} className="text-[#B8996A] shrink-0" aria-hidden="true" />
                  <span>{firm.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${firm.email}`}
                  className="flex items-center gap-3 text-[#B8C5D8] hover:text-[#B8996A] transition-colors group"
                >
                  <Mail size={14} className="text-[#B8996A] shrink-0" aria-hidden="true" />
                  <span>{firm.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#B8C5D8]">
                <MapPin size={14} className="text-[#B8996A] shrink-0 mt-1" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {firm.location.street}<br />
                  {firm.location.city}, {firm.location.state} {firm.location.zip}
                </address>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal & Regulatory Disclaimer Bar */}
      <div className="border-t border-white/10 bg-[#07101E]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#8A8680]">
          <p>
            &copy; {currentYear} {firm.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-center md:text-right">
            <Shield size={12} className="text-[#B8996A] shrink-0 hidden sm:inline" aria-hidden="true" />
            <span>
              Attorney Advertising Disclaimer: Material presented is for general informational purposes only and does
              not constitute legal counsel.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
