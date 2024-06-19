import Image from 'next/image';

export default function Avatar() {
  // TODO - Add logic to show the user's avatar here if they are logged in
  const loggedIn = false;
  const user = {
    pfp: 'https://www.link-to-your-avatar.com/avatar.png',
  };

  if (!loggedIn) {
    return <Image src='/avatar-placeholder.png' alt='Profile picture' width={40} height={40} />;
  }

  return <Image src={user.pfp} alt='Profile picture' width={30} height={40} />;
}
