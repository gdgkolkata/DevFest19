export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  bioTruncated?: string;
  tagLine: string;
  profilePicture: string;
  sessions: SessionRef[];
  isTopSpeaker: boolean;
  links: Link[];
  questionAnswers: any[];
  categories: any[];
}
export interface SpeakerRef {
  id: string;
  name: string;
}

export interface Link {
  title: string;
  url: string;
  linkType: string;
}

export interface Session {
  id: string;
  name?: string;
  title?: string;
  description?: string;
  startsAt?: string;
  endsAt?: string;
  isServiceSession?: boolean;
  isPlenumSession?: boolean;
  speakers?: SpeakerRef[];
  categories?: Category[];
  roomId?: string;
  room?: string;
}

export interface SessionRef {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
}

export interface CategoryItem {
  id: string;
  name: string;
}
