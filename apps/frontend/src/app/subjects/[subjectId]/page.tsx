import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
        <Card className='p-4 flex flex-col items-center'>
          <h2 className='font-semibold text-xl mb-2'>Értékelés</h2>
          <div className='w-full flex justify-around'>
            <p>Nehézség: {subject.difficultyRating}</p>
            <p>Hasznosság: {subject.usefulnessRating}</p>
            <p>Érdekesség: {subject.interestRating}</p>
          </div>
        </Card>
        <Card className='p-4 mt-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-xl mb-2'>Ertékelések</h2>
            <Button variant='default' className='mb-4' asChild>
              <Link href={`/subjects/${subject.id}/new-rating`}>Új értékelés</Link>
            </Button>
          </div>
          {subject.ratings.length === 0 ? (
            <p>Még nincsenek értékelések.</p>
          ) : (
            <ul>
              {subject.ratings.map((ratings) => (
                <li key={ratings.id} className='text-blue-500 hover:underline'>
                  {ratings.createdAt.toISOString()}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </main>
  );
}
