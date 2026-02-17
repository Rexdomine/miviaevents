import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1b180d] text-[#f8f7f6] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-6xl font-light mb-8">Ready to start your <span className="italic text-primary">journey?</span></h2>
            <p className="text-[#f8f7f6]/60 text-lg mb-12 max-w-md">Let&apos;s create something extraordinary together. Contact our team to begin the design process.</p>
            <Link href="mailto:miviaevents@gmail.com" className="text-3xl border-b-2 border-primary pb-2 font-light hover:text-primary transition-colors">miviaevents@gmail.com</Link>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="flex gap-8 mb-12">
              <a href="https://instagram.com/miviaevents" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold">Instagram</a>
              <Link href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold">Pinterest</Link>
              <Link href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</Link>
            </div>
            <form className="w-full max-w-sm flex gap-4">
              <input
                type="email"
                placeholder="JOIN OUR MAILING LIST"
                className="bg-transparent border-b border-white/20 text-xs w-full py-2 focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
              <button type="submit" className="material-symbols-outlined text-primary">arrow_forward</button>
            </form>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">
          <span>© {new Date().getFullYear()} Mivia Events Worldwide</span>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <span>Designed for Excellence</span>
        </div>
      </div>
    </footer>
  );
}
