import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { fetchSubjects } from '../actions';

export default async function SubjectsList() {
  const subjects = await fetchSubjects();

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
