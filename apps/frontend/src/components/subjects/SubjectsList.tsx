import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchSubjects, searchSubjects } from '@/lib/actions/subjects';
import { Subject } from '@/lib/types';

interface SubjectListProps {
  query: string;
}

export default async function SubjectsList({ query }: SubjectListProps) {
  let subjects: Subject[] = [];
  if (query === '') {
    subjects = await fetchSubjects();
  } else {
    subjects = await searchSubjects(query);
  }

  return (
    <ul className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
      {subjects.map((subject) => (
        <Card key={subject.id}>
          <CardHeader>
            <CardTitle className='text-lg'>{subject.name}</CardTitle>
            {/*<CardDescription>{subject.desc}</CardDescription>*/}
          </CardHeader>
          <CardContent className='w-full'>
            <div className='flex justify-between w-full'>
              <p>
                <span className='font-semibold'>Nehézség:</span>{' '}
                {subject.difficultyRating === 0 ? '-' : subject.difficultyRating}
              </p>
              <p>
                <span className='font-semibold'>Érdekesség:</span>{' '}
                {subject.interestRating === 0 ? '-' : subject.interestRating}
              </p>
              <p>
                <span className='font-semibold'>Hasznosság:</span>{' '}
                {subject.usefulnessRating === 0 ? '-' : subject.usefulnessRating}
              </p>
            </div>
            <p className='mt-2'>Legutóbbi értékelések: </p>
          </CardContent>
        </Card>
      ))}
    </ul>
  );
}
