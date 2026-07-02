export interface TourDetail {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'leisure' | 'mice';
  tags: string[];
  description: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  priceBreakdown: PriceItem[];
  maxGroupSize: number;
  minGroupSize: number;
  bestTimeToVisit: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

export interface PriceItem {
  category: string;
  amount: number;
}

export const tourDetailsMap: { [key: string]: TourDetail } = {
  '1': {
    id: '1',
    title: 'Bali Beach Paradise',
    destination: 'Bali, Indonesia',
    duration: '5 Days',
    price: 45000,
    originalPrice: 65000,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=1200&h=600&fit=crop',
    category: 'leisure',
    tags: ['Offbeat', 'Beach', 'International', 'Romantic'],
    description: 'Experience the tropical beauty of Bali with pristine beaches and cultural experiences.',
    overview: 'Escape to the island paradise of Bali and discover its pristine beaches, ancient temples, and vibrant culture. This 5-day journey takes you through the best of what Bali has to offer, from relaxing beach days to exploring traditional villages and experiencing the local way of life.',
    highlights: [
      'Relax on pristine white sand beaches',
      'Visit ancient temples and cultural sites',
      'Experience water sports and beach activities',
      'Explore traditional Balinese villages',
      'Enjoy authentic Balinese cuisine',
      'Visit rice terraces and agricultural areas',
    ],
    inclusions: [
      'Round-trip flights',
      '4 nights accommodation in 3-star hotel',
      'Daily breakfast and 2 dinners',
      'Airport transfers',
      'Guided tours of all attractions',
      'Entrance fees to temples',
      'Travel insurance',
    ],
    exclusions: [
      'Personal expenses',
      'Items not mentioned in itinerary',
      'Travel insurance (optional)',
      'Visa fees (if applicable)',
      'Meals not specified in itinerary',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali',
        description: 'Arrive at Denpasar International Airport and transfer to your hotel.',
        activities: ['Airport arrival', 'Hotel check-in', 'Rest and relax'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Hotel in Seminyak',
      },
      {
        day: 2,
        title: 'Beach Day & Temple Visit',
        description: 'Explore beautiful beaches and visit the iconic Tanah Lot Temple.',
        activities: ['Seminyak Beach', 'Tanah Lot Temple', 'Sunset viewing', 'Beach walk'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Seminyak',
      },
      {
        day: 3,
        title: 'Culture & Village Tour',
        description: 'Discover traditional Balinese culture and visit local villages.',
        activities: ['Ubud Village', 'Art market', 'Rice terraces', 'Cultural shows'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Ubud',
      },
      {
        day: 4,
        title: 'Water Sports & Adventure',
        description: 'Enjoy thrilling water sports and beach activities.',
        activities: ['Surfing lessons', 'Jet ski', 'Snorkeling', 'Beach volleyball'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Seminyak',
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Enjoy final beach time before heading to airport.',
        activities: ['Last-minute shopping', 'Beach relaxation', 'Airport transfer'],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'N/A',
      },
    ],
    priceBreakdown: [
      { category: 'Flight', amount: 15000 },
      { category: 'Hotel (4 nights)', amount: 16000 },
      { category: 'Meals', amount: 8000 },
      { category: 'Tours & Activities', amount: 6000 },
    ],
    maxGroupSize: 20,
    minGroupSize: 2,
    bestTimeToVisit: 'April to October (dry season)',
    difficulty: 'Easy',
  },
};