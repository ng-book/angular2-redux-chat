import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  Thread,
  Message
} from '../models';

@Injectable()
export class ThreadActions {
  static ADD = '[Thread] Add';
  add(text: string): Action {
    return {
      type: ThreadActions.ADD,
      payload: text
    };
  }
}
