import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 lg:px-40 ${className}`}>
      {children}
    </section>
  );
}
