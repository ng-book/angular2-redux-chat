import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
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
}
