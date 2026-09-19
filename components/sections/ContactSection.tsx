"use client";

import { useState } from "react";
import Divider from "@/components/ui/Divider";
import { firm, attorney, sampleNotice } from "@/lib/placeholders";
import { Phone, Mail, MapPin, Send, AlertTriangle, CheckCircle2, RotateCcw, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.enquiry.trim()) {
      newErrors.enquiry = "Please provide a brief description of your general enquiry.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Prototype demonstration only: no data transmitted, saved, or logged
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", enquiry: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#F8F5EE] py-20 sm:py-24 md:py-32 border-b border-[#E8E4DC]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-[640px] mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Divider width="32px" />
            <p
              className="text-[#7A5623] text-[11px] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get in Touch
            </p>
          </div>
          <h2
            id="contact-heading"
            className="text-[#0F1F3D] mb-4"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Schedule a Consultation
          </h2>
          <p
            className="text-[#4A4A4A] text-[15px] sm:text-[16px] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Submit a general enquiry and Attorney Walker will be in touch to discuss how the firm can assist you.
          </p>
          <p className="text-[11px] text-[#5A5753] mt-2 italic">
            Prototype demonstration — enquiry details are not transmitted or stored.
          </p>
        </div>

        {/* Prototype & Confidentiality Warning Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div
            className="p-4 bg-[#E8E4DC]/90 border-l-3 border-[#7A5623] rounded-[2px] flex items-start gap-3 text-xs text-[#2C2C2C]"
            role="note"
          >
            <AlertTriangle size={18} className="text-[#7A5623] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold block mb-0.5">Prototype Demonstration:</strong>
              <span>{sampleNotice.formPreview}</span>
            </div>
          </div>

          <div
            className="p-4 bg-[#E8E4DC]/90 border-l-3 border-[#0F1F3D] rounded-[2px] flex items-start gap-3 text-xs text-[#2C2C2C]"
            role="note"
          >
            <AlertTriangle size={18} className="text-[#0F1F3D] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold block mb-0.5">Confidentiality Notice:</strong>
              <span>{sampleNotice.confidentialNotice}</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Form (Left) & Firm Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Form Container */}
          <div className="lg:col-span-7 bg-white border border-[#E8E4DC] p-5 sm:p-8 md:p-10 rounded-[2px] shadow-sm">
            {submitted ? (
              <div
                className="py-8 sm:py-10 flex flex-col items-start gap-5 animate-fade-in"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0F1F3D] text-[#B8996A] flex items-center justify-center">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-[#0F1F3D] text-2xl mb-2 font-light"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    Demonstration Submission Successful
                  </h3>
                  <p
                    className="text-[#4A4A4A] text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Thank you for previewing the enquiry flow. This is a prototype demonstration only. 
                    <strong> No message has been sent to {attorney.name}.</strong>
                  </p>
                  <p className="text-xs text-[#5A5753] bg-[#F8F5EE] p-3 rounded-[2px] border border-[#E8E4DC]">
                    <strong>Privacy Guarantee:</strong> Because this is an evaluation prototype, no information was logged,
                    persisted to a database, or transmitted across network services.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0F1F3D] hover:text-[#7A5623] pt-2 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                >
                  <RotateCcw size={14} aria-hidden="true" />
                  <span>Reset Demonstration Form</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[12px] tracking-[0.1em] uppercase text-[#0F1F3D] font-semibold mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Full Name <span className="text-[#7A5623]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g., Jonathan Reynolds"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={`w-full bg-[#F8F5EE] border ${
                      errors.name ? "border-red-600 ring-1 ring-red-600" : "border-[#D8D4CC] focus:border-[#7A5623]"
                    } rounded-[2px] px-4 py-3 text-sm text-[#2C2C2C] placeholder:text-[#5A5753] focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-600 mt-1.5" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[12px] tracking-[0.1em] uppercase text-[#0F1F3D] font-semibold mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email Address <span className="text-[#7A5623]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g., j.reynolds@example.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      className={`w-full bg-[#F8F5EE] border ${
                        errors.email ? "border-red-600 ring-1 ring-red-600" : "border-[#D8D4CC] focus:border-[#7A5623]"
                      } rounded-[2px] px-4 py-3 text-sm text-[#2C2C2C] placeholder:text-[#5A5753] focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-600 mt-1.5" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Optional Telephone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-[12px] tracking-[0.1em] uppercase text-[#0F1F3D] font-semibold mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Telephone <span className="text-[#5A5753] font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., (555) 019-2834"
                      className="w-full bg-[#F8F5EE] border border-[#D8D4CC] focus:border-[#7A5623] rounded-[2px] px-4 py-3 text-sm text-[#2C2C2C] placeholder:text-[#5A5753] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* General Enquiry Field */}
                <div>
                  <label
                    htmlFor="contact-enquiry"
                    className="block text-[12px] tracking-[0.1em] uppercase text-[#0F1F3D] font-semibold mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    General Enquiry Summary <span className="text-[#7A5623]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-enquiry"
                    required
                    aria-required="true"
                    rows={5}
                    value={formData.enquiry}
                    onChange={(e) => {
                      setFormData({ ...formData, enquiry: e.target.value });
                      if (errors.enquiry) setErrors({ ...errors, enquiry: "" });
                    }}
                    placeholder="Briefly state the general subject of your inquiry (e.g., dispute resolution, contract advisory). Do not provide sensitive or privileged details."
                    aria-describedby={errors.enquiry ? "enquiry-error" : undefined}
                    aria-invalid={!!errors.enquiry}
                    className={`w-full bg-[#F8F5EE] border ${
                      errors.enquiry ? "border-red-600 ring-1 ring-red-600" : "border-[#D8D4CC] focus:border-[#7A5623]"
                    } rounded-[2px] px-4 py-3 text-sm text-[#2C2C2C] placeholder:text-[#5A5753] focus:outline-none transition-colors resize-none`}
                  />
                  {errors.enquiry && (
                    <p id="enquiry-error" className="text-xs text-red-600 mt-1.5" role="alert">
                      {errors.enquiry}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F1F3D] hover:bg-[#1A3260] text-white text-[12px] tracking-[0.09em] uppercase font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-[2px] transition-colors w-full sm:w-auto cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8996A]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="hidden sm:inline">Submit Consultation Enquiry (Demo)</span>
                    <span className="sm:hidden">Submit Enquiry (Demo)</span>
                    <Send size={14} aria-hidden="true" />
                  </button>
                </div>

                {/* Attorney-client relationship disclaimer */}
                <p className="text-[11px] text-[#5A5753] leading-relaxed pt-2">
                  * Note: The transmission of an inquiry does not constitute legal advice or establish an attorney-client
                  relationship. Please refrain from submitting confidential matter details until formal representation is confirmed.
                </p>

              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Office Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct contact card */}
            <div className="bg-[#0F1F3D] text-[#F0EDE6] p-6 sm:p-8 md:p-10 rounded-[2px] shadow-sm border border-[#1A3260]">
              <h3
                className="text-white text-xl mb-6 font-light"
                style={{ fontFamily: "var(--font-cormorant-garamond)" }}
              >
                Direct Office Contact
              </h3>

              <ul className="space-y-6">
                <li>
                  <a
                    href={firm.phone === "Pending Setup" ? "#" : `tel:${firm.phone.replace(/\D/g, "")}`}
                    className="flex items-start gap-4 group text-sm text-[#B8C5D8] hover:text-[#B8996A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                  >
                    <div className="w-9 h-9 rounded-[2px] bg-[#1A3260] flex items-center justify-center text-[#B8996A] shrink-0 group-hover:bg-[#B8996A] group-hover:text-white transition-colors">
                      <Phone size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#B8C5D8]/70 block mb-0.5">Telephone</span>
                      <span className={`text-white ${firm.phone === "Pending Setup" ? "italic opacity-80 text-sm" : "font-medium"}`}>{firm.phone}</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={firm.email === "Email Pending Setup" ? "#" : `mailto:${firm.email}`}
                    className="flex items-start gap-4 group text-sm text-[#B8C5D8] hover:text-[#B8996A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]"
                  >
                    <div className="w-9 h-9 rounded-[2px] bg-[#1A3260] flex items-center justify-center text-[#B8996A] shrink-0 group-hover:bg-[#B8996A] group-hover:text-white transition-colors">
                      <Mail size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#B8C5D8]/70 block mb-0.5">Direct Email</span>
                      <span className={`text-white ${firm.email === "Email Pending Setup" ? "italic opacity-80 text-sm" : "font-medium"}`}>{firm.email}</span>
                    </div>
                  </a>
                </li>

                <li className="flex items-start gap-4 text-sm text-[#B8C5D8]">
                  <div className="w-9 h-9 rounded-[2px] bg-[#1A3260] flex items-center justify-center text-[#B8996A] shrink-0">
                    <MapPin size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C5D8]/70 block mb-0.5">Office Location</span>
                    <address className="not-italic text-white leading-relaxed">
                      {firm.location.city === "Pending Confirmation" ? (
                        <span className="italic opacity-80 text-sm">Location pending confirmation</span>
                      ) : (
                        <>
                          {firm.location.street}<br />
                          {firm.location.city}{firm.location.state ? `, ${firm.location.state}` : ""} {firm.location.zip}
                        </>
                      )}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-4 text-sm text-[#B8C5D8] pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-[2px] bg-[#1A3260] flex items-center justify-center text-[#B8996A] shrink-0">
                    <Clock size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C5D8]/70 block mb-0.5">Hours</span>
                    <span className="text-white">{firm.officeHours}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div
              className="bg-white border border-[#E8E4DC] p-6 rounded-[2px] flex flex-col items-center justify-center text-center aspect-[16/9]"
              role="region"
              aria-label="Office location map placeholder"
            >
              <div className="w-10 h-10 rounded-full bg-[#F8F5EE] border border-[#7A5623] flex items-center justify-center text-[#7A5623] mb-2">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <p
                className="text-xs font-semibold text-[#0F1F3D] uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Office Location Map
              </p>
              <p className="text-[11px] text-[#5A5753] max-w-[280px]">
                Interactive map integration configured upon client location confirmation.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
