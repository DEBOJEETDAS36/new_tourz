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

  '2': {
    id: '2',
    title: 'Swiss Alps Adventure',
    destination: 'Switzerland',
    country: 'Europe',
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    price: 85000,
    originalPrice: 120000,
    discount: 29,
    rating: 4.9,
    reviews: 312,
    mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=600&h=400&fit=crop',
    ],
    category: 'leisure',
    tags: ['Adventure', 'Mountain', 'National', 'Trekking', 'Scenic'],
    description: 'Explore majestic mountains with stunning views, alpine villages, and thrilling outdoor activities.',
    overview: 'Experience the breathtaking beauty of the Swiss Alps with this 7-day adventure. Trek through stunning mountain scenery, visit charming alpine villages, and enjoy world-class cuisine. From the iconic Matterhorn to serene mountain lakes, this tour offers unforgettable mountain experiences. Perfect for adventure enthusiasts and nature lovers.',
    highlights: [
      'Hike through pristine Alpine meadows',
      'Visit the iconic Matterhorn region',
      'Experience Swiss hospitality in mountain villages',
      'Ride scenic mountain railways',
      'Explore glacial valleys and crystal-clear lakes',
      'Sample authentic Swiss cheese and chocolate',
      'Photography opportunities at every turn',
      'Wildlife spotting in natural reserves',
    ],
    inclusions: [
      'Round-trip flights from your city',
      '6 nights accommodation in 4-star mountain hotels',
      'Daily breakfast and 4 dinners',
      'Airport transfers and internal transport',
      'Guided trekking and mountain tours',
      'Mountain railway passes',
      'Travel insurance',
      'All taxes and service charges',
    ],
    exclusions: [
      'Personal expenses',
      'Activities not in itinerary',
      'Premium equipment rental',
      'Meals not specified',
      'Tips and gratuities',
      'Optional adventure activities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich',
        description: 'Arrive at Zurich Airport and transfer to your hotel. Rest and explore the city.',
        activities: ['Airport arrival', 'Hotel check-in', 'City exploration', 'Welcome dinner'],
        meals: { lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Zurich',
      },
      {
        day: 2,
        title: 'Zurich to Interlaken',
        description: 'Travel to Interlaken and begin your mountain adventure.',
        activities: ['Train to Interlaken', 'Visit Brienz Lake', 'Mountain view hike', 'Local exploration'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Interlaken',
      },
      {
        day: 3,
        title: 'Matterhorn Region',
        description: 'Explore the iconic Matterhorn and surrounding region.',
        activities: ['Cable car ride', 'Matterhorn views', 'Alpine meadow walk', 'Mountain villages'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Zermatt',
      },
      {
        day: 4,
        title: 'Gornergrat Trek',
        description: 'Trek to Gornergrat for panoramic views.',
        activities: ['Guided trek', 'Glacier views', 'Photography session', 'Mountain picnic'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Zermatt',
      },
      {
        day: 5,
        title: 'Jungfrau Region',
        description: 'Visit the Jungfrau and experience Alpine beauty.',
        activities: ['Jungfrau railway', 'Ice palace visit', 'Sphinx Observatory', 'Scenic walks'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Interlaken',
      },
      {
        day: 6,
        title: 'Lake Exploration & Chocolate Making',
        description: 'Enjoy lake activities and learn Swiss chocolate making.',
        activities: ['Lake cruise', 'Chocolate workshop', 'Village exploration', 'Shopping'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Lucerne',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Final morning to explore or shop before departure.',
        activities: ['Breakfast', 'Last-minute shopping', 'Transfer to airport', 'Departure'],
        meals: { breakfast: true, lunch: true },
        accommodation: 'N/A',
      },
    ],
    priceBreakdown: {
      'Flights (Round-trip)': 28000,
      'Hotel (6 nights, 4-star)': 36000,
      'Meals & Dining': 12000,
      'Transport & Railways': 6000,
      'Tours & Activities': 3000,
    },
    groupSize: {
      min: 2,
      max: 18,
    },
    bestTimeToVisit: 'June to September (Summer Season)',
    difficulty: 'Moderate',
    departureDates: [
      '10th July 2024',
      '20th July 2024',
      '1st August 2024',
      '15th August 2024',
    ],
    testimonials: [
      {
        name: 'Vikram Patel',
        location: 'Ahmedabad',
        rating: 5,
        review: 'The Swiss Alps are beyond words. Every moment was magical. Professional guides and excellent accommodations.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      },
      {
        name: 'Neha Singh',
        location: 'Pune',
        rating: 4.9,
        review: 'Best mountain trek experience ever! The views were spectacular and the organization was perfect.',
        avatar: 'https://images.unsplash.com/photo-1507876841863-b7baf4d597b0?w=150&h=150&fit=crop',
      },
      {
        name: 'Arjun Verma',
        location: 'Kolkata',
        rating: 5,
        review: 'A dream come true! The Swiss hospitality and natural beauty left us speechless.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      },
    ],
    importantNotes: [
      'High altitude activities - ensure good physical fitness',
      'Weather can change rapidly - pack layers',
      'Sturdy trekking boots are essential',
      'Purchase mountain insurance for adventure activities',
      'Swiss Francs are preferred currency',
      'Book accommodation well in advance during peak season',
    ],
    cancellationPolicy: 'Free cancellation until 45 days before travel. 50% refund between 30-45 days. No refund within 30 days.',
  },

  '3': {
    id: '3',
    title: 'Egypt Ancient Wonders',
    destination: 'Egypt',
    country: 'Africa',
    duration: '6 Days / 5 Nights',
    daysCount: 6,
    price: 55000,
    originalPrice: 75000,
    discount: 27,
    rating: 4.7,
    reviews: 189,
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1400&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518684029980-cf91ee2cf06d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=600&h=400&fit=crop',
    ],
    category: 'leisure',
    tags: ['Historical', 'International', 'Cultural', 'Adventure'],
    description: 'Discover ancient mysteries and iconic monuments in the land of pharaohs.',
    overview: 'Journey through time with this 6-day exploration of Egypt\'s ancient wonders. Visit the Great Pyramids of Giza, explore the temples of Luxor, cruise the legendary Nile River, and experience the mystique of one of the world\'s greatest civilizations. This tour is perfect for history enthusiasts and those seeking a unique cultural experience.',
    highlights: [
      'Marvel at the Great Pyramids of Giza',
      'Visit the legendary Sphinx',
      'Explore the Egyptian Museum in Cairo',
      'Cruise the majestic Nile River',
      'Discover temples of Luxor and Karnak',
      'Visit the Valley of the Kings',
      'Experience authentic Egyptian culture',
      'Visit local markets and bazaars',
    ],
    inclusions: [
      'Round-trip flights from India',
      '5 nights accommodation in 4-star hotels',
      'Daily breakfast and 3 dinners',
      'Nile river cruise (3 days)',
      'Airport and hotel transfers',
      'Professional Egyptologist guide',
      'Entrance fees to all sites',
      'Travel insurance',
    ],
    exclusions: [
      'Visa fees (obtainable on arrival)',
      'Personal expenses',
      'Optional tours',
      'Meals not specified',
      'Tips and gratuities',
      'Beverages at restaurants',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cairo Arrival',
        description: 'Arrive in Cairo and explore the capital city.',
        activities: ['Airport arrival', 'Hotel check-in', 'Citadel visit', 'Islamic Cairo tour'],
        meals: { lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Cairo',
      },
      {
        day: 2,
        title: 'Pyramids & Sphinx',
        description: 'Explore the iconic Pyramids of Giza and the legendary Sphinx.',
        activities: ['Pyramid complex tour', 'Sphinx photography', 'Egyptian Museum', 'Local market'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Cairo',
      },
      {
        day: 3,
        title: 'Nile Cruise Begins',
        description: 'Begin your luxury Nile river cruise.',
        activities: ['Boat boarding', 'Dendera Temple', 'Abydos Temple', 'Sunset cruise'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: 'Nile Cruise Ship',
      },
      {
        day: 4,
        title: 'Luxor Temples',
        description: 'Explore the magnificent temples of Luxor.',
        activities: ['Karnak Temple', 'Luxor Temple', 'West Bank tour', 'Colossi of Memnon'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: 'Nile Cruise Ship',
      },
      {
        day: 5,
        title: 'Valley of the Kings',
        description: 'Visit the sacred Valley of the Kings.',
        activities: ['Valley of Kings', 'Royal tombs', 'Temple of Hatshepsut', 'Local village'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: 'Nile Cruise Ship',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Final morning before departure.',
        activities: ['Breakfast', 'Last shopping', 'Transfer to airport', 'Departure'],
        meals: { breakfast: true, lunch: true },
        accommodation: 'N/A',
      },
    ],
    priceBreakdown: {
      'Flights (Round-trip)': 18000,
      'Hotel & Cruise (5 nights)': 22000,
      'Meals & Dining': 7000,
      'Guided Tours & Entrance': 6000,
      'Transport': 2000,
    },
    groupSize: {
      min: 2,
      max: 25,
    },
    bestTimeToVisit: 'October to April (Winter Season)',
    difficulty: 'Easy',
    departureDates: [
      '5th October 2024',
      '19th October 2024',
      '2nd November 2024',
      '16th November 2024',
    ],
    testimonials: [
      {
        name: 'Deepak Gupta',
        location: 'Mumbai',
        rating: 4.8,
        review: 'An incredible journey through history! The Egyptologist guide made everything come alive with fascinating stories.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      },
      {
        name: 'Meera Sharma',
        location: 'Delhi',
        rating: 4.7,
        review: 'The Nile cruise was the highlight. Watching sunsets from the boat while exploring ancient temples was magical.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      },
      {
        name: 'Sandeep Kumar',
        location: 'Bangalore',
        rating: 4.6,
        review: 'Exceeded all expectations. Great accommodations and well-planned itinerary.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      },
    ],
    importantNotes: [
      'Egyptian visa required (can be obtained on arrival)',
      'Stay hydrated in the desert climate',
      'Comfortable walking shoes are essential',
      'Respect local customs and dress modestly',
      'Egyptian Pounds are the local currency',
      'Winter season is best for comfortable sightseeing',
    ],
    cancellationPolicy: 'Free cancellation until 40 days before travel. 50% refund between 20-40 days. No refund within 20 days.',
  },

  '4': {
    id: '4',
    title: 'Paris Romance Tour',
    destination: 'Paris',
    country: 'France',
    duration: '4 Days / 3 Nights',
    daysCount: 4,
    price: 65000,
    originalPrice: 90000,
    discount: 28,
    rating: 4.9,
    reviews: 428,
    mainImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop',
    ],
    category: 'leisure',
    tags: ['Romantic', 'City', 'International', 'Honeymoon'],
    description: 'Experience the city of love with iconic sights, romantic dinners, and enchanting evenings.',
    overview: 'Fall in love with Paris on this 4-day romantic getaway. Visit the Eiffel Tower, stroll through charming neighborhoods, enjoy world-class dining, and experience the magic of the city of lights. Perfect for couples, honeymooners, and anyone seeking romance and culture.',
    highlights: [
      'Visit the iconic Eiffel Tower',
      'Explore the Louvre Museum',
      'Stroll through Montmartre',
      'Cruise the Seine River at sunset',
      'Visit Notre-Dame Cathedral',
      'Shop on the Champs-Élysées',
      'Enjoy intimate candlelit dinners',
      'Visit charming cafés and bistros',
    ],
    inclusions: [
      'Round-trip flights',
      '3 nights accommodation in 4-star hotel',
      'Daily breakfast and 2 romantic dinners',
      'Airport transfers',
      'Eiffel Tower access',
      'Seine river cruise',
      'Museum passes',
      'Travel insurance',
    ],
    exclusions: [
      'Personal shopping',
      'Optional tours',
      'Meals not specified',
      'Tips and gratuities',
      'Premium dining experiences',
      'Beverages at restaurants',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Paris Arrival',
        description: 'Arrive in Paris and settle into your romantic hotel.',
        activities: ['Airport arrival', 'Hotel check-in', 'Champs-Élysées walk', 'Romantic dinner'],
        meals: { lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Paris',
      },
      {
        day: 2,
        title: 'Eiffel Tower & Louvre',
        description: 'Explore Paris\'s most iconic attractions.',
        activities: ['Eiffel Tower visit', 'Trocadéro views', 'Louvre Museum tour', 'Seine cruise at sunset'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Paris',
      },
      {
        day: 3,
        title: 'Montmartre & Culture',
        description: 'Explore the artistic side of Paris.',
        activities: ['Montmartre walk', 'Sacré-Cœur Basilica', 'Artists\' squares', 'Local bistro dinner'],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: '4-Star Hotel in Paris',
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Final morning and departure.',
        activities: ['Breakfast at hotel', 'Last-minute shopping', 'Café visit', 'Transfer to airport'],
        meals: { breakfast: true, lunch: true },
        accommodation: 'N/A',
      },
    ],
    priceBreakdown: {
      'Flights (Round-trip)': 22000,
      'Hotel (3 nights, 4-star)': 24000,
      'Romantic Dinners': 10000,
      'Tours & Activities': 6000,
      'Transport': 3000,
    },
    groupSize: {
      min: 2,
      max: 12,
    },
    bestTimeToVisit: 'April to June & September to October',
    difficulty: 'Easy',
    departureDates: [
      '14th February 2025',
      '15th March 2025',
      '19th April 2025',
      '10th May 2025',
    ],
    testimonials: [
      {
        name: 'Rohit Sharma',
        location: 'Delhi',
        rating: 5,
        review: 'The most romantic trip ever! Paris truly is the city of love. Perfect for our anniversary.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      },
      {
        name: 'Priya Verma',
        location: 'Mumbai',
        rating: 5,
        review: 'Every moment was magical. The candlelit dinners were spectacular. Highly recommend for couples!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      },
      {
        name: 'Anil Mishra',
        location: 'Kolkata',
        rating: 4.9,
        review: 'Incredible experience! The views from Eiffel Tower were breathtaking. Worth every penny.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      },
    ],
    importantNotes: [
      'Schengen visa required for Indian citizens',
      'Learn basic French phrases for better experience',
      'Comfortable walking shoes are essential',
      'Peak season is April to June',
      'Euros are the local currency',
      'Many museums have free entry on first Sunday of month',
    ],
    cancellationPolicy: 'Free cancellation until 35 days before travel. 50% refund between 15-35 days. No refund within 15 days.',
  },
};