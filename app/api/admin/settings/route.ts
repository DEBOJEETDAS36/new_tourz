import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Settings } from '@/lib/models/Settings';
import { verifyAuth } from '@/lib/authMiddleware';

export async function GET(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    let settings = await Settings.findOne({});

    // If no settings exist, create default ones
    if (!settings) {
      settings = new Settings({
        siteName: 'Tourz',
        tagline: 'Explore the World with Us',
        currency: 'INR',
        defaultLanguage: 'en',
      });
      await settings.save();
    }

    return NextResponse.json({ settings }, { status: 200 });
  } catch (error: any) {
    console.error('Get settings error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const updateData = await request.json();

    let settings = await Settings.findOne({});

    if (!settings) {
      settings = new Settings(updateData);
    } else {
      Object.assign(settings, updateData);
    }

    await settings.save();

    return NextResponse.json(
      { message: 'Settings updated successfully', settings },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update settings error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update settings' },
      { status: 500 }
    );
  }
}