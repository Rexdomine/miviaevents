import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section className="py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-5xl text-primary/40 mb-8">format_quote</span>
        <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-12 italic text-[#1b180d] dark:text-white">
            "Mivia Events turned our vision into magic. Every detail was perfection!"
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#1b180d]/10 overflow-hidden mb-4 relative">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnc6rFatxZGLbcuCgfJsLltqdOvkNUVi9PBer7eQBtouJivQWMRT5btsgJ771AqPgunl2Iuw0kV502vIH08QcKyGDB0879PDEZnCCcS7Lap417kMFjrMWXnswkhr0et-ypBM1qItWDclpZKCGwMYaCom18RPQD2aodopzSjPl_4W85ptliQWjZ6oGXgv_zA7viOQSk73X3wFvrSCSD2fUHpjzItHcbqoUWKPpbJCJB-fzCptt2l506odrxuIwSt_bUQSUs4RpvPc"
                alt="Client"
                fill
                className="object-cover"
            />
          </div>
          <cite className="not-italic">
            <span className="block font-bold uppercase tracking-widest text-sm text-[#1b180d] dark:text-white">Ada & Chike</span>
            <span className="block text-primary text-xs uppercase tracking-widest mt-1">Lagos Wedding</span>
          </cite>
        </div>
      </div>
    </section>
  );
}
