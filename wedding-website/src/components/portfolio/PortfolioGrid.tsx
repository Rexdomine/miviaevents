import React from 'react';

const portfolioItems = [
    {
        volume: "Volume I",
        location: "The Italian Riviera",
        couple: "Elena & Julian",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo2zsE_jUEyZWX3UsWZH5Dmp7Mv0syzjG35tphiYrOKO1PN-tz1Uwtxs0LSCbeBPvtb7O41WiqCSR5TxS4PJ2e8exQn8go_dNjXRB_dJU52ZrQHhgfwdb3_9ujuYAMzaup9Aiz6-jCKCN_BtVeJIw4rKiCwS7iXfrgSZoKKg70LyyhFKAWbceZt3laXkkU6Cj1KovhxPfi3vNXizT-1KSaRc1LwXXVU8oo_mfGv52n9tJFxu7Kw6QZcmZh3ITKex_RQ6i8vXgooLY",
        featured: true
    },
    {
        volume: "Volume II",
        location: "Chateau de Villette",
        couple: "Sophia & Marc",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArPC-meCXzMtA2Lx-mOwKkC1KsNTIT0RKAVz5ajsFsKoMXdsJDX5-CPW83MnW5aKNrzgOFiVeCGjz9UjiSINYGsgnyZP8MIol4uDt39jCpMIt9KDz4yzwdXRChNJvO9-P_8a_x0N6bM2RSIb65uEwpSApsI7Khb57qVPXktEANK6z-rJZg2j_HhJrhY0bcO0khThoLisoogTSCKxZ5NCW7dqGKh_rewWVbFLNxFyTbCkP2M6o8KRYgWXqPRvpEM4RrEZSZ0XYGDRE",
        featured: false
    },
    {
        quote: "A celebration that felt like a timeless piece of art. Every detail was curated with intention and grace.",
        source: "Vogue Weddings, 2023",
        isQuote: true
    },
    {
        volume: "Volume III",
        location: "Amanpuri Sands",
        couple: "Isabella & Liam",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2P6Z8WkT2ihjT1gRXadfbpitfYJlmk7MTp8YtwBZv2S4kKs-FjGIpfp01MyqiJpXO5CsAEZvL13Z9gobXVcDqc68AL-dX9NoE9fwYPR3lnpViyh3lpXMTdoF5KhDtciX_GSuYvOgEOMqyShAg4F8nFqCkzzuAChoUVUgAAgMUsEjnB9rOqXKcfBwLd_mn8tDnTTPpt68fpNkfNck1yejKt4e_LUa-eRFqxUe7PeDNiDlQER4FQMQM-ww_yazwdGDRFNElxwJatAM",
        featured: false
    },
    {
        volume: "Volume IV",
        location: "Provence Lavender Fields",
        couple: "Clara & Antoine",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Y3GkKVo8Qupxs-dudKUjT7YZmq93xIUW8jvCcprBkoQkY3Qs9vflVSbg-UGR3jt1UWMO54mz9_7nWbSFC9vIYxOQcQ_ZdrrmgVbbNGKkNzdhIALUjkCr1sVjjel7vh15LRBwxRXsqmt7otZI2r9rwc9QwdYd6o2jzgrP-gRTvudFWIST29Qz8heqLgbxrq5cVf6JUWayn7iXjOgM28rKr7ntYgPjbyVE1gIHjRXT5Pur-Ht3jsr5o4lQ9TNuVIyZrG3M7WKs-wE",
        featured: false
    },
    {
        volume: "Volume V",
        location: "Lake Como Villa",
        couple: "Mia & James",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv4A8LYIwaM9aOAZWMsKkLiUrTcrd8DmZGiw5MWI7DCvNUkXeJ6TMFN8vBg2EK3r6xi8cQnjCyd6-DUSDlswpOnErLL5WImpOwcWxfvGl4zWjK6z9oLHV7J1_Uu0fasg975WdtHe-cL40JUvcYv5kCuCG5dtXjZbrYqHI-mWeTj_z8skwHHtp7WGVPzK5WLAros85djOhb6WexquRMhMuVkxgtbm6Q_q7JJ9U3_yl9ck95Pc9wy0GRmtaWKIMA1mvQdiG4nPhAFlQ",
        featured: false
    }
];

export default function PortfolioGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => {
            if (item.isQuote) {
                return (
                    <div key={index} className="flex flex-col items-center justify-center p-12 text-center bg-primary/5 rounded-xl border border-primary/10">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6">format_quote</span>
                        <h2 className="text-3xl font-light italic leading-snug text-[#1b180d] dark:text-primary/90">
                            "{item.quote}"
                        </h2>
                        <p className="mt-6 text-sm uppercase tracking-widest text-[#9a864c]">{item.source}</p>
                    </div>
                );
            }
            return (
                <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#e5e7eb]">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                        <div className="flex justify-between items-start">
                            <span className="text-xs uppercase tracking-widest opacity-80">{item.volume}</span>
                            {item.featured && <span className="material-symbols-outlined text-primary">auto_awesome</span>}
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-primary">{item.location}</p>
                            <h3 className="text-4xl font-light mb-4 italic">{item.couple}</h3>
                             <button className="text-xs uppercase tracking-widest border-b border-white/40 pb-1 group-hover:border-primary transition-colors cursor-pointer">View Feature</button>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
      <div className="mt-20 text-center">
        <button className="px-12 py-5 border border-primary text-[#1b180d] dark:text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-primary hover:text-white transition-all rounded-lg cursor-pointer">
            Load More Archives
        </button>
      </div>
    </section>
  );
}
