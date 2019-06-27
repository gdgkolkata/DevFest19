import { Session } from './speaker';

export interface Schedule {
  date: string;
  rooms: Room[];
  timeSlots: TimeSlot[];
}

export interface Room {
  id: string;
  name: string;
  sessions?: Session[];
  session?: Session;
  hasOnlyPlenumSessions?: boolean;
  index?: number;
}

export interface TimeSlot {
  slotStart: string;
  rooms: Room[];
}
