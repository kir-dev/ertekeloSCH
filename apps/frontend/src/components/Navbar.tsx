'use client';

import Link from 'next/link';

import Avatar from './Avatar';
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
    <nav className='p-4 flex justify-between'>
      <Link href='/'>
        <h1>ÉrtékelőSCH</h1>
      </Link>
      <Searchbar />
      <Avatar />
    </nav>
  );
}
