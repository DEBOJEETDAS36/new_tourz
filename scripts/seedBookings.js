const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },
    tourId: {
      type: String,
      required: true,
    },
    tourTitle: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    departureDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    specialRequests: String,
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);

const bookingsData = [
  {
    bookingId: 'BK1001',
    tourId: '1',
    tourTitle: 'Bali Beach Paradise',
    customerName: 'Rajesh Singh',
    customerEmail: 'rajesh.singh@email.com',
    customerPhone: '+91 98765 43210',
    numberOfPeople: 2,
    totalPrice: 90000,
    departureDate: '2024-07-15',
    status: 'confirmed',
    paymentStatus: 'completed',
    specialRequests: 'Vegetarian meals preferred',
  },
  {
    bookingId: 'BK1002',
    tourId: '2',
    tourTitle: 'Swiss Alps Adventure',
    customerName: 'Priya Sharma',
    customerEmail: 'priya.sharma@email.com',
    customerPhone: '+91 98765 43211',
    numberOfPeople: 3,
    totalPrice: 255000,
    departureDate: '2024-08-01',
    status: 'pending',
    paymentStatus: 'pending',
    specialRequests: 'High altitude experience',
  },
  {
    bookingId: 'BK1003',
    tourId: '3',
    tourTitle: 'Egypt Ancient Wonders',
    customerName: 'Amit Patel',
    customerEmail: 'amit.patel@email.com',
    customerPhone: '+91 98765 43212',
    numberOfPeople: 4,
    totalPrice: 220000,
    departureDate: '2024-10-05',
    status: 'confirmed',
    paymentStatus: 'completed',
    specialRequests: 'Photography tours',
  },
  {
    bookingId: 'BK1004',
    tourId: '4',
    tourTitle: 'Paris Romance Tour',
    customerName: 'Deepa Gupta',
    customerEmail: 'deepa.gupta@email.com',
    customerPhone: '+91 98765 43213',
    numberOfPeople: 2,
    totalPrice: 130000,
    departureDate: '2024-12-10',
    status: 'pending',
    paymentStatus: 'completed',
    specialRequests: 'Romantic dinner reservation',
  },
  {
    bookingId: 'BK1005',
    tourId: '5',
    tourTitle: 'Maldives Tropical Escape',
    customerName: 'Vikram Kumar',
    customerEmail: 'vikram.kumar@email.com',
    customerPhone: '+91 98765 43214',
    numberOfPeople: 2,
    totalPrice: 136000,
    departureDate: '2024-12-25',
    status: 'confirmed',
    paymentStatus: 'completed',
    specialRequests: 'Honeymoon package',
  },
  {
    bookingId: 'BK1006',
    tourId: '6',
    tourTitle: 'Tokyo Tech & Culture',
    customerName: 'Sneha Verma',
    customerEmail: 'sneha.verma@email.com',
    customerPhone: '+91 98765 43215',
    numberOfPeople: 3,
    totalPrice: 162000,
    departureDate: '2025-03-01',
    status: 'pending',
    paymentStatus: 'pending',
    specialRequests: 'Anime and tech-focused tour',
  },
  {
    bookingId: 'BK1007',
    tourId: '1',
    tourTitle: 'Bali Beach Paradise',
    customerName: 'Arun Desai',
    customerEmail: 'arun.desai@email.com',
    customerPhone: '+91 98765 43216',
    numberOfPeople: 5,
    totalPrice: 225000,
    departureDate: '2024-07-22',
    status: 'completed',
    paymentStatus: 'completed',
    specialRequests: 'Family trip with kids',
  },
  {
    bookingId: 'BK1008',
    tourId: '2',
    tourTitle: 'Swiss Alps Adventure',
    customerName: 'Neha Singh',
    customerEmail: 'neha.singh@email.com',
    customerPhone: '+91 98765 43217',
    numberOfPeople: 2,
    totalPrice: 170000,
    departureDate: '2024-07-20',
    status: 'cancelled',
    paymentStatus: 'refunded',
    specialRequests: 'None',
  },
  {
    bookingId: 'BK1009',
    tourId: '4',
    tourTitle: 'Paris Romance Tour',
    customerName: 'Kunal Joshi',
    customerEmail: 'kunal.joshi@email.com',
    customerPhone: '+91 98765 43218',
    numberOfPeople: 2,
    totalPrice: 130000,
    departureDate: '2025-02-14',
    status: 'confirmed',
    paymentStatus: 'completed',
    specialRequests: 'Valentine special',
  },
  {
    bookingId: 'BK1010',
    tourId: '5',
    tourTitle: 'Maldives Tropical Escape',
    customerName: 'Ritika Verma',
    customerEmail: 'ritika.verma@email.com',
    customerPhone: '+91 98765 43219',
    numberOfPeople: 3,
    totalPrice: 204000,
    departureDate: '2025-01-10',
    status: 'confirmed',
    paymentStatus: 'completed',
    specialRequests: 'All water sports included',
  },
  {
    bookingId: 'BK1011',
    tourId: '3',
    tourTitle: 'Egypt Ancient Wonders',
    customerName: 'Mohit Singh',
    customerEmail: 'mohit.singh@email.com',
    customerPhone: '+91 98765 43220',
    numberOfPeople: 2,
    totalPrice: 110000,
    departureDate: '2024-11-15',
    status: 'pending',
    paymentStatus: 'pending',
    specialRequests: 'Pyramid climbing',
  },
  {
    bookingId: 'BK1012',
    tourId: '6',
    tourTitle: 'Tokyo Tech & Culture',
    customerName: 'Sanjana Nair',
    customerEmail: 'sanjana.nair@email.com',
    customerPhone: '+91 98765 43221',
    numberOfPeople: 4,
    totalPrice: 216000,
    departureDate: '2025-04-15',
    status: 'pending',
    paymentStatus: 'failed',
    specialRequests: 'Sumo wrestling tickets needed',
  },
];

async function seedBookings() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing bookings
    await Booking.deleteMany({});
    console.log('🗑️ Cleared existing bookings');

    // Insert bookings
    const result = await Booking.insertMany(bookingsData);
    console.log(`✅ ${result.length} bookings inserted successfully`);

    console.log('\n📋 Bookings added:');
    result.forEach(booking => {
      console.log(`  - ${booking.bookingId}: ${booking.customerName} (${booking.tourTitle}) - ${booking.status}`);
    });

    console.log('\n📊 Summary:');
    console.log(`  - Pending: ${result.filter(b => b.status === 'pending').length}`);
    console.log(`  - Confirmed: ${result.filter(b => b.status === 'confirmed').length}`);
    console.log(`  - Completed: ${result.filter(b => b.status === 'completed').length}`);
    console.log(`  - Cancelled: ${result.filter(b => b.status === 'cancelled').length}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding bookings:', error.message);
    process.exit(1);
  }
}

seedBookings();