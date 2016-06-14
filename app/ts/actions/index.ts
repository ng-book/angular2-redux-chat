import { MessageActions } from './MessageActions';
import { ThreadActions } from './ThreadActions';
import { UserActions } from './UserActions';

// export here for object imports
export {
  MessageActions,
  ThreadActions,
  UserActions
};

// export here for injecting the dependencies (e.g. at bootstrap)
export default [
  MessageActions,
  ThreadActions,
  UserActions
];
