export interface Subject {
  id: number;
  name: string;
  desc: string;
  departmentId: number;
  specId: number;
}

export enum Title {
  PROF, // Professzor
  ASSOC_PROF, // Docens
  ASST_PROF, // Adjunktus
  LECTURER, // Óraadó
}

export interface Prof {
  id: number;
  name: string;
  title: Title;
  presentationRating: number;
  knowledgeRating: number;
  helpfulnessRating: number;
  pfp: string;
  departmentId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Department {
  id: number;
  name: string;
}

export interface SubjectRating {
  id: number;
  desc: string;
  isAnon: boolean;
  difficultyRating: number;
  interestRating: number;
  usefulnessRating: number;
  authorId: string;
  subjectId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfRating {
  id: number;
  desc: string;
  isAnon: boolean;
  presentationRating: number;
  knowledgeRating: number;
  helpfulnessRating: number;
  authorId: string;
  profId: number;
  subjectRatingId: number;
  subjectId: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Represents a simple rating for universal use.
 */
export interface SimpleRating {
  /**
   * The name of the subject of the rating.
   */
  name: string;

  /**
   * The rating value.
   */
  rating: number;
}
