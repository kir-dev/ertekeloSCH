import { fetchSubjects } from './actions';
import SubjectsList from './components/SubjectsList';

export default async function SubjectsPage() {
  const subjects = await fetchSubjects();

  return (
    <main>
      <h1>Subjects</h1>
      <SubjectsList subjects={subjects} />
    </main>
  );
}
