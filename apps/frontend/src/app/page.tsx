import Link from 'next/link';

import { Card, CardTitle } from '@/components/ui/card';

import Leaderboard from '../components/Leaderboard';

export default async function Home() {
  return (
    <main className='flex h-full flex-1'>
      <div className='w-2/3 grid grid-cols-2 gap-4 p-4'>
        <OverviewCard title='Oktatók' href='/profs' />
        <OverviewCard title='Tárgyak' href='/subjects' />
        <OverviewCard title='Értékelések' href='/ratings' />
        <OverviewCard title='Tanszékek' href='/departments' />
      </div>
      <Leaderboard />
    </main>
  );
}

function OverviewCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <Card className='p-2 h-full'>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </Card>
    </Link>
  );
}
