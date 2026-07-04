'use client';

import { TourDetail } from '@/lib/data/tourDetails';
import { AlertCircle, CheckCircle2, Clock, MapPin, Zap, DollarSign } from 'lucide-react';

export default function TourImportantNotes({ tour }: { tour: TourDetail }) {
  return (
    <section className="py-16 bg-[#1a3a52] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Important <span className="text-[#14B8A6]">Information</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Everything you need to know before booking this tour
          </p>
        </div>

        {/* Important Notes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={28} className="text-[#FCD34D]" />
            <h3 className="text-2xl font-bold text-white">Important Notes & Tips</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tour.importantNotes.map((note, index) => (
              <div
                key={index}
                className="bg-[#0F2942] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition flex items-start gap-4"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 size={20} className="text-[#14B8A6]" />
                </div>

                {/* Content */}
                <p className="text-[#94A3B8] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mb-12 bg-gradient-to-r from-[#1a3a52] to-[#0F2942] rounded-lg p-8 border border-[#374151]">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={28} className="text-[#EF4444]" />
            <h3 className="text-2xl font-bold text-white">Cancellation Policy</h3>
          </div>

          <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
            {tour.cancellationPolicy}
          </p>

          {/* Timeline */}
          <div className="space-y-4">
            
            {/* Free Cancellation */}
            <div className="flex items-start gap-4 p-6 bg-[#0F2942] rounded-lg border border-[#10B981]/30 hover:border-[#10B981] transition">
              <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} className="text-[#10B981]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold mb-2">Free Cancellation</h4>
                <p className="text-[#94A3B8] text-sm">Until 30 days before departure</p>
              </div>
              <span className="text-[#10B981] font-bold whitespace-nowrap">100% Refund</span>
            </div>

            {/* Partial Refund */}
            <div className="flex items-start gap-4 p-6 bg-[#0F2942] rounded-lg border border-[#F59E0B]/30 hover:border-[#F59E0B] transition">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} className="text-[#F59E0B]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold mb-2">Partial Refund</h4>
                <p className="text-[#94A3B8] text-sm">15 to 30 days before departure</p>
              </div>
              <span className="text-[#F59E0B] font-bold whitespace-nowrap">50% Refund</span>
            </div>

            {/* Non-Refundable */}
            <div className="flex items-start gap-4 p-6 bg-[#0F2942] rounded-lg border border-[#EF4444]/30 hover:border-[#EF4444] transition">
              <div className="w-12 h-12 bg-[#EF4444]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap size={24} className="text-[#EF4444]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold mb-2">Non-Refundable</h4>
                <p className="text-[#94A3B8] text-sm">Within 15 days of departure</p>
              </div>
              <span className="text-[#EF4444] font-bold whitespace-nowrap">0% Refund</span>
            </div>
          </div>
        </div>

        {/* Travel Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Documents Required */}
          <div className="bg-[#0F2942] rounded-lg p-8 border border-[#374151]">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={24} className="text-[#14B8A6]" />
              <h3 className="text-xl font-bold text-white">Documents Required</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                <span>Valid passport (6 months validity)</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                <span>Visa (if applicable for destination)</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                <span>Travel insurance documents</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                <span>Vaccination certificates (if required)</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                <span>Return flight booking confirmation</span>
              </li>
            </ul>
          </div>

          {/* What to Pack */}
          <div className="bg-[#0F2942] rounded-lg p-8 border border-[#374151]">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={24} className="text-[#FCD34D]" />
              <h3 className="text-xl font-bold text-white">Packing Essentials</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#FCD34D] rounded-full mt-2 flex-shrink-0" />
                <span>Lightweight, breathable clothing</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#FCD34D] rounded-full mt-2 flex-shrink-0" />
                <span>High SPF sunscreen and sunglasses</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#FCD34D] rounded-full mt-2 flex-shrink-0" />
                <span>Comfortable walking shoes and sandals</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#FCD34D] rounded-full mt-2 flex-shrink-0" />
                <span>Insect repellent and medications</span>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8]">
                <span className="w-2 h-2 bg-[#FCD34D] rounded-full mt-2 flex-shrink-0" />
                <span>Camera and portable charger</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#0F2942] rounded-lg p-8 border border-[#374151]">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle size={28} className="text-[#14B8A6]" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            
            {/* FAQ Item 1 */}
            <div className="border border-[#374151] rounded-lg p-6 bg-[#1a3a52] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#14B8A6]">Q:</span> Is travel insurance mandatory?
              </h4>
              <p className="text-[#94A3B8] ml-6">
                Travel insurance is not mandatory but highly recommended. We offer optional coverage that includes flight cancellations, medical emergencies, and trip delays.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-[#374151] rounded-lg p-6 bg-[#1a3a52] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#14B8A6]">Q:</span> What is the payment policy?
              </h4>
              <p className="text-[#94A3B8] ml-6">
                We offer flexible payment plans. You can pay 100% upfront, 50% at booking with balance 30 days before, or monthly installments over 3 months.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-[#374151] rounded-lg p-6 bg-[#1a3a52] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#14B8A6]">Q:</span> Is there a minimum group size?
              </h4>
              <p className="text-[#94A3B8] ml-6">
                Yes, the minimum group size is {tour.groupSize.min} people. If you're traveling solo or with fewer people, we can match you with other travelers.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-[#374151] rounded-lg p-6 bg-[#1a3a52] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-[#14B8A6]">Q:</span> What if I need to modify my booking?
              </h4>
              <p className="text-[#94A3B8] ml-6">
                Changes can be made up to 30 days before departure at no additional cost (if available). After 30 days, changes may incur a fee depending on availability.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-[#14B8A6]/10 to-[#0d9488]/10 border border-[#14B8A6]/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-[#94A3B8] mb-6">Our travel experts are here to help</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 px-8 rounded-lg transition">
              Contact Support
            </button>
            <button className="bg-transparent border border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10 font-bold py-3 px-8 rounded-lg transition">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}