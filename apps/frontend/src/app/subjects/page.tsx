import { Suspense } from 'react';

import Searchbar from '@/components/Searchbar';

import SubjectsList from './components/SubjectsList';

export default async function SubjectsPage({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';

  return (
    <main className='dark:bg-slate-700 min-h-full p-4'>
      <div>
        <h1 className='text-2xl font-semibold text-black dark:text-white mb-8'>Tárgyak</h1>
        <Searchbar placeholder='Keress oktatókat' />
      </div>
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <SubjectsList query={query} />
      </Suspense>
    </main>
  );
}
