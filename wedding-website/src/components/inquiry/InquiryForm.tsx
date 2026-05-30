"use client";

import React, { useState } from 'react';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mvzbbjaa', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-6 md:p-16 lg:p-24 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight mb-2 text-[#111111]">Consultation Request</h2>
          <p className="text-primary italic">Please complete the details below and we will reach out shortly.</p>
        </div>

        {!submitted ? (
          <form
            className="space-y-12"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mvzbbjaa"
            method="POST"
          >
            {/* Partner Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Partner One Name</label>
                <input
                  name="partnerOneName"
                  className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] text-[#111111]"
                  placeholder="First & Last Name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Partner Two Name</label>
                <input
                  name="partnerTwoName"
                  className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] text-[#111111]"
                  placeholder="First & Last Name"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Email Address</label>
              <input
                name="email"
                className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] text-[#111111]"
                placeholder="your@email.com"
                type="email"
                required
              />
            </div>

            {/* Date & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Wedding Date</label>
                <input
                  name="weddingDate"
                  className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary text-[#111111]"
                  type="date"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Location / Venue</label>
                <input
                  name="location"
                  className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] text-[#111111]"
                  placeholder="City or Venue Name"
                  type="text"
                />
              </div>
            </div>

            {/* Budget & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Budget Range</label>
                <div className="relative w-full">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500">
                    ₦
                  </span>
                  <input
                    type="text"
                    name="budget"
                    placeholder="Enter your budget (e.g. 5,000,000)"
                    className="w-full bg-transparent text-[#111111] border-0 border-b border-gray-300 py-3 pl-7 focus:outline-none focus:border-gray-900 focus:ring-0 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Guest Count</label>
                <input
                  name="guestCount"
                  className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] text-[#111111]"
                  placeholder="Estimated attendees"
                  type="number"
                />
              </div>
            </div>

            {/* Services Multi-select Chips */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-[#9a864c]">Services Needed</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Full Planning', value: 'full-planning' },
                  { label: 'Event Design', value: 'event-design' },
                  { label: 'Day-of Management', value: 'day-of-management' },
                  { label: 'Destination Logistics', value: 'destination-logistics' },
                ].map(({ label, value }) => (
                  <label key={value} className="group cursor-pointer">
                    <input
                      type="checkbox"
                      name="services"
                      value={value}
                      className="hidden peer"
                    />
                    <span className="px-5 py-2 border border-[#111111] rounded-full text-sm peer-checked:bg-primary peer-checked:border-primary peer-checked:text-[#1b180d] transition-all hover:border-primary text-[#111111]">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-[#9a864c] mb-2">Anything else we should know?</label>
              <textarea
                name="additionalDetails"
                className="py-3 px-0 border-0 border-b border-[#111111] bg-transparent text-lg focus:ring-0 focus:border-primary placeholder:text-[#666666] resize-none text-[#111111]"
                placeholder="Tell us about your vision..."
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="group flex items-center justify-between w-full md:w-auto md:min-w-[280px] px-8 py-5 bg-primary text-[#1b180d] font-bold text-sm uppercase tracking-[0.2em] rounded hover:bg-opacity-90 transition-all"
              >
                <span>Request Consultation</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-20 p-8 border border-primary/30 bg-primary/5 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">mark_email_read</span>
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#111111]">Instant Confirmation Message</h4>
                <p className="text-sm italic text-[#9a864c] leading-relaxed">
                  &ldquo;Thank you for reaching out. Our lead planner will review your details and contact you within 48 hours to schedule your private consultation. We look forward to exploring your vision.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
