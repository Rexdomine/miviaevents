import React from 'react';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPreview() {
  return (
    <Section className="py-24 px-6 lg:px-20"> {/* Custom padding override to match HTML */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Our Work</span>
          <h2 className="text-4xl font-light editorial-spacing">Portfolio Highlights</h2>
        </div>
        <Link href="/portfolio" className="text-xs uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
          View All Weddings
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
        {/* Main Image */}
        <div className="md:col-span-8 relative overflow-hidden group rounded-lg">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_Vw3EXIA-6W8D0BAscSoaq-aYNL4o3iJ_pvEnIqIRC5qULjeQqvO19u9c3GfMyLJ1hkhrB7UlnfCeAxvg32amdr95o1gqOeNyjUra_06Scle2NMHCFzNvD061vGVJnnJRe36hgnr14ewdpb3vpC_wQWPUDmyKzqTh__6zZkHtCiuunCzaHjGaHOS__Y4S4S9h6WTYsF4Zn4fu0K6Z9SGvTkBDyXQ0x7269w1aU63h43tANfkzO9n1y59xIL-LBdcxj0HGRn6Kjw"
            alt="Luxurious grand ballroom wedding in Lagos"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <h4 className="text-white text-2xl font-light">Lagos Grandeur</h4>
            <p className="text-white/80 text-sm tracking-widest uppercase mt-2">The Eko Hotel Series</p>
          </div>
        </div>

        {/* Side Stack */}
        <div className="md:col-span-4 grid grid-rows-2 gap-6">
          <div className="relative overflow-hidden group rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBXUJ5gc4ee7_ObnG7dAUOVjrIdoZtZRzTUsYnTQTk773fbpyaYzTtgTgMPnhDTagqpQ630TMJoIvkDdZOo64eQEWmWrub06E72eXXKhdxbgeq9oJu4ZQo16oIy2atacwyENWjxnsW5ohiCiKhsiQCASLuNEEnfv7r_1sHuTOVTubev_eihhHdwO9X-TluPrAVkuCFwN15TfmXBFTw-x7pbxIELaKGj9rC60Qk38U7VnLmQPNDNX-_5l2Mc3FB4HCwExBeMPRrzUw"
              alt="Elegant garden wedding in Abuja"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white text-lg font-light">Abuja Elegance</h4>
              <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Maitama Estate</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp7OQHvP72klT_rWPBVphYvFzVwz9bxInDbo9pSuUNVGxOu8g2-1B6_HiSUTpXTK0-idsrGwrLlyqQ46NVkexbB2Pi7_8ufFJfo7Ce_uMfMh072js6Frt9u7cdogWX8BdEDDtOgAhxt5bXLtpCa7ulfGt3uG_-0Q_oZ16-kP06YepozOI3FKd3ZbsTKP38FYA5chCgcBm5aIX6svscsE5A461wl4vUmuamFdkIX3QBcQj7uMLRwfsEovPfWkMdMq_XnxRfRWL-rxc"
              alt="Luxury destination wedding couple"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white text-lg font-light">Destination Romance</h4>
              <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Marrakech Celebration</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
