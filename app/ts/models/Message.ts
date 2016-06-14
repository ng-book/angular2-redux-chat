import { User } from './User';

export interface Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
}
