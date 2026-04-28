import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Litigation Command Center',
  description: 'Operations, communications, tickets, tasks, schedules, and billing for litigation teams.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
