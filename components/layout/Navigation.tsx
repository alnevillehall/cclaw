"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { firm, navLinks } from "@/lib/placeholders";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape key (WCAG 2.1.2)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Prevent background scroll when mobile drawer is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1F3D]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)] py-3 sm:py-3.5"
            : "bg-[#0F1F3D] py-4 sm:py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 flex items-center justify-between">
          
          {/* Brand Logo / Wordmark on the left */}
          <a
            href="/"
            className="flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8996A]"
            aria-label={`${firm.name} — Return to Homepage`}
          >
            <span
              className="text-white text-[16px] sm:text-[19px] tracking-[0.12em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {firm.logo.primaryText}
            </span>
            <span
              className="text-[#B8996A] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-normal mt-0.5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {firm.logo.secondaryText}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F0EDE6] text-[13px] tracking-[0.08em] uppercase font-medium hover:text-[#B8996A] transition-colors py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Consultation CTA & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${firm.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-[#B8C5D8] hover:text-[#B8996A] text-xs font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Phone size={14} className="text-[#B8996A]" aria-hidden="true" />
              <span>{firm.phone}</span>
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#B8996A] hover:bg-[#9A7D52] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-5 py-2.5 rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Consultation</span>
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden text-white hover:text-[#B8996A] p-2 -mr-2 transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-40 bg-[#0F1F3D] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-light hover:text-[#B8996A] transition-colors border-b border-white/10 pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                style={{ fontFamily: "var(--font-cormorant-garamond)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <a
              href={`tel:${firm.phone.replace(/\D/g, "")}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-white text-sm font-medium py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
            >
              <Phone size={16} className="text-[#B8996A]" aria-hidden="true" />
              <span>{firm.phone}</span>
            </a>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#B8996A] hover:bg-[#9A7D52] text-white text-[12px] tracking-[0.09em] uppercase font-semibold py-3.5 rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
