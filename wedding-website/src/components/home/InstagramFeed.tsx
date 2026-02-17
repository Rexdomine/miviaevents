import React from 'react';
import Section from '@/components/ui/Section';
import Image from 'next/image';

const instaImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD77b0gON8EahE92gZOTDzuwZB_6VGuCpf2T9-eiRCnLJX0wjbHOLglnUt8gWXiRcoPSUK4jBbOKrvHLU64M-u0YMhacggW8k2yQVMJpIXzUwT20TI6hiQiMNT_ks4C6LSd9IiRKDiRDL9YlWmmvPTGiQUtJjuWCl0pRFdUuPfWCk2vDhE5aTCBQXI5lBw0_cN8qGxWi1HWvr7sDY0SlW-9DoedSbrGXYJexjKgVZzywWCGwfM0lbS4_e5LaLDicgSL_gj9Vn2pMes",
        alt: "Intricate wedding jewelry close up"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCMnvWq7SHgNIAPFa9wdR7WzwHYcdA8giGrxhBVsxv8NPLnFyeNmfLh_moFWoN_cuzNLMVQJmMlI6ZoJZv5QnmA3gVyDLLTGhxNvTKClfKUupc3uqhJ1fXV7gFcMOpVHs-hH-s3-ijWuefS-zqng6l9OgwqAwN65jJPTxT3ljhLmwwVoK4_eV6T3K2ithZoYe0LIJSkbQhermq_-C0bI7a_75U_DbXlgJ1Qdipl0b5aelXiqM4gUhIHa2yOlR7trxa7tpFk9Oz7Cs",
        alt: "Elegant table setting with gold accents"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByivmAso8ytx22QwKEoAdVQEaudVSbOl82j1T1SoF6DxCaUwB4zQHnZWBZkrR1FBMwiR0Cz6RtI1t8zHgLZ9uAQ50kB9Z9mJygFHIrEE1VhZCTpkjQfqd2yUI0owcbNnzil08-c6BkTSdIFGTdZ2ycjTM7-jbf0XPTV-wyUESKnTA8LWAoKNNkv8aVolaK2VdSIN9QBqWsmAlGdwaZmc0otzXtidHD_Po6OXwTliOx6abYDC9E3c_LkuN6QmVLHVFlbFWtP9YI8WU",
        alt: "Traditional Nigerian wedding attire details"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5TTaZjerQJoYNfyYLoVn5UqJWbOBY0celxsMvok6D0nvcynY5g-RGp5eMauyxobQo6Skxv9PPS6-bFhoIPKTHsq8kNGzR9AzhpZzdywKaDF9-xQhlzD9BOxD_mUnlLd3aW6QXNbkHSaht5RGYGDLBoYrST8pK83qlYOiBw2-dDRiFcguoAXDFbPb8eU83yQDUeBZhJ1cx0_W0Q3nAjA4_PQ24S1pVPhrbTGtWDAMP-8NJp0LNgvmsATq-_EPHM4ihFx84_80VpaE",
        alt: "Outdoor wedding aisle with flowers"
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3JU9A38shB86UDY0s57vkORHpOcD1hg-GeGbW6lBV0gPiatMR5msoMzxfTsvmVsXT7dW3mN1q4MO_TGLpZuqXmWbn0YPv2JAo0UPVpuXwpOAmp1EgyJw8UzKwv2Danz1JKs6wFrwPOtWwfGL2af_tcPvK-96ICj6dwW-_Z2HUIt6fv2AXKaHQhcnyobV6uIuEk2scXbeP-6Js3-2XU6zpYIU2FNMOCj_Do1PhQQHGs9sev00nah8jiias3OyyMsciX9hOgi0hsh0",
        alt: "Champagne toast at a luxury wedding"
    }
];

export default function InstagramFeed() {
  return (
    <Section className="bg-background-light dark:bg-background-dark py-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Follow the Journey</span>
        <h2 className="text-3xl font-light editorial-spacing italic">@MIVIA_EVENTS</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {instaImages.map((img, i) => (
            <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">favorite</span>
              </div>
            </div>
        ))}
      </div>
    </Section>
  );
}
