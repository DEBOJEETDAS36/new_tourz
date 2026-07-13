export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  views: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Reasons to Visit Bali in 2024',
    slug: 'top-10-reasons-visit-bali-2024',
    category: 'Destinations',
    author: 'Priya Sharma',
    date: 'June 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=800&h=500&fit=crop',
    excerpt: 'Discover why Bali remains one of the most sought-after travel destinations with pristine beaches, rich culture, and affordable luxury.',
    content: 'Bali has consistently been one of the most popular travel destinations in Southeast Asia. From the moment you arrive, you\'ll understand why. The island offers a perfect blend of adventure, relaxation, culture, and cuisine. Whether you\'re a beach lover, culture enthusiast, or adventure seeker, Bali has something for everyone. The cost of living is incredibly affordable, making it perfect for budget travelers. Local hospitality is unmatched, with friendly locals ready to help. The food is delicious and diverse. The temples are breathtaking and spiritual. The rice terraces are Instagram-worthy. The nightlife is vibrant. The spas and wellness centers are world-class. And the weather is warm year-round!',
    tags: ['Beach', 'International', 'Tropical', 'Culture'],
    views: 2450,
  },
  {
    id: '2',
    title: 'Budget Travel Tips: How to Travel More for Less',
    slug: 'budget-travel-tips-travel-more-less',
    category: 'Travel Tips',
    author: 'Rajesh Kumar',
    date: 'June 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    excerpt: 'Learn practical tips and tricks to stretch your travel budget further and visit more destinations without breaking the bank.',
    content: 'Traveling on a budget doesn\'t mean sacrificing quality experiences. With smart planning and a few insider tricks, you can visit more destinations while spending less. Travel during off-season for cheaper flights and accommodation. Book flights on Tuesday or Wednesday for better rates. Stay in hostels or budget hotels. Eat where locals eat. Use public transport instead of taxis. Walk whenever possible. Look for free attractions and walking tours. Take longer trips to spread costs. Travel with friends to share expenses. Use travel rewards and loyalty programs. Travel slowly to reduce transport costs. Cook some of your own meals. These strategies can help you save 30-50% on your travel budget.',
    tags: ['Budget', 'Tips', 'Adventure', 'Planning'],
    views: 3120,
  },
  {
    id: '3',
    title: 'Switzerland: A Hiker\'s Paradise',
    slug: 'switzerland-hikers-paradise',
    category: 'Destinations',
    author: 'Amit Patel',
    date: 'June 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    excerpt: 'Explore the breathtaking hiking trails of Switzerland and discover why it\'s a dream destination for trekking enthusiasts.',
    content: 'Switzerland is renowned worldwide for its stunning alpine scenery and world-class hiking trails. The country offers hiking for all skill levels, from easy valley walks to challenging mountain treks. The Matterhorn is iconic but challenging. The Jungfrau region offers accessible Alpine scenery. The Lauterbrunnen Valley is perfect for day hikes. The Swiss Alps are best visited June to September. The weather can change rapidly, so pack layers. Hiking boots are essential. Many trails are well-marked and maintained. Mountain huts provide comfortable rest stops. Swiss trains make it easy to access trailheads. The scenery is absolutely spectacular. Crystal-clear alpine lakes dot the landscape. Wildflowers bloom in summer. The views from mountain peaks are unforgettable.',
    tags: ['Mountain', 'Hiking', 'Adventure', 'Europe'],
    views: 1890,
  },
  {
    id: '4',
    title: 'Cultural Sensitivity in Travel: A Guide',
    slug: 'cultural-sensitivity-travel-guide',
    category: 'Travel Tips',
    author: 'Deepa Gupta',
    date: 'May 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop',
    excerpt: 'Learn how to be a respectful traveler by understanding and respecting local cultures and traditions.',
    content: 'Traveling to different cultures comes with a responsibility to be respectful and mindful. Cultural sensitivity makes for better travel experiences and positive impacts on communities. Learn basic phrases in local language. Respect local customs and dress codes. Remove shoes when entering homes and temples. Don\'t touch people\'s heads (considered disrespectful in many Asian cultures). Ask permission before photographing people. Don\'t eat or point with left hand (disrespectful in some cultures). Avoid public displays of affection in conservative areas. Respect religious sites and practices. Support local businesses instead of big chains. Don\'t bargain aggressively in markets. Don\'t photograph sacred ceremonies without permission. Be mindful of poverty tourism. Give money to individuals, not organizations. Learn about local history and issues. These practices ensure positive exchanges and lasting memories.',
    tags: ['Culture', 'Tips', 'Respect', 'Travel'],
    views: 1650,
  },
  {
    id: '5',
    title: 'Egypt: Unraveling Ancient History',
    slug: 'egypt-unraveling-ancient-history',
    category: 'Destinations',
    author: 'Priya Sharma',
    date: 'May 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop',
    excerpt: 'Journey through time in Egypt and discover the mysteries of ancient civilizations that shaped human history.',
    content: 'Egypt is a living museum of human civilization. The pyramids are among the world\'s greatest wonders. The Great Pyramid of Giza is the last remaining wonder of the ancient world. The Sphinx guards the plateau with an enigmatic smile. The Valley of the Kings houses royal tombs. Karnak Temple is one of the world\'s largest temple complexes. Luxor Temple stands majestically on the Nile\'s east bank. The Egyptian Museum houses incredible artifacts. The Nile River is the lifeblood of Egypt. A Nile cruise is a must-do experience. Abu Simbel temples are carved into rock cliffs. Philae Temple is stunning on an island. The desert landscape is otherworldly. Cairo is a bustling metropolis with character. Local cuisine is delicious and affordable. Hieroglyphics tell stories of ancient times. The history is mind-boggling and vast.',
    tags: ['History', 'Ancient', 'Cultural', 'International'],
    views: 2340,
  },
  {
    id: '6',
    title: 'Solo Travel: Finding Yourself on the Road',
    slug: 'solo-travel-finding-yourself-road',
    category: 'Travel Tips',
    author: 'Rajesh Kumar',
    date: 'May 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    excerpt: 'Discover the transformative power of solo travel and learn tips for a safe and enriching experience.',
    content: 'Solo travel is empowering, liberating, and transformative. It allows you to travel at your own pace and make your own choices. Stay in hostels to meet other travelers. Join group tours to make friends. Use social media to connect with locals. Keep your itinerary flexible. Travel insurance is essential. Share your location with trusted people. Trust your gut feeling. Take care of your mental health. Document your journey. Embrace solitude and reflection. Challenge yourself. Try new things. Be open to unexpected experiences. Keep a travel journal. Learn to be comfortable alone. Make new friends. Create memories that last a lifetime. Grow as a person. Discover who you truly are.',
    tags: ['Solo', 'Personal Growth', 'Adventure', 'Tips'],
    views: 2890,
  },
];

export const blogCategories = [
  'All',
  'Destinations',
  'Travel Tips',
  'Adventure',
  'Culture',
  'Budget Travel',
  'Luxury Travel',
];