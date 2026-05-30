import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-40 px-6 relative z-10">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#1b180d] text-[#f8f7f6] px-6 py-12 md:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl">
        <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCp-1qfUDZgRtDgIcJH-cHNQe9F1EhU1pA_ahTqk4FytgcnF9ldreTLiKCqykyy7BKOlrLH9yje4zJ3aN0BnCMlBdYGWnLgDAgW7i2_9MyFr4cjF4TZ6NyB-27LyQuhhgNIeUJFwHC1dr87DqeR8Jswf4oF7C9-plu3WfWwaSbF-6gpO7c4skpIWS-MYwQrTDN-QzE-_AlwpXcVoB0nlho_1AzyEEWTpSMgRxp6tEpAFCAyuLJ5z7BaIBFveG4PKAKl1QKl2BnCvwg')" }}
        ></div>
        <h2 className="text-4xl md:text-6xl font-light font-serif leading-tight relative z-10 text-white">
            Your Legacy Begins <br/> <span className="italic font-light text-primary">with a Conversation.</span>
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto relative z-10 font-sans font-light leading-relaxed text-[#f8f7f6]/90">
            Allow us to transform your vision into an enduring masterpiece of cultural elegance.
        </p>
        <div className="flex justify-center relative z-10">
          <Link href="/contact" className="bg-primary text-[#1b180d] px-10 py-5 rounded-lg text-sm font-bold tracking-widest hover:scale-105 transition-transform cursor-pointer font-sans shadow-md">
              BEGIN YOUR JOURNEY
          </Link>
        </div>
      </div>
    </section>
  );
}
