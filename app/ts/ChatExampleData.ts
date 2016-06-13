import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { uuid } from './util/uuid';
import * as moment from 'moment';
import {
  Thread,
  Message,
  User
} from './models';
import {
  ThreadActions,
  MessageActions
} from './actions';

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

export default function ChatExampleData(store: Store<AppState>) {
  const threadActions = new ThreadActions();
  const messageActions = new MessageActions();

  // create a new thread
  store.dispatch(threadActions.add(tLadycap));

  // store.dispatch(messageActions.sendMessageOnThread(tLadycap, {
  //   author: me,
  //   sentAt: moment().subtract(45, 'minutes').toDate(),
  //   text: 'Yet let me weep for such a feeling loss.',
  //   thread: tLadycap
  // }));
  // store.dispatch(messageActions.sendMessageOnThread(tLadycap, {
  //   author: ladycap,
  //   sentAt: moment().subtract(20, 'minutes').toDate(),
  //   text: 'So shall you feel the loss, but not the friend which you weep for.',
  //   thread: tLadycap
  // });

  // // add messages to that thread


}
