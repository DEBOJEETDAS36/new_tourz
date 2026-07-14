'use client';

export default function ContactHero() {
  return (
    <section className="relative h-80 bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=600&fit=crop"
        alt="Contact Us"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Get in <span className="text-[#14B8A6]">Touch</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </section>
  );
}