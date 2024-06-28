import Link from 'next/link';

import { Card, CardTitle } from '@/components/ui/card';

import Leaderboard from '../components/Leaderboard';

export default async function Home() {
  return (
    <main className='flex h-full'>
      <div className='w-2/3 grid grid-cols-2 gap-4 p-4'>
        <Card className='p-2'>
          <CardTitle className='text-lg'>Professzorok</CardTitle>
        </Card>
        <Card className='p-2'>
          <CardTitle className='text-lg'>
            <Link href='/subjects'>Tárgyak</Link>
          </CardTitle>
        </Card>
        <Card className='p-2'>
          <CardTitle className='text-lg'>Specializációk</CardTitle>
        </Card>
        <Card className='p-2'>
          <CardTitle className='text-lg'>Tanszékek</CardTitle>
        </Card>
      </div>
      <div className='w-1/3 h-full'>
        <Leaderboard />
      </div>
    </main>
  );
}
