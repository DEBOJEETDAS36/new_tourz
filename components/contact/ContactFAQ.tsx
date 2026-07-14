'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a tour?',
      answer: 'You can browse our tours on the website, select your preferred destination, and click "Book Now". You\'ll be guided through our simple booking process. Alternatively, contact our team and we\'ll assist you with personalized recommendations.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards (Visa, Mastercard, Amex), debit cards, bank transfers, and digital wallets. We also offer flexible payment plans - 100% upfront, 50-50 split, or monthly installments.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies by tour. Generally, free cancellation is available up to 30-45 days before departure. Cancellations within 15-30 days receive 50% refund. Within 15 days, no refund is provided. Check individual tour pages for specific terms.',
    },
    {
      question: 'Is travel insurance included?',
      answer: 'Basic travel insurance is included in most packages. We recommend optional premium insurance for comprehensive coverage including medical emergencies, trip delays, and evacuation.',
    },
    {
      question: 'Can I customize my tour?',
      answer: 'Absolutely! We offer customized tour packages tailored to your preferences, budget, and schedule. Contact our team with your requirements and we\'ll create the perfect itinerary for you.',
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 2-3 months in advance for better rates and availability. However, last-minute bookings are possible depending on availability. Contact us for details.',
    },
    {
      question: 'Do you arrange visas?',
      answer: 'We can provide visa guidance and documentation requirements. While we don\'t arrange visas directly, we can recommend reliable visa services and provide all necessary documents for your application.',
    },
    {
      question: 'What should I pack?',
      answer: 'Packing depends on your destination and season. We provide detailed packing lists for each tour. Generally, pack comfortable clothing, sturdy shoes, sunscreen, and any medications. Check destination-specific guides on our blog.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#1a3a52] border-t border-[#374151]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#14B8A6]">Questions</span>
          </h2>
          <p className="text-[#94A3B8]">
            Find answers to common questions about our tours and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#374151] rounded-lg overflow-hidden hover:border-[#14B8A6] transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-[#0F2942] hover:bg-[#0F2942]/80 transition p-6 flex items-center justify-between"
              >
                <h3 className="text-white font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-[#14B8A6] flex-shrink-0 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openFAQ === index && (
                <div className="bg-[#1a3a52] border-t border-[#374151] p-6">
                  <p className="text-[#94A3B8] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-gradient-to-r from-[#14B8A6]/10 to-[#0d9488]/10 border border-[#14B8A6]/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-[#94A3B8] mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold py-3 px-8 rounded-lg transition">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}