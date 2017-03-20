/**
 * A User represents an agent that sends messages
 */
export interface User {
  id: string;
  name: string;
  avatarSrc: string;
  isClient?: boolean;
}
