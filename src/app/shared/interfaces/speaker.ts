export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  bioTruncated?: string;
  tagLine: string;
  profilePicture: string;
  sessions: Session[];
  isTopSpeaker: boolean;
  links: Link[];
  questionAnswers: any[];
  categories: any[];
}

export interface Link {
  title: string;
  url: string;
  linkType: string;
}

export interface Session {
  id: number;
  name: string;
}
