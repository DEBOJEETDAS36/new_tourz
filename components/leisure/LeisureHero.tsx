'use client';

export default function LeisureHero() {
  return (
    <section className="relative h-80 bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=600&fit=crop"
        alt="Leisure Tours"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Leisure <span className="text-[#14B8A6]">Tours</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Discover breathtaking destinations and create unforgettable memories
        </p>
      </div>
    </section>
  );
}