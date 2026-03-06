import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-gray-900">

      {/* ── Hero Header ── */}
      <div className="text-center mb-32 px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-6 opacity-60">Services &amp; Offerings</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light italic leading-tight">The Signature Experience</h1>
      </div>

      {/* ── Section 1: Wedding Planning (Image Left) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-1 md:order-1">
            <div className="aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9FUJWX9Q7AZGQ-XTTru0zac-CF4CsF5mAq7pqBJjWvsDHjUopMD4glhpbRs1gLfHNiEg6BCbsmaELz3OAAAw2y8b1xvKvM16qb9KE1UXu8-f2P66tix6GwNyOA1qdgKZcoEf2wyjtcmlQFEeBedDhWgYlD6lYeBBaGGSE_DN3yd3et7qd07QD4R7yPy1KdP8yuDwLVSYgQQDTkNgi4XZ50vmWiXJ7LjPOj8VxyTE8IsGrApFrvPk7VAPAgdIdc9elRq76s_Rdv57C"
                alt="Luxury outdoor wedding reception table setting"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:pl-12 order-2 md:order-2">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-70">Curated Celebrations</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Wedding Planning</h2>
            <p className="text-lg font-light leading-relaxed mb-10 opacity-80 max-w-md">
              Bespoke wedding design and management for the most discerning couples. We ensure every detail reflects your unique love story through a meticulous, high-touch process.
            </p>
            <Link href="/contact" className="inline-block text-[11px] uppercase tracking-[0.3em] border-b border-gray-900 pb-1 hover:opacity-40 transition-all">
              Inquire for details
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: Corporate & Social (Image Right) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-12 order-2 md:order-1">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-70">Corporate Excellence</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Corporate &amp; Social Events</h2>
            <p className="text-lg font-light leading-relaxed mb-10 opacity-80 max-w-md">
              Elevating brand experiences and private celebrations. From sophisticated galas to high-impact product launches, we define the standard for excellence.
            </p>
            <Link href="/portfolio" className="inline-block text-[11px] uppercase tracking-[0.3em] border-b border-gray-900 pb-1 hover:opacity-40 transition-all">
              View Portfolio
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfh_d4yK0gfL_dcly99wRi7TmcrjRRE9aRvQKbbI-9ZV2tlMwW4JrUCF6rbDMLfz3TvVfP3Q2jFIYSASOdmdUzX2yVJMNgY_BtqCqX95M_LUgwXDEHjDNxHJ1iSDcmhXRZJS3S5idq5mjk_e_w6eA7lbfSlWMOImaPsCu7ja2ygq_YCCxnrERUtIxWbYydO2QZ9-X3FfGgI5Y29PDY0ITx7ChkesvEKoSXX6svV6dmlNl0q7v-_l4jSHFCu0bkJ-FmNiK3d3_Rk3lu"
                alt="Modern minimalist corporate gala setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Event Design (Image Left) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-1 md:order-1">
            <div className="aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyouXE6DSsodJvr9tQ9EhHqPxkjhu63qWjqxyaUQclxOykxGOhexrDc6m1ZYNnZC2OueWycVCdCyn-Xbzij30Pv2NKvuBG4S02iE4vE6Kw59gae8SnKlFSjjQnX64jE-Z4OyySVZNVpbz6FlR2B3G_OYm8dFDjwOMTXrVuA41AwW5_sCrBJFXa9nRA6kC8IcHkFVu1u7NgWqNzrc4fIsZ4PEu8mh7MTXWrwDvEd_Umi2QqbpQVgyBWxT_PC3tHOhYwEy0zN34Cc_ck"
                alt="Artistic floral installation at luxury event"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:pl-12 order-2 md:order-2">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-70">Artistic Direction</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Event Design &amp; Styling</h2>
            <p className="text-lg font-light leading-relaxed mb-10 opacity-80 max-w-md">
              Transforming spaces into immersive environments. Our design studio focuses on textures, lighting, and floral architecture to create a sensory experience unlike any other.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-[11px] uppercase tracking-[0.3em] border border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              Explore the Aesthetic
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Vendor Coordination (Image Right) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-12 order-2 md:order-1">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-70">Seamless Execution</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Vendor Coordination</h2>
            <p className="text-lg font-light leading-relaxed mb-10 opacity-80 max-w-md">
              A refined network of world-class partners. We manage all logistics and communications, ensuring every creative partner is aligned with your vision.
            </p>
            <Link href="/about" className="inline-block text-[11px] uppercase tracking-[0.3em] border-b border-gray-900 pb-1 hover:opacity-40 transition-all">
              Our Partners
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTN741R7wmaJ5pgHGPMGj_1T_dviJ9bNaVXC4hb1UJZFVibmE1XX3Qdu11ejEB-V4rn0_87GR4W3r1bSMR7dIoW87guEznCBLq5rC1CUfoTWRYLGeVACawyUFH5fnc-OfOvd0bbKSWR2D5c9eUWDAp6vSNyl7SKdA1b9PfO8ZNdA1z5oLD68p-vhZcWsQwhoUvw4nPvYg7Alr1_U1iPyb-NNe24NauV9CB95_Djp6p6XLMVapIYSmswsuPHej24krokU9TIvBz_7TK"
                alt="Luxury invitation suite and wedding stationery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="max-w-4xl mx-auto px-6 text-center border-t border-zinc-100 pt-24">
        <h2 className="font-serif text-4xl italic font-light mb-12">Let&apos;s create something timeless.</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="w-full md:w-auto px-12 py-4 border border-gray-900 text-[11px] uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all text-center"
          >
            Book a Consultation
          </Link>
          <Link
            href="/portfolio"
            className="w-full md:w-auto px-12 py-4 border border-gray-300 text-[11px] uppercase tracking-[0.3em] hover:border-gray-900 transition-all text-center"
          >
            View Portfolio
          </Link>
        </div>
      </section>

    </main>
  );
}
