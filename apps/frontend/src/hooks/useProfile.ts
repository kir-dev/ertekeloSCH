import useSwr from 'swr';

import { authorizedAxios } from '@/lib/axios';
import { Profile } from '@/lib/types';

export default function useProfile() {
  return useSwr<Profile>('/auth/me', fetcher);
}
const fetcher = async () => {
  try {
    const res = await authorizedAxios.get('/auth/me');
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
