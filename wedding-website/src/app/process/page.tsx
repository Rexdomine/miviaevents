import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero Header ── */}
      <header className="relative w-full overflow-hidden min-h-[70vh] flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/portfolio/A10I0999.JPG")' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Text content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 py-40 md:py-52">
          <p className="text-[11px] uppercase font-semibold tracking-[0.25em] text-[#D4AF37] mb-6">The Experience</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic font-light leading-tight mb-8 text-white">
            Your Journey to a <br /> Flawless Celebration
          </h1>
          <p className="max-w-xl mx-auto text-white/90 font-light leading-relaxed">
            A curated approach to bringing your unique vision to life with elegance, precision, and an unwavering commitment to beauty.
          </p>
        </div>
      </header>


      <main className="bg-white text-gray-900">

        {/* ── Step 01: The Consultation (Image Left) ── */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJpuetgF-FDtmCBDmR0Ys_6xYqFMTlT9J5CeT5CaoEoGJluPGNXa0k_ZAxy2HA0Y8QH96Xydx4fd5M94gTx_rl0_6z3dZzLD2XoUqu-fN2-ojYZk6HOnnSAvdNp14JOODUZEmIUKCMiSxbznKlgIRa9fTbLKqP6OKrvnUmvfipToIvBvkjAkt_bKAp4pAlu9TQk0_m5oZGgykC4eXDSeuA8UX1CTMV95dB6wfnHajLRzKnCHL58GERFfPV1FHqZ74O35nboTabCJG2"
                  alt="Consultation session with mood boards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <div className="relative order-1 md:order-2">
              <span className="text-[8rem] md:text-[12rem] leading-none absolute -z-10 opacity-15 -top-12 -left-8 font-serif text-stone-200 select-none">01</span>
              <p className="text-[10px] uppercase font-semibold tracking-[0.25em] text-stone-400 mb-4">Vision Discovery</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-snug">The Consultation</h2>
              <p className="text-gray-900 leading-relaxed mb-10 font-light">
                Every masterpiece begins with a conversation. We delve into your story, your aesthetic preferences, and the emotions you wish to evoke. This is where your dream begins to take a tangible shape.
              </p>
              <Link href="/contact" className="inline-block text-[11px] uppercase font-bold tracking-[0.25em] border-b border-gray-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition-all">
                Explore Discovery
              </Link>
            </div>
          </div>
        </section>

        {/* ── Step 02: Design & Curation (Image Right) ── */}
        <section className="py-20 md:py-32 bg-stone-50/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text */}
            <div className="relative order-1">
              <span className="text-[8rem] md:text-[12rem] leading-none absolute -z-10 opacity-15 -top-12 -left-8 font-serif text-stone-200 select-none">02</span>
              <p className="text-[10px] uppercase font-semibold tracking-[0.25em] text-stone-400 mb-4">Mood Boards &amp; Palettes</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-snug">Design &amp; Curation</h2>
              <p className="text-gray-900 leading-relaxed mb-10 font-light">
                Our creative team curates a bespoke design narrative, selecting textures, colors, and floral scents that resonate with your personality. We build a visual language that is exclusively yours.
              </p>
              <Link href="/portfolio" className="inline-block text-[11px] uppercase font-bold tracking-[0.25em] border-b border-gray-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition-all">
                View Curation
              </Link>
            </div>
            {/* Image */}
            <div className="relative order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD1TB0NnptUbv3exwG-f68K6tQ0pY1rFfe1dHTUuzvaYRgsJxcfxH9FEd-AB9rdS7XbN5dkvwH0P8t_jjtZXPa_Z5DaUbBzPbyGO78hisoXTwweYYZFRazpQqIZrBQaf3EmNtcSanTdjtM5ffHpBeLWJAiOAN4UL5n9iG2OmN0TPBadrnZoq7WfEDpqauP6Z_fIvxBAGlNtfLjkuYNlPXT9hC_o4_lUet3YdjXFGJnp6iscELkb0miBwglVLDuBt4gsp4VHVlZdhX9"
                  alt="Elegant flat lay of table setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Step 03: Vendor Selection (Image Left) ── */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnEkg4oZIJyRBPyfiTMlv4aW6S7QtwE3ZuPnL4n_Rk43UIecreLuwDZuVNFAfZ1TO0kzLNiVYRner3ZV92X3Y52XyeexCSshI68oJQ3gJa6SMDfoPEX417f35qUEatQK1m_MXPCZdcHzwrDaNYdMZZWOWBh-jmDaAoc6cprG_Aj5_upinAlHr49j1-ZgbjUMLlau6FzF2jBP8Al2k8_5bK_qUSFEbw6GjLLcxmm-f-3wEe513iCeVIznPDVyIIh1y-eiiXJnrNAoD"
                  alt="Detailed lace of a wedding gown"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <div className="relative order-1 md:order-2">
              <span className="text-[8rem] md:text-[12rem] leading-none absolute -z-10 opacity-15 -top-12 -left-8 font-serif text-stone-200 select-none">03</span>
              <p className="text-[10px] uppercase font-semibold tracking-[0.25em] text-stone-400 mb-4">The Global Network</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-snug">Vendor Selection</h2>
              <p className="text-gray-900 leading-relaxed mb-10 font-light">
                We connect you with our vetted network of world-class artisans, from Michelin-starred caterers to avant-garde florists. We manage the contracts and details so you only have to make the final choice.
              </p>
              <Link href="/about" className="inline-block text-[11px] uppercase font-bold tracking-[0.25em] border-b border-gray-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition-all">
                Meet Our Partners
              </Link>
            </div>
          </div>
        </section>

        {/* ── Step 04: Execution (Image Right) ── */}
        <section className="py-20 md:py-32 bg-stone-50/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text */}
            <div className="relative order-1">
              <span className="text-[8rem] md:text-[12rem] leading-none absolute -z-10 opacity-15 -top-12 -left-8 font-serif text-stone-200 select-none">04</span>
              <p className="text-[10px] uppercase font-semibold tracking-[0.25em] text-stone-400 mb-4">Day-of Management</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-snug">Execution</h2>
              <p className="text-gray-900 leading-relaxed mb-10 font-light">
                On your wedding day, our team acts as the conductors of a silent orchestra. We ensure every petal is in place, every transition is seamless, and you are free to fully inhabit the joy of the moment.
              </p>
              <Link href="/portfolio" className="inline-block text-[11px] uppercase font-bold tracking-[0.25em] border-b border-gray-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition-all">
                See The Result
              </Link>
            </div>
            {/* Image */}
            <div className="relative order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsiq5pRQRXJNEWD-shPkwuz1b3O8SYxDHjKAnendkyNG5H6BYBVLMTi0Df0rPU_O1XSX5adhpZ6mZsoqztaT1Y4XBlSxbdoYDic5WcGDbJCxiSzBaQRwIF6npXdK9mCNCMxmtgaaMZbA1Zym3YTehhGVZXKTGIeCkVM0phe26V6o4YO8JlkmvOgnu80QxMjTBJTyn15jM2U96t4ZtJvdJsqK-zTnzd0-bRAiR41OuXIAmQKNXHGtd65jBc6oJdHi6xbjQOYKMAPyMZ"
                  alt="Grand ballroom reception setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-32 md:py-48 px-6 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-12">Ready to start your journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link
                href="/contact"
                className="text-[11px] uppercase font-bold tracking-[0.25em] border border-gray-900 px-10 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Schedule a Call
              </Link>
              <Link
                href="/portfolio"
                className="text-[11px] uppercase font-bold tracking-[0.25em] border-b border-gray-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition-all"
              >
                View Recent Portfolio
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
