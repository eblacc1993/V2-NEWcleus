import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEWCLEUS Phase 9',
  description: 'V2 Official operating system starter app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
