import { notFound } from 'next/navigation';

import { fetchSubject } from '@/lib/actions/subjects';

export default async function SubjectDetailsPage({ params }: { params: { subjectId: string } }) {
  const subject = await fetchSubject(params.subjectId);

  if (!subject) {
    notFound();
  }

  return (
    <main className='dark:bg-slate-700 min-h-full p-4'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold text-black dark:text-white mb-8'>{subject.name}</h1>
        <p className='text-lg text-gray-600 dark:text-gray-400'>{subject.desc}</p>
      </div>
    </main>
  );
}
