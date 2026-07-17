import mongoose from 'mongoose';

interface ITour extends mongoose.Document {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  daysCount: number;
  price: number;
  originalPrice: number;
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
  itinerary: Array<{
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
  }>;
  priceBreakdown: Record<string, number>;
  groupSize: {
    min: number;
    max: number;
  };
  bestTimeToVisit: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  departureDates: string[];
  testimonials: Array<{
    name: string;
    location: string;
    rating: number;
    review: string;
    avatar: string;
  }>;
  importantNotes: string[];
  cancellationPolicy: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const tourSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    daysCount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    mainImage: {
      type: String,
      required: true,
    },
    galleryImages: [String],
    category: {
      type: String,
      enum: ['leisure', 'mice'],
      required: true,
    },
    tags: [String],
    description: String,
    overview: String,
    highlights: [String],
    inclusions: [String],
    exclusions: [String],
    itinerary: [
      {
        day: Number,
        title: String,
        description: String,
        activities: [String],
        meals: {
          breakfast: Boolean,
          lunch: Boolean,
          dinner: Boolean,
        },
        accommodation: String,
      },
    ],
    priceBreakdown: mongoose.Schema.Types.Mixed,
    groupSize: {
      min: Number,
      max: Number,
    },
    bestTimeToVisit: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Challenging'],
    },
    departureDates: [String],
    testimonials: [
      {
        name: String,
        location: String,
        rating: Number,
        review: String,
        avatar: String,
      },
    ],
    importantNotes: [String],
    cancellationPolicy: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Tour = mongoose.models.Tour || mongoose.model<ITour>('Tour', tourSchema);