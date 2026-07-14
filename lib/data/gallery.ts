export interface GalleryImage {
  id: string;
  title: string;
  destination: string;
  category: string;
  image: string;
  thumbnail: string;
  description: string;
  photographer: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Sunset at Seminyak Beach',
    destination: 'Bali, Indonesia',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=300&h=300&fit=crop',
    description: 'Golden sunset over the pristine waters of Seminyak Beach',
    photographer: 'John Smith',
  },
  {
    id: '2',
    title: 'Matterhorn Peak',
    destination: 'Switzerland',
    category: 'Mountain',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    description: 'Snow-capped peaks of the iconic Matterhorn mountain',
    photographer: 'Sarah Johnson',
  },
  {
    id: '3',
    title: 'Pyramids of Giza',
    destination: 'Egypt',
    category: 'Historical',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=300&fit=crop',
    description: 'Ancient pyramids standing majestically in the Egyptian desert',
    photographer: 'Michael Brown',
  },
  {
    id: '4',
    title: 'Eiffel Tower at Night',
    destination: 'Paris, France',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop',
    description: 'Iconic Eiffel Tower illuminated against the night sky',
    photographer: 'Emma Davis',
  },
  {
    id: '5',
    title: 'Overwater Bungalows',
    destination: 'Maldives',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1514282401047-7e6e5d71add8?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1514282401047-7e6e5d71add8?w=300&h=300&fit=crop',
    description: 'Luxury overwater bungalows in crystal clear Maldivian waters',
    photographer: 'David Wilson',
  },
  {
    id: '6',
    title: 'Shibuya Crossing',
    destination: 'Tokyo, Japan',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9d4?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1540959375944-7049f642e9d4?w=300&h=300&fit=crop',
    description: 'Busy Shibuya Crossing filled with pedestrians at night',
    photographer: 'Lisa Anderson',
  },
  {
    id: '7',
    title: 'Rice Terraces',
    destination: 'Bali, Indonesia',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=300&h=300&fit=crop',
    description: 'Stunning green rice terraces cascading down hillsides',
    photographer: 'James Miller',
  },
  {
    id: '8',
    title: 'Alpine Meadows',
    destination: 'Switzerland',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop',
    description: 'Wildflowers blooming in Alpine meadows during summer',
    photographer: 'Mary Thomas',
  },
  {
    id: '9',
    title: 'Temple Sunset',
    destination: 'Egypt',
    category: 'Historical',
    image: 'https://images.unsplash.com/photo-1518684029980-cf91ee2cf06d?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1518684029980-cf91ee2cf06d?w=300&h=300&fit=crop',
    description: 'Ancient Egyptian temple glowing in the sunset light',
    photographer: 'Robert Garcia',
  },
  {
    id: '10',
    title: 'Montmartre Streets',
    destination: 'Paris, France',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
    description: 'Charming cobblestone streets of Montmartre district',
    photographer: 'Jennifer Lee',
  },
  {
    id: '11',
    title: 'Crystal Waters',
    destination: 'Maldives',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=300&h=300&fit=crop',
    description: 'Transparent turquoise waters of the Maldives',
    photographer: 'Christopher Hall',
  },
  {
    id: '12',
    title: 'Temple District',
    destination: 'Tokyo, Japan',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=300&fit=crop',
    description: 'Traditional Japanese temple in the heart of Tokyo',
    photographer: 'Patricia White',
  },
];

export const galleryCategories = [
  'All',
  'Beach',
  'Mountain',
  'City',
  'Nature',
  'Historical',
  'Cultural',
];