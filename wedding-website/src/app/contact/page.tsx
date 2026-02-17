import React from 'react';
import ContactInfo from '@/components/inquiry/ContactInfo';
import InquiryForm from '@/components/inquiry/InquiryForm';

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20">
      <ContactInfo />
      <InquiryForm />
    </div>
  );
}
