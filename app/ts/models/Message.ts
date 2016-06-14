import { User } from './User';
import { Thread } from './Thread';

export interface Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  thread: Thread;
}
