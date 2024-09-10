import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';

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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
