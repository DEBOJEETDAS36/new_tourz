const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [String],
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

const blogsData = [
  {
    title: '10 Hidden Gems in Bali You Must Visit',
    slug: '10-hidden-gems-bali-must-visit',
    category: 'Destinations',
    author: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1537225228614-b6b0e5b002ea?w=800&h=400&fit=crop',
    excerpt: 'Discover the lesser-known attractions and secret spots in Bali that will make your trip unforgettable.',
    content: 'Bali is more than just beaches and temples. Beyond the crowded tourist areas, there are hidden gems waiting to be explored. In this guide, we\'ll take you through 10 amazing places that most tourists miss.\n\n1. Tegallalang Rice Terraces - A breathtaking landscape of emerald-green rice paddies that offer stunning photo opportunities.\n\n2. Amed Beach - A quiet coastal town perfect for snorkeling and diving with vibrant coral reefs.\n\n3. Penglipuran Village - A traditional Balinese village with charming architecture and friendly locals.\n\n4. Tegenungan Waterfall - A beautiful cascade waterfall surrounded by lush jungle vegetation.\n\n5. Blue Lagoon Cliff - Stunning blue waters perfect for swimming and photography.\n\nThese hidden gems offer authentic experiences away from the typical tourist trails. Pack your bags and discover the real Bali!',
    tags: ['Bali', 'Travel Guide', 'Hidden Gems', 'Destinations'],
    views: 1234,
    isPublished: true,
  },
  {
    title: 'Budget Travel Tips: How to Travel the World on $50/day',
    slug: 'budget-travel-tips-50-dollars-per-day',
    category: 'Budget Travel',
    author: 'Amit Kumar',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
    excerpt: 'Learn practical tips and strategies to travel the world on a tight budget without compromising on experiences.',
    content: 'Traveling the world doesn\'t have to be expensive. With smart planning and strategic decisions, you can explore amazing destinations on just $50 per day.\n\nAccommodation:\n- Stay in hostels or budget hotels\n- Use Airbnb for longer stays\n- Consider house-sitting opportunities\n\nFood:\n- Eat where locals eat\n- Buy groceries and cook your own meals\n- Take advantage of street food\n\nTransportation:\n- Use public transportation\n- Walk or cycle when possible\n- Consider night buses to save on accommodation\n\nActivities:\n- Look for free attractions\n- Take advantage of walking tours\n- Explore nature freely\n\nWith these tips, you can stretch your budget and have incredible experiences across the globe!',
    tags: ['Budget Travel', 'Tips', 'Money Saving', 'Backpacking'],
    views: 2156,
    isPublished: true,
  },
  {
    title: 'The Ultimate Guide to Trekking in the Swiss Alps',
    slug: 'ultimate-guide-trekking-swiss-alps',
    category: 'Adventure',
    author: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    excerpt: 'Everything you need to know about planning and executing an unforgettable trekking adventure in the Swiss Alps.',
    content: 'The Swiss Alps offer some of the most spectacular trekking experiences in the world. Whether you\'re a beginner or experienced hiker, there\'s a trail for everyone.\n\nBest Time to Trek:\n- June to September offers the best weather\n- July and August are peak seasons\n- May and October have fewer crowds\n\nWhat to Pack:\n- Sturdy hiking boots\n- Layered clothing\n- Weather-resistant jacket\n- High-altitude sunscreen\n- Emergency first aid kit\n\nPopular Trails:\n- Tour du Mont Blanc (moderate to challenging)\n- Lauterbrunnen Valley Circuit (easy to moderate)\n- Appenzell Alps (moderate)\n\nAccommodation:\n- Mountain huts offer authentic experiences\n- Valley towns have comfortable hotels\n- Camping is available in designated areas\n\nWith proper planning and preparation, the Swiss Alps will reward you with unforgettable moments and breathtaking views!',
    tags: ['Alps', 'Trekking', 'Adventure', 'Hiking'],
    views: 1876,
    isPublished: true,
  },
  {
    title: 'Cultural Experiences: Beyond the Tourist Trail in Egypt',
    slug: 'cultural-experiences-egypt-beyond-tourist-trail',
    category: 'Culture',
    author: 'Deepa Patel',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=400&fit=crop',
    excerpt: 'Experience authentic Egyptian culture by connecting with locals and exploring traditions beyond the pyramids.',
    content: 'Egypt has so much more to offer than the famous pyramids. To truly experience the country, you need to connect with its vibrant culture and warm people.\n\nTraditional Markets:\n- Khan El-Khalili bazaar in Cairo offers authentic shopping\n- Interact with vendors and learn about local crafts\n- Try traditional Egyptian snacks\n\nLocal Cuisine:\n- Koshari is Egypt\'s national dish\n- Try ful medames for breakfast\n- Enjoy fresh mezze at local restaurants\n\nCultural Activities:\n- Learn Arabic calligraphy from local artisans\n- Take a Nile felucca sailboat ride\n- Visit local mosques and Islamic centers\n- Participate in traditional tea ceremonies\n\nFestivals:\n- Cairo International Film Festival (September)\n- Islamic Cairo celebrations\n- Nubian festivals in Aswan\n\nConnecting with locals:\n- Stay in family-run guesthouses\n- Join cooking classes\n- Participate in community activities\n\nThese authentic experiences will give you a deeper appreciation for Egypt and its incredible heritage.',
    tags: ['Egypt', 'Culture', 'Travel Tips', 'Local Experience'],
    views: 945,
    isPublished: true,
  },
  {
    title: 'Best Time to Visit Each Continent: A Seasonal Guide',
    slug: 'best-time-visit-continents-seasonal-guide',
    category: 'Travel Tips',
    author: 'Rajesh Nair',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop',
    excerpt: 'Plan your travels wisely by understanding the best seasons to visit different continents around the world.',
    content: 'Timing is crucial when planning international trips. Each continent has optimal travel seasons based on weather and local events.\n\nAfrica:\n- Best: June-October (dry season)\n- Great for safaris and wildlife viewing\n- Cooler temperatures, less rain\n\nAsia:\n- Spring (March-May) and Autumn (September-November)\n- Avoid monsoon seasons\n- Spring offers pleasant weather\n\nEurope:\n- Spring (April-May) and Fall (September-October)\n- Summer is crowded but warm\n- Winter offers fewer tourists\n\nNorth America:\n- Fall (September-November) for New England\n- Spring (March-May) for general travel\n- Summer for northern regions\n\nSouth America:\n- December-February (summer in southern hemisphere)\n- May-September for trekking\n- Avoid rainy seasons\n\nOceania:\n- April-October for Australia\n- May-September for New Zealand\n- Depends on specific regions\n\nPlanning your trip according to these seasons ensures you get the best weather, fewer crowds, and better value for money.',
    tags: ['Travel Planning', 'Seasons', 'Weather', 'Tips'],
    views: 3421,
    isPublished: true,
  },
  {
    title: 'Luxury Travel in Paris: Five-Star Experiences and Dining',
    slug: 'luxury-travel-paris-five-star-experiences',
    category: 'Luxury Travel',
    author: 'Sophie Laurent',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop',
    excerpt: 'Indulge in the finest experiences Paris has to offer, from Michelin-starred restaurants to luxury accommodations.',
    content: 'Paris is synonymous with luxury and elegance. Here\'s how to experience the City of Light in true style.\n\nAccommodation:\n- Ritz Paris: iconic luxury hotel\n- Le Bristol: French elegance at its finest\n- Peninsula Paris: modern luxury with views\n\nDining Experiences:\n- L\'Astrance: three Michelin stars\n- Le Jules Verne: Eiffel Tower dining\n- Balthazar: French brasserie excellence\n\nShowing:\n- Champs-Élysées for international brands\n- Rue Saint-Honoré for haute couture\n- Galeries Lafayette for luxury shopping\n\nCultural Activities:\n- Private tours of the Louvre\n- Exclusive wine tastings\n- Private cooking classes with renowned chefs\n\nSpa and Wellness:\n- Nolinski Paris spa\n- Four Seasons spa treatments\n- Luxury wellness retreats\n\nExperience Paris like royalty with these premium offerings!',
    tags: ['Paris', 'Luxury', 'Fine Dining', 'Travel'],
    views: 2103,
    isPublished: true,
  },
];

async function seedBlogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('🗑️ Cleared existing blogs');

    // Insert blogs
    const result = await Blog.insertMany(blogsData);
    console.log(`✅ ${result.length} blog posts inserted successfully`);

    console.log('\n📝 Blog Posts added:');
    result.forEach(blog => {
      console.log(`  - "${blog.title}" (${blog.category}) - ${blog.isPublished ? '✓ Published' : '• Draft'}`);
    });

    console.log('\n📊 Summary:');
    console.log(`  - Total Posts: ${result.length}`);
    console.log(`  - Published: ${result.filter(b => b.isPublished).length}`);
    console.log(`  - Draft: ${result.filter(b => !b.isPublished).length}`);
    console.log(`  - Total Views: ${result.reduce((sum, b) => sum + b.views, 0)}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding blogs:', error.message);
    process.exit(1);
  }
}

seedBlogs();