import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore: jsonwebtoken has no local declaration file
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends NextRequest {
  admin?: {
    id: string;
    email: string;
    role: string;
  };
}

export async function verifyAuth(request: NextRequest) {
  try {
    const token = request.cookies.get('adminToken')?.value;

    if (!token) {
      return {
        isValid: false,
        error: 'No token provided',
      };
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    return {
      isValid: true,
      admin: decoded,
    };
  } catch (error: any) {
    return {
      isValid: false,
      error: 'Invalid token',
    };
  }
}

export function withAuth(handler: (request: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (request: NextRequest) => {
    const auth = await verifyAuth(request);

    if (!auth.isValid) {
      return NextResponse.json(
        { error: auth.error },
        { status: 401 }
      );
    }

    // Create authenticated request
    const authRequest = request as AuthenticatedRequest;
    authRequest.admin = auth.admin;

    return handler(authRequest);
  };
}