import useSwr from 'swr';

import { authorizedAxios } from '@/lib/axios';
import { Profile } from '@/lib/types';

export default function useProfile() {
  return useSwr<Profile>('/auth/me', fetcher);
}
const fetcher = async () => {
  const res = await authorizedAxios.get('/auth/me');

  if (res.status === 401) {
    throw new Error('Unauthorized');
  }

  return res.data;
};
