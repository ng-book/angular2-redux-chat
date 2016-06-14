import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { uuid } from '../util/uuid';
import {
  User,
  Thread,
  Message
} from '../models';

@Injectable()
export class ThreadActions {
  static ADD_THREAD = '[Thread] Add';
  add(thread: Thread): Action {
    return {
      type: ThreadActions.ADD_THREAD,
      payload: thread
    };
  }

  static ADD_MESSAGE = '[Thread] Add Message';
  addMessage(thread: Thread, messageArgs: {
    id?: string,
    sentAt?: Date,
    isRead?: boolean,
    author: User,
    text: string
  }): Action {
    const defaults = {
      id: uuid(),
      sentAt: new Date(),
      isRead: false
    };
    const message = Object.assign({}, defaults, messageArgs);

    return {
      type: ThreadActions.ADD_MESSAGE,
      payload: {
        thread: thread,
        message: message
      }
    };
  }
}
