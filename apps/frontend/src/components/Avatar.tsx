import Image from 'next/image';
import { useRouter } from 'next/navigation';

import placeholderProfilePic from '../../public/profile_avatar_placeholder_large.png';

export default function Avatar() {
  const router = useRouter();
  // TODO - Add logic to show the user's avatar here if they are logged in

  // Maybe we could use shadcn's Avatar component here

  const loggedIn = false;

  if (!loggedIn) {
    return (
      <Image
        onClick={() => router.push('/login')}
        src={placeholderProfilePic}
        alt='Profile picture'
        width={40}
        height={40}
        className='border border-black dark:border-white rounded-md hover:cursor-pointer'
      />
    );
  }

  return (
    <Image
      onClick={() => router.push('/profile')}
      src={placeholderProfilePic}
      alt='Profile picture'
      width={40}
      height={40}
      className='border border-black dark:border-white rounded-md hover:cursor-pointer'
    />
  );
}
