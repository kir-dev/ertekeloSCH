'use server';

import { axios } from '@/lib/axios';
import { Subject } from '@/lib/types';

/**
 * Fetches the list of subjects.
 */
export async function fetchSubjects(): Promise<Subject[]> {
  try {
    const res = await axios.get<Subject[]>('/subjects');
    return res.data ?? [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

/**
 * Fetches the list of subjects that match the given search query.
 *
 * @param query The search query to match subjects against.
 */
export async function searchSubjects(query: string): Promise<Subject[]> {
  try {
    const res = await axios.get<Subject[]>(`/subjects/search?query=${query}`);
    return res.data ?? [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

// TODO - This might have to return the SubjectRatings as well
/**
 * Fetches a single subject by ID.
 *
 * @param id The ID of the subject to fetch.
 * @returns The subject with the given ID.
 */
export async function fetchSubject(id: string): Promise<Subject | undefined> {
  try {
    const res = await axios.get<Subject>(`/subjects/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
