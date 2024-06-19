'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Searchbar() {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  function onSubmit() {
    router.push(`/search?query=${query}`);
  }

  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button type='submit' variant='secondary' onSubmit={() => onSubmit()}>
        Search
      </Button>
    </div>
  );
}
