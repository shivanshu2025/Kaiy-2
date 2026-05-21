import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaiyo Admin Panel',
  description: 'Dashboard and login for the admin panel.',
};

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
