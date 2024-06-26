import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default async function Leaderboard() {
  return (
    <div className='bg-primary-600 p-4 h-full'>
      <h2 className='text-white font-semibold text-xl'>Toplista</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <h3>Professzorok</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Tárgyak</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Tanszékek</h3>
          </CarouselItem>
          <CarouselItem>
            <h3>Specializációk</h3>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
