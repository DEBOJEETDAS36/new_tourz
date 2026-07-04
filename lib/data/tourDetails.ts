export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: {
    breakfast?: boolean;
    lunch?: boolean;
    dinner?: boolean;
  };
  accommodation: string;
}

export interface TourDetail {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  daysCount: number;
  price: number;
  originalPrice: number;
  discount?: number;
  rating: number;
  reviews: number;
  mainImage: string;
  galleryImages: string[];
  category: 'leisure' | 'mice';
  tags: string[];
  description: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  priceBreakdown: {
    [key: string]: number;
  };
  groupSize: {
    min: number;
    max: number;
  };
  bestTimeToVisit: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  departureDates: string[];
  testimonials: {
    name: string;
    location: string;
    rating: number;
    review: string;
    avatar: string;
  }[];
  importantNotes: string[];
  cancellationPolicy: string;
}

export const tourDetailsMap: { [key: string]: TourDetail } = {
  '1': {
    id: '1',
    title: 'Bali Beach Paradise',
    destination: 'Bali',
    country: 'Indonesia',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    price: 45000,
    originalPrice: 65000,
    discount: 31,
    rating: 4.8,
    reviews: 245,
    mainImage: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=1400&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1514282401047-7e6e5d71add8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
    ],
    category: 'leisure',
    tags: ['Offbeat', 'Beach', 'International', 'Romantic', 'Adventure'],
    description: 'Experience the tropical beauty of Bali with pristine beaches, ancient temples, and vibrant culture.',
    overview: 'Escape to the island paradise of Bali and discover its pristine beaches, ancient temples, and vibrant culture. This 5-day journey takes you through the best of what Bali has to offer, from relaxing beach days to exploring traditional villages and experiencing the local way of life. Perfect for honeymooners, families, and adventure seekers alike.',
    highlights: [
      'Relax on pristine white sand beaches of Seminyak and Kuta',
      'Visit the iconic Tanah Lot Temple during sunset',
      'Explore traditional Balinese villages and rice terraces',
      'Experience authentic Balinese cuisine and cooking classes',
      'Water sports including surfing, snorkeling, and jet skiing',
      'Visit ancient temples and spiritual sites',
      'Balinese spa and wellness treatments',
      'Interact with local artists and craftspeople',
    ],
    inclusions: [
      'Round-trip flights from your city',
      '4 nights accommodation in 3-star hotel with breakfast',
      'Daily breakfast and 2 dinners',
      'Airport transfers by private vehicle',
      'Guided tours of all major attractions',
      'Entrance fees to temples and attractions',
      'Travel insurance (basic coverage)',
      'All taxes and service charges',
    ],
    exclusions: [
      'Personal expenses and shopping',
      'Activities not mentioned in itinerary',
      'Premium travel insurance',
      'Visa fees (if applicable)',
      'Meals not specified in itinerary',
      'Gratuities and tips',
      'Optional activities and water sports',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali',
        description: 'Arrive at Denpasar International Airport and transfer to your hotel. Rest and prepare for the adventures ahead.',
        activities: [
          'Airport arrival and welcome',
          'Transfer to hotel',
          'Hotel check-in and rest',
          'Evening walk on Seminyak Beach',
        ],
        meals: { lunch: true, dinner: true },
        accommodation: '3-Star Hotel in Seminyak',
      },
      {
        day: 2,
        title: 'Beach Relaxation & Tanah Lot Temple',
        description: 'Spend the day at beautiful beaches and visit the iconic Tanah Lot Temple.',
        activities: [
          'Breakfast at hotel',
          'Seminyak Beach relaxation',
          'Lunch at beachfront restaurant',
          'Visit Tanah Lot Temple',
          'Sunset viewing',
          'Traditional Balinese dinner',
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '3-Star Hotel in Seminyak',
      },
      {
        day: 3,
        title: 'Culture & Village Exploration',
        description: 'Discover traditional Balinese culture and explore local villages.',
        activities: [
          'Breakfast at hotel',
          'Travel to Ubud (cultural heart of Bali)',
          'Visit traditional art market',
          'Walk through rice terraces',
          'Visit local craft workshops',
          'Cultural dance performance',
          'Dinner with local family',
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '3-Star Hotel in Ubud',
      },
      {
        day: 4,
        title: 'Water Sports & Adventure',
        description: 'Get your adrenaline pumping with exciting water sports and beach activities.',
        activities: [
          'Breakfast at hotel',
          'Surfing lessons on Kuta Beach',
          'Lunch break',
          'Snorkeling adventure',
          'Jet ski experience',
          'Beach volleyball',
          'Balinese spa and massage',
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '3-Star Hotel in Seminyak',
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Enjoy final beach time and shopping before heading to airport for departure.',
        activities: [
          'Breakfast at hotel',
          'Last-minute beach relaxation',
          'Souvenir shopping at local markets',
          'Lunch',
          'Transfer to airport',
          'Departure',
        ],
        meals: { breakfast: true, lunch: true },
        accommodation: 'N/A',
      },
    ],
    priceBreakdown: {
      'Flights (Round-trip)': 15000,
      'Hotel (4 nights, 3-star)': 16000,
      'Meals (Breakfast & Dinners)': 8000,
      'Tours & Activities': 4000,
      'Airport Transfers': 2000,
    },
    groupSize: {
      min: 2,
      max: 20,
    },
    bestTimeToVisit: 'April to October (Dry Season)',
    difficulty: 'Easy',
    departureDates: [
      '15th July 2024',
      '22nd July 2024',
      '29th July 2024',
      '5th August 2024',
      '12th August 2024',
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        location: 'Mumbai',
        rating: 5,
        review: 'Absolutely amazing experience! The beaches were pristine and the local guides were very knowledgeable. Highly recommend!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      },
      {
        name: 'Rajesh Kumar',
        location: 'Delhi',
        rating: 4.8,
        review: 'Great value for money. Everything was well organized. Would definitely book again!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      },
      {
        name: 'Anjali Desai',
        location: 'Bangalore',
        rating: 5,
        review: 'Perfect honeymoon package! The romantic dinners and sunset views were unforgettable.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      },
    ],
    importantNotes: [
      'Passport should be valid for at least 6 months from the date of travel',
      'Travel insurance is recommended for all international trips',
      'Check with your bank regarding international transaction charges',
      'Pack light clothes for tropical climate',
      'Carry sunscreen and insect repellent',
      'Currency exchange available at airport and local ATMs',
    ],
    cancellationPolicy: 'Free cancellation until 30 days before travel. 50% refund between 15-30 days. No refund within 15 days.',
  },
};