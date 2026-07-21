import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Tour } from '@/lib/models/Tour';
import { verifyAuth } from '@/lib/authMiddleware';

export async function GET(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { destination: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    const tours = await Tour.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Tour.countDocuments(query);

    return NextResponse.json(
      {
        tours,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Get tours error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const tourData = await request.json();

    // Validate required fields
    if (!tourData.id || !tourData.title || !tourData.destination || !tourData.price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if tour already exists
    const existingTour = await Tour.findOne({ id: tourData.id });
    if (existingTour) {
      return NextResponse.json(
        { error: 'Tour with this ID already exists' },
        { status: 400 }
      );
    }

    const tour = new Tour(tourData);
    await tour.save();

    return NextResponse.json(
      { message: 'Tour created successfully', tour },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create tour error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create tour' },
      { status: 500 }
    );
  }
}