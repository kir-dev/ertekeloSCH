import { SimpleRating } from '@/lib/types';

import { Card } from './ui/card';

type LeaderboardItemProps = {
  title: string;
  ratings: SimpleRating[];
};

export default function LeaderboardItem({ title, ratings }: LeaderboardItemProps) {
  return (
    <Card className='bg-primary-700 p-3'>
      <h2 className='text-white font-semibold text-lg'>{title}</h2>
      <div className='mt-4'>
        {ratings.map((rating, index) => (
          <LeaderboardItemRow key={rating.name} rating={rating} placement={index + 1} />
        ))}
      </div>
    </Card>
  );
}

function LeaderboardItemRow({ rating, placement }: { rating: SimpleRating; placement: number }) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-white'>{placement}. hely</p>
      <p className='text-white'>{rating.name}</p>
      <p className='text-white'>{rating.rating} pont</p>
    </div>
  );
}
