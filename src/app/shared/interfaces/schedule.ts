export interface Schedule {
  date: string;
  rooms: SessionRoom[];
  timeSlots: TimeSlot[];
}

export interface SessionRoom {
  id: number;
  name: string;
  sessions: SessionElement[];
  hasOnlyPlenumSessions: boolean;
}

export interface SessionElement {
  id: string;
  title: string;
  description: null | string;
  descriptionTruncated?: string;
  startsAt: string;
  endsAt: string;
  duration?: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Speaker[];
  categories: Category[];
  roomId: number;
  room: string;
}

export interface Category {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface Speaker {
  id: string;
  name: string;
}

export interface TimeSlot {
  slotStart: string;
  rooms: TimeSlotRoom[];
}

export interface TimeSlotRoom {
  id: number;
  name: string;
  session: SessionElement;
  index: number;
}
