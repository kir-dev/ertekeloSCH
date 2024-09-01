import { Suspense } from 'react';

import Searchbar from '@/components/Searchbar';
import SubjectsList from '@/components/subjects/SubjectsList';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default async function SubjectsPage({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';

  return (
    <main className='dark:bg-slate-700 min-h-full p-4'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold text-black dark:text-white mb-8'>Tárgyak</h1>
        <Searchbar placeholder='Keress oktatókat' />
      </div>
      <Suspense key={query} fallback={<LoadingSpinner />}>
        <SubjectsList query={query} />
      </Suspense>
    </main>
  );
}
