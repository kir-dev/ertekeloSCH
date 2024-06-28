import LeaderboardItem from './LeaderboardItem';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default async function Leaderboard() {
  return (
    <div className='bg-primary-600 p-4 h-full flex flex-col items-center'>
      <h2 className='text-white font-semibold text-xl'>Toplista</h2>
      <Carousel className='w-full max-w-xs mt-10'>
        <CarouselContent>
          <CarouselItem>
            <LeaderboardItem title='Professzorok' ratings={[{ name: 'Kovács Béla', rating: 100 }]} />
          </CarouselItem>
          <CarouselItem>
            <LeaderboardItem title='Tárgyak' ratings={[{ name: 'Kovács Béla', rating: 100 }]} />
          </CarouselItem>
          <CarouselItem>
            <LeaderboardItem title='Tanszékek' ratings={[{ name: 'Kovács Béla', rating: 100 }]} />
          </CarouselItem>
          <CarouselItem>
            <LeaderboardItem title='Specializációk' ratings={[{ name: 'Kovács Béla', rating: 100 }]} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='bg-primary' />
        <CarouselNext className='bg-primary' />
      </Carousel>
    </div>
  );
}
