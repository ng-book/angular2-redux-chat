import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { uuid } from './util/uuid';
import {
  Thread,
  Message,
  User
} from './models';

// the person using the app is Juliet
const me: User = {
  id: uuid(),
  name: 'Juliet',
  avatarSrc: require('images/avatars/female-avatar-1.png')
};

const ladycap: User = {
  id: uuid(),
  name: 'Lady Capulet',
  avatarSrc: require('images/avatars/female-avatar-2.png')
};

// let echo: User    = new User('Echo Bot', require('images/avatars/male-avatar-1.png'));
// let rev: User     = new User('Reverse Bot', require('images/avatars/female-avatar-4.png'));
// let wait: User    = new User('Waiting Bot', require('images/avatars/male-avatar-2.png'));

let tLadycap: Thread = {
  id: 'tLadycap',
  name: ladycap.name,
  avatarSrc: ladycap.avatarSrc
};

// let tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
// let tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
// let tWait: Thread    = new Thread('tWait', wait.name, wait.avatarSrc);
//
export default function ChatExampleData(store: Store<AppState>) {

}
