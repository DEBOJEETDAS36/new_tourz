import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact Us | Tourz',
  description: 'Get in touch with Tourz for inquiries, bookings, and support',
};

export default function ContactPage() {
  return (
    <div className="bg-[#0F2942]">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactFAQ />
    </div>
  );
}