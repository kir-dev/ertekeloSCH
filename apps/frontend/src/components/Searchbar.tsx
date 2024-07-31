'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from './ui/button';
import { Input } from './ui/input';

interface SearchbarProps {
  placeholder: string;
}

/**
 * Searchbar component.
 * On clicking the search button, it will update the query parameter in the URL.
 */
export default function Searchbar({ placeholder }: SearchbarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState<string>('');

  function handleSearch(query: string) {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input type='text' placeholder={placeholder} value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button type='submit' variant='default' onClick={() => handleSearch(query)}>
        Keresés
      </Button>
    </div>
  );
}
