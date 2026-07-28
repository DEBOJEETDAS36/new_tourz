import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    // General Settings
    siteName: {
      type: String,
      default: 'Tourz',
    },
    tagline: {
      type: String,
      default: 'Explore the World with Us',
    },
    description: String,
    logo: String,
    favicon: String,

    // Contact Information
    email: String,
    phone: String,
    address: String,
    city: String,
    country: String,
    zipCode: String,

    // Social Media
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
    linkedin: String,

    // SEO Settings
    metaDescription: String,
    metaKeywords: [String],
    googleAnalyticsId: String,

    // Email Configuration
    smtpHost: String,
    smtpPort: Number,
    smtpEmail: String,
    smtpPassword: String,

    // Payment Gateway
    stripePublicKey: String,
    razorpayKeyId: String,

    // About Us
    aboutUsTitle: String,
    aboutUsDescription: String,
    aboutUsImage: String,

    // Maintenance Mode
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
    maintenanceMessage: String,

    // Currency and Language
    currency: {
      type: String,
      default: 'INR',
    },
    defaultLanguage: {
      type: String,
      default: 'en',
    },
  },
  { timestamps: true }
);

export const Settings =
  mongoose.models.Settings || mongoose.model('Settings', settingsSchema);