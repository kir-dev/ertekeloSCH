import Leaderboard from '../components/Leaderboard';

export default async function Home() {
  return (
    <main className='flex h-full'>
      <div className='w-2/3 grid grid-cols-2'>
        <div>Tanszékek</div>
        <div>Profok</div>
        <div>Specek</div>
        <div>Tárgyak</div>
      </div>
      <div className='w-1/3'>
        <Leaderboard />
      </div>
    </main>
  );
}
