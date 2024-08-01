import { setCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';

import useProfile from '@/hooks/useProfile';
import { BACKEND_URL } from '@/lib/constants';

import loggedInPfpf from '../../public/loginPfp.png';
import placeholderProfilePic from '../../public/profile_avatar_placeholder_large.png';

export default function Avatar() {
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
  if (!profileData.data || profileData.error) {
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
        profileData.mutate();
        // router.refresh();
      }}
      src={loggedInPfpf}
      alt='Profile picture'
      width={40}
      height={40}
      className='border border-black dark:border-white rounded-md hover:cursor-pointer'
    />
  );
}
