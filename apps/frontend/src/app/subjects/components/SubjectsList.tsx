import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Subject } from '@/lib/types';

export default function SubjectsList({ subjects }: { subjects: Subject[] }) {
  // TODO - Maybe we should fetch the ratings here?

  return (
    <ul>
      {subjects.map((subject) => (
        <Card key={subject.id}>
          <CardHeader>
            <CardTitle>{subject.name}</CardTitle>
            <CardDescription>{subject.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Show the average rating here.</p>
            <p>And a link for the recent ratings here maybe.</p>
          </CardContent>
        </Card>
      ))}
    </ul>
  );
}
