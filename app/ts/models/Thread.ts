import { Message } from './Message';

export interface Thread {
  id: string;
  name: string;
  avatarSrc: string;
  messages: Message[];
}
