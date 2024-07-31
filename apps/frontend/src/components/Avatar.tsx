import { setCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useProfile from '@/hooks/useProfile';
import { BACKEND_URL } from '@/lib/constants';

import loggedInPfpf from '../../public/loginPfp.png';
import placeholderProfilePic from '../../public/profile_avatar_placeholder_large.png';

export default function Avatar() {
  const router = useRouter();
  // TODO - Add logic to show the user's avatar here if they are logged in

  // Maybe we could use shadcn's Avatar component here

  const profileData = useProfile();
  if (profileData.isLoading) {
    <Image
      src={placeholderProfilePic}
      alt='Profile picture'
      width={40}
      height={40}
      className='border border-black dark:border-white rounded-md hover:cursor-pointer'
    />;
  }
  if (!profileData.data) {
    return (
      <Link href={`${BACKEND_URL}/auth/login`}>
        <Image
          src={placeholderProfilePic}
          alt='Profile picture'
          width={40}
          height={40}
          className='border border-black dark:border-white rounded-md hover:cursor-pointer'
        />
      </Link>
    );
  }

  return (
    <Image
      onClick={() => {
        setCookie('jwt', '', { expires: new Date(0), path: '/' });
        router.refresh();
      }}
      src={loggedInPfpf}
      alt='Profile picture'
      width={40}
      height={40}
      className='border border-black dark:border-white rounded-md hover:cursor-pointer'
    />
  );
}
