'use server';

import axios from 'axios';

import { BACKEND_URL } from '@/lib/constants';
import { Subject } from '@/lib/types';

// TODO - Configure axios to have BACKEND_URL as the base URL.

/**
 * Fetches the list of subjects.
 */
export async function fetchSubjects(): Promise<Subject[]> {
  try {
    const res = await axios.get<Subject[]>(`${BACKEND_URL}/subjects`);
    return res.data ?? [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

// TODO - Implement searching for subjects by name.

// TODO - This might have to return the SubjectRatings as well
/**
 * Fetches a single subject by ID.
 *
 * @param id The ID of the subject to fetch.
 * @returns The subject with the given ID.
 */
export async function fetchSubject(id: string): Promise<Subject | undefined> {
  try {
    const res = await axios.get<Subject>(`${BACKEND_URL}/subjects/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
