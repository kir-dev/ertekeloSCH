import { notFound } from 'next/navigation';

import SubjectRatingForm from '@/components/subjects/subject-rating-form';
import { fetchSubject } from '@/lib/actions/subjects';

export default async function NewRatingPage({ params }: { params: { subjectId: string } }) {
  const subject = await fetchSubject(params.subjectId);
  if (!subject) {
    return notFound();
  }

  return (
    <main className='dark:bg-slate-700 min-h-full p-4'>
      <SubjectRatingForm subjectName={subject?.name} />
    </main>
  );
}
