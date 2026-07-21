import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Tour } from '@/lib/models/Tour';
import { verifyAuth } from '@/lib/authMiddleware';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;

    const tour = await Tour.findOne({ id });

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    return NextResponse.json({ tour }, { status: 200 });
  } catch (error: any) {
    console.error('Get tour error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch tour' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const updateData = await request.json();

    const tour = await Tour.findOneAndUpdate({ id }, updateData, {
      new: true,
      runValidators: true,
    });

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Tour updated successfully', tour },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update tour error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update tour' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;

    const tour = await Tour.findOneAndDelete({ id });

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Tour deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete tour error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete tour' },
      { status: 500 }
    );
  }
}