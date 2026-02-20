import React from 'react';

export default function ImageStrip() {
  return (
    <section className="py-20 flex gap-4 overflow-hidden px-4">
      <div
        className="w-1/3 aspect-[2/3] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnCewk_E_f8Lt2TUH634-qSVCiagqfhGzPcEET9fuvyj2lqeXIicr56xl5KuidF3QMuC1x-9NGuJrlDDc3HxK_-33047Ub8kbd1rzheMpFSQtjic0roDGT4vvddcaX-sG4_MPArGcAH-oPozlLe9Hiln8kKgWLUioQjx-HVnAwD7YdHjNxgLAuR6xp-ZQc0doVpW574jYlmMfp3ZI7JI6Wc453jO5JnuTYtSlRX2EeLSvsRh7dzybN1vo-4Uq8pq_38At6TkBspxI")' }}
      ></div>
      <div
        className="w-1/3 aspect-[2/3] bg-cover bg-center rounded-lg translate-y-12"
        style={{ backgroundImage: 'url("/portfolio/Tosin&Chika2195.jpg")' }}
      ></div>
      <div
        className="w-1/3 aspect-[2/3] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXvkto3S3vtXWStWhuuNVrVh7Et1xGPoXqbhSqWHqp2DKcdFwJ2qJWOwgOfp_FhXYu1j4daq5zk2Q9Hso5aczu9tBsGUimOga-HRTzLmIAPHrCsJpeFoF52XQjug_iB46uwk-LEeVmrHD3NRLd8leJMVbKoaBUZIPhIplfZ6Vrv8igKJdAElLvzvw1SWRwtC-dwJxzPdMiGO-2ArZEXqcz48jlteCRB-5Q3Zw_2wgWEcmKeH7WUgWsINvWHAMvU1_AsOxY9hkvli0")' }}
      ></div>
    </section>
  );
}
