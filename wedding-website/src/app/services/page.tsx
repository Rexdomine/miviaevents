'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function ServicesPage() {
  return (
    <>
      {/* ── Full Screen Cover Hero Section ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <Image
              src="/portfolio/DSC_6554.jpg"
              alt="Luxury table landscape background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          {/* Elegant Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-black/65 -z-10"></div>
        </div>

        {/* Centered Editorial Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl text-center">
          {/* Upper Category Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-white/70 text-xs md:text-sm tracking-[0.35em] uppercase mb-5 font-sans font-semibold block drop-shadow-sm"
          >
            Services &amp; Offerings
          </motion.span>

          {/* Luxury Mixed Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-white max-w-5xl leading-tight font-semibold drop-shadow-lg"
          >
            The <span className="font-serif italic font-bold text-white">Signature Experience</span> &amp; <span className="font-serif italic font-bold text-white">curated collections</span>
          </motion.h1>

          {/* Premium Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
            className="font-sans text-white max-w-2xl mt-8 text-sm md:text-base font-normal tracking-wide leading-relaxed drop-shadow-md"
          >
            Bespoke design, seamless event coordination, and luxury planning services tailored for extraordinary couples worldwide.
          </motion.p>

          {/* Interactive Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
            className="mt-12"
          >
            <a
              href="#offerings"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-10 py-4 border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 rounded-full cursor-pointer shadow-lg backdrop-blur-sm"
            >
              Explore Offerings
            </a>
          </motion.div>
        </div>

        {/* Bouncing Scroll Down Pointer */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
          onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-sans font-medium">Scroll</span>
          <span className="material-symbols-outlined text-white/60 text-lg">keyboard_double_arrow_down</span>
        </motion.div>
      </section>

      {/* Anchor ID for scroll */}
      <div id="offerings" />

      {/* ── Main Offerings Restructured Body ── */}
      <main className="w-full bg-[#FAF9F5]">

        {/* ── Service 1: Wedding Planning (Style A: Centered + Banner Image) ── */}
        <section className="w-full bg-[#FAF9F5] border-b border-stone-200/20">
          <div className="py-24 md:py-32 px-8 text-center max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="font-[var(--font-playfair)] text-5xl md:text-7xl mb-12 leading-tight text-stone-900">
                Wedding Planning
              </h2>
            </FadeIn>

            {/* Sub-services Centered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16 text-left max-w-4xl mx-auto">
              {[
                {
                  title: "Discovery",
                  desc: "We begin by understanding your unique love story, guest capacity, aesthetic desires, and cultural priorities."
                },
                {
                  title: "Strategy & Budget",
                  desc: "We draft a comprehensive budget allocation, curate ideal venue portfolios, and define the master timeline."
                },
                {
                  title: "Design & Production",
                  desc: "We orchestrate the entire visual direction, structural floor plans, sensory textures, and bespoke details."
                },
                {
                  title: "Seamless Celebration",
                  desc: "Our dedicated coordinators direct the rehearsals and run-of-show so you can fully enjoy your wedding."
                }
              ].map((sub, idx) => (
                <FadeIn key={sub.title} delay={idx * 0.1}>
                  <div>
                    <h3 className="font-serif italic text-xl md:text-2xl text-stone-900 mb-2">
                      {sub.title}
                    </h3>
                    <p className="font-sans text-base font-light text-stone-600 leading-relaxed opacity-80">
                      {sub.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-16">
                <Link href="/contact" className="font-serif italic text-lg text-primary border-b border-primary/50 pb-1 hover:text-stone-900 hover:border-stone-900 transition-all inline-block font-semibold">
                  Begin Your Inquiry
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Massive Edge-to-Edge Banner Image */}
          <FadeIn>
            <div className="relative w-full h-[500px] overflow-hidden shadow-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9FUJWX9Q7AZGQ-XTTru0zac-CF4CsF5mAq7pqBJjWvsDHjUopMD4glhpbRs1gLfHNiEg6BCbsmaELz3OAAAw2y8b1xvKvM16qb9KE1UXu8-f2P66tix6GwNyOA1qdgKZcoEf2wyjtcmlQFEeBedDhWgYlD6lYeBBaGGSE_DN3yd3et7qd07QD4R7yPy1KdP8yuDwLVSYgQQDTkNgi4XZ50vmWiXJ7LjPOj8VxyTE8IsGrApFrvPk7VAPAgdIdc9elRq76s_Rdv57C"
                alt="Luxury outdoor wedding reception table setting"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </section>

        {/* ── Service 2: Corporate & Social (Style B: Asymmetrical Split Grid - Text Left / Image Right) ── */}
        <section className="w-full bg-stone-100 border-b border-stone-200/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-24 px-8">
            
            {/* Text Column (5 Cols) */}
            <FadeIn className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-[var(--font-playfair)] text-5xl md:text-7xl mb-12 leading-tight text-stone-900">
                Corporate &amp; Social
              </h2>

              <div className="space-y-10">
                {[
                  {
                    title: "Concept Development",
                    desc: "We align on your brand identity, messaging objectives, and guest profile to define the creative core."
                  },
                  {
                    title: "Venue Selection",
                    desc: "We scout premium locations that accommodate high-production logistics and technical infrastructure."
                  },
                  {
                    title: "Scenic & Floral Styling",
                    desc: "We design high-impact staging environments, branding integrations, and dramatic spatial atmospheres."
                  },
                  {
                    title: "Flawless Orchestration",
                    desc: "We lead rigorous rehearsals, soundchecks, and technical timelines for a seamless, prompt execution."
                  }
                ].map((sub) => (
                  <div key={sub.title}>
                    <h3 className="font-serif italic text-xl md:text-2xl text-stone-900 mb-2">
                      {sub.title}
                    </h3>
                    <p className="font-sans text-base font-light text-stone-600 leading-relaxed opacity-80">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/portfolio" className="font-serif italic text-lg text-primary border-b border-primary/50 pb-1 hover:text-stone-900 hover:border-stone-900 transition-all inline-block font-semibold">
                  Explore Corporate Suites
                </Link>
              </div>
            </FadeIn>

            {/* Image Column (7 Cols - Tall Cinematic) */}
            <FadeIn delay={0.2} className="lg:col-span-7 w-full">
              <div className="relative w-full h-[700px] overflow-hidden rounded-sm shadow-xl bg-stone-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfh_d4yK0gfL_dcly99wRi7TmcrjRRE9aRvQKbbI-9ZV2tlMwW4JrUCF6rbDMLfz3TvVfP3Q2jFIYSASOdmdUzX2yVJMNgY_BtqCqX95M_LUgwXDEHjDNxHJ1iSDcmhXRZJS3S5idq5mjk_e_w6eA7lbfSlWMOImaPsCu7ja2ygq_YCCxnrERUtIxWbYydO2QZ9-X3FfGgI5Y29PDY0ITx7ChkesvEKoSXX6svV6dmlNl0q7v-_l4jSHFCu0bkJ-FmNiK3d3_Rk3lu"
                  alt="Modern minimalist corporate gala setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ── Service 3: Event Design & Styling (Style A: Centered + Banner Image) ── */}
        <section className="w-full bg-[#FAF9F5] border-b border-stone-200/20">
          <div className="py-24 md:py-32 px-8 text-center max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="font-[var(--font-playfair)] text-5xl md:text-7xl mb-12 leading-tight text-stone-900">
                Event Design &amp; Styling
              </h2>
            </FadeIn>

            {/* Sub-services Centered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16 text-left max-w-4xl mx-auto">
              {[
                {
                  title: "Aesthetic Blueprint",
                  desc: "We craft high-fidelity mood boards, custom color stories, and detailed design portfolios."
                },
                {
                  title: "Floral Architecture",
                  desc: "We design grand-scale floral centerpieces, dramatic ceiling suspensions, and artistic botanical layers."
                },
                {
                  title: "Tabletop Curations",
                  desc: "We hand-select custom chargers, gold-rimmed glassware, textured linens, and bespoke menus."
                },
                {
                  title: "Atmospheric Lighting",
                  desc: "We draft detailed architectural light plans, integrating warm candlelight and spotlight accents."
                }
              ].map((sub, idx) => (
                <FadeIn key={sub.title} delay={idx * 0.1}>
                  <div>
                    <h3 className="font-serif italic text-xl md:text-2xl text-stone-900 mb-2">
                      {sub.title}
                    </h3>
                    <p className="font-sans text-base font-light text-stone-600 leading-relaxed opacity-80">
                      {sub.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-16">
                <Link href="/contact" className="font-serif italic text-lg text-primary border-b border-primary/50 pb-1 hover:text-stone-900 hover:border-stone-900 transition-all inline-block font-semibold">
                  Explore the Aesthetic
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Massive Edge-to-Edge Banner Image */}
          <FadeIn>
            <div className="relative w-full h-[500px] overflow-hidden shadow-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyouXE6DSsodJvr9tQ9EhHqPxkjhu63qWjqxyaUQclxOykxGOhexrDc6m1ZYNnZC2OueWycVCdCyn-Xbzij30Pv2NKvuBG4S02iE4vE6Kw59gae8SnKlFSjjQnX64jE-Z4OyySVZNVpbz6FlR2B3G_OYm8dFDjwOMTXrVuA41AwW5_sCrBJFXa9nRA6kC8IcHkFVu1u7NgWqNzrc4fIsZ4PEu8mh7MTXWrwDvEd_Umi2QqbpQVgyBWxT_PC3tHOhYwEy0zN34Cc_ck"
                alt="Artistic floral installation at luxury event"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </section>

        {/* ── Service 4: Vendor Coordination (Style B: Asymmetrical Split Grid - Image Left / Text Right - Flips Alignment) ── */}
        <section className="w-full bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-24 px-8">
            
            {/* Image Column (7 Cols - Tall Cinematic, Flips to Left on larger screens) */}
            <FadeIn delay={0.2} className="lg:col-span-7 w-full order-2 lg:order-1">
              <div className="relative w-full h-[700px] overflow-hidden rounded-sm shadow-xl bg-stone-800">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTN741R7wmaJ5pgHGPMGj_1T_dviJ9bNaVXC4hb1UJZFVibmE1XX3Qdu11ejEB-V4rn0_87GR4W3r1bSMR7dIoW87guEznCBLq5rC1CUfoTWRYLGeVACawyUFH5fnc-OfOvd0bbKSWR2D5c9eUWDAp6vSNyl7SKdA1b9PfO8ZNdA1z5oLD68p-vhZcWsQwhoUvw4nPvYg7Alr1_U1iPyb-NNe24NauV9CB95_Djp6p6XLMVapIYSmswsuPHej24krokU9TIvBz_7TK"
                  alt="Luxury invitation suite and wedding stationery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Text Column (5 Cols, Flips to Right) */}
            <FadeIn className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
              <h2 className="font-[var(--font-playfair)] text-5xl md:text-7xl mb-12 leading-tight text-white">
                Vendor Coordination
              </h2>

              <div className="space-y-10">
                {[
                  {
                    title: "Creative Partnerships",
                    desc: "We connect you with our elite, globally trusted circle of floral designers, caterers, and photographers."
                  },
                  {
                    title: "Logistical Synchronization",
                    desc: "We manage all multi-vendor load-in timelines, physical floor configurations, and power requirements."
                  },
                  {
                    title: "Contract Protection",
                    desc: "We rigorously review deliverables, payment schedules, and liability provisions to secure your investments."
                  },
                  {
                    title: "Unified Operations",
                    desc: "We publish and coordinate a singular, synchronized master timeline across all creative partners."
                  }
                ].map((sub) => (
                  <div key={sub.title}>
                    <h3 className="font-serif italic text-xl md:text-2xl text-white mb-2">
                      {sub.title}
                    </h3>
                    <p className="font-sans text-base font-light text-stone-300 leading-relaxed opacity-80">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/about" className="font-serif italic text-lg text-primary border-b border-primary/50 pb-1 hover:text-white hover:border-white transition-all inline-block font-semibold">
                  Meet Our Partners
                </Link>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ── Call to Action ── */}
        <FadeIn>
          <section className="max-w-4xl mx-auto px-6 text-center py-24 bg-white border-t border-zinc-100 mt-0">
            <h2 className="font-serif text-4xl italic font-light mb-12 text-stone-900">Let&apos;s create something timeless.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="w-full md:w-auto px-12 py-4 border border-gray-900 text-[11px] uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all text-center font-sans font-bold"
              >
                Book a Consultation
              </Link>
              <Link
                href="/portfolio"
                className="w-full md:w-auto px-12 py-4 border border-gray-300 text-[11px] uppercase tracking-[0.3em] hover:border-gray-900 transition-all text-center font-sans font-bold"
              >
                View Portfolio
              </Link>
            </div>
          </section>
        </FadeIn>

      </main>
    </>
  );
}
