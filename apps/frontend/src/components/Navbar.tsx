'use client';

import Link from 'next/link';

import Avatar from './Avatar';

export default function Navbar() {
  return (
    <nav className='p-4 flex justify-between bg-primary'>
      <Link href='/' className='content-center'>
        <h1 className='text-2xl text-white font-semibold'>ÉrtékelőSCH</h1>
      </Link>
      <Avatar />
    </nav>
  );
}
