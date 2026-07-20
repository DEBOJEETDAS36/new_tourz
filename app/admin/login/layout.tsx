import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Tourz',
  description: 'Admin dashboard for managing tours and bookings',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}