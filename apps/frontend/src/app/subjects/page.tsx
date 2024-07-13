import { Suspense } from 'react';

import SubjectsList from './components/SubjectsList';

export default async function SubjectsPage() {
  return (
    <main className='dark:bg-slate-700 min-h-full p-4'>
      <h1 className='text-2xl font-semibold text-black dark:text-white mb-8'>Tárgyak</h1>
      <Suspense fallback={<p className='text-black'>Loading...</p>}>
        <SubjectsList />
      </Suspense>
    </main>
  );
}
