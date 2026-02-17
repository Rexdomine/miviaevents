import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesNav from '@/components/services/ServicesNav';
import ServiceItem from '@/components/services/ServiceItem';

export default function ServicesPage() {
  const services = [
    {
      id: "wedding-planning",
      category: "The Signature Experience",
      title: "Wedding Planning",
      description: "We curate weddings filled with elegance, joy, and intentional details. From engagement events to the big day, we bring your love story to life.",
      essentials: [
        "Full Concept Design",
        "Vendor Management",
        "Budget Management",
        "On-Day Coordination"
      ],
      experience: "For couples who want a seamless, stress-free journey to their dream wedding.",
      price: "Custom Quote",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL-9LnXZTM1PwEkC8Gt-iuLCUqrJF4aSysS3wOZL30b-58HYKqCasIe1JglRVL6v_FBuP8PipUBLy112DjZaDLMuQNnUskZd5CbeEJBk4JfrSAXaBrT1CpA8OekPBYXu7ZSBYTnUk_K9X1_9ugQR7scYZ3gEuA2zNn3obaLNihI9ACN-vkqDQBoIlwuJoF_r3C6Fks9WIPAxIE9dArx2SD-6yqrYyKFeRYJTZXs5IEaugDJXMO7e-uxRbIyTWurdbcAT0OvI0E_40",
      imageAlt: "Luxury wedding reception",
      reversed: false
    },
    {
      id: "corporate-social",
      category: "Elevated Gatherings",
      title: "Corporate & Social Events",
      description: "Elevating your business gatherings and creating memorable moments for life’s special occasions.",
      essentials: [
        "Brand Activations",
        "Gala Dinners",
        "Milestone Birthdays",
        "Private Parties"
      ],
      experience: "For brands and individuals seeking to make a lasting impression.",
      price: "Custom Quote",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw8dSwRsdFN5ijTZbTlqPKD8wsbvH6skMJQm1R168XLoaAWWhsRfAw--HxjCrYiUmonrnyDVLu9qES38sPfMEl6HLKDN8v19umCLuFD-O9XPZxnPsXfW4EuikeS_K8l9sz07WQIk_TlR2hlW700XtedhXEjNIz87uE8aRMbhaXNN3srb_Q4ITrEcMFBa5GnyMjnz_dUHh8OQtLuP5MU3zxlh5SMsWXknPV6R5n33wuZ1QfFqhCrQrWO2bhENktnNJpvt2VJk6a5aA",
      imageAlt: "Corporate event setup",
      reversed: true
    },
    {
      id: "design-styling",
      category: "Artistic Direction",
      title: "Event Design & Styling",
      description: "Creative direction and design services including theme development, decor selection, floral design, lighting, and overall aesthetic coordination.",
      essentials: [
        "Theme Development",
        "Floral Design",
        "Lighting Production",
        "Decor Sourcing"
      ],
      experience: "For clients who need professional visual direction to transform their venue.",
      price: "Custom Quote",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbA9iy5S88aoE_OVW6utXbnIaBnwySgmnW6coOx_wkL24H79J56Ha0EfJCiDtX7qdhhMtcOff4R77UPmMSK7QwiN3837vatyTT97j8aCBsOyhtGbRqFaqmueXy-dwQE-xm8qT1hNuk1dxiHfl4_GsjX_yFoeEs5-29DJg9YeUa92kOTS1HWig8jHNYZXbb56IXIo-xdU8Ognq7Bl6RHlaRUklymdbdGt927Qnb9Jrn2U4_2cY72sH6s8603dL52ZlXLX8NCWQ2YZY",
      imageAlt: "Elegant event styling",
      reversed: false
    },
    {
      id: "vendor-coordination",
      category: "Logistics Expert",
      title: "Vendor Coordination",
      description: "Sourcing, vetting, and managing relationships with trusted vendors including caterers, photographers, entertainment, and more.",
      essentials: [
        "Vendor Sourcing",
        "Contract Negotiation",
        "Day-of Management",
        "Timeline Execution"
      ],
      experience: "Ensuring you have the best team to execute your vision flawlessly.",
      price: "Custom Quote",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkZCRXDKX70OaRlCUs0j4fZh3PunCp2GT-4mCBxoVTt9u0_D6w4YkK8E0LOtyGTN5kmQAn3dZL5GD5o1aoWlRwFJfhG-MAdRaUMOuGBptde2P2UegYXs8lD0ZBPqpiO1Nz-ZcmN-5Z3dzlBwAKC3BFT8lKnFHuWcNScg462WKKOy9RswhFFJ56fzuO0zHLKLwvU9_4oax3UHsW9QI0kgO5yZTFFIJ3ceRXNmZXtbebGr_99twljV_XdHPrLF__6NmM-JNM3jUl1O8",
      imageAlt: "Vendor team coordination",
      reversed: true
    }
  ];

  return (
    <>
      <ServicesHero />
      <ServicesNav />
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        {services.map((service) => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </main>
    </>
  );
}
