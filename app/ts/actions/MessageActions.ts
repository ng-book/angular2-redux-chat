import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Message } from '../models';

@Injectable()
export class MessageActions {
  static ADD = '[Message] Add';
  add(text: string): Action {
    return {
      type: MessageActions.ADD,
      payload: text
    };
  }
}
