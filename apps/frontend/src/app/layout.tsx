import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ÉrtékelőSCH',
  description: 'Értékeld a BME VIK tanárait és tárgyait!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hu'>
      <body className={`${inter.className} min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
