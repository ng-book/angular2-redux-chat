/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { uuid } from '../util/uuid';
import {
  User,
  Thread
} from '../models';

/**
 * ThreadActions specifies _action creators_ (i.e. objects that describe
 * changes to the reducers) that are concerned with Threads and Messages
 */
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
    thread?: Thread,
    author: User,
    text: string
  }): Action {
    const defaults = {
      id: uuid(),
      sentAt: new Date(),
      isRead: false,
      thread: thread
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

  static SELECT_THREAD = '[Thread] SELECT';
  select(thread: Thread): Action {
    return {
      type: ThreadActions.SELECT_THREAD,
      payload: thread
    };
  }

}
