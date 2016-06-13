/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import {
  Component,
  Injectable
} from '@angular/core';

import { provideStore } from '@ngrx/store';
import { List, Map, Record, fromJS } from 'immutable';
import { Action, Reducer, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// model
// export const MessageRecord = Record({
//   id: null,
//   sentAt: null,
//   isRead: null,
//   text: null
// });

// export interface IMessage {
//   id: string;
//   sentAt: Date;
//   isRead: boolean;
//   text: string;
// }

// @Injectable()
// export class Messages {
//   private actions$ = new BehaviorSubject<Action>({type: null, payload: null});
//   constructor(private _store: Store<any>) {
//   }
// }

// return new Store<any>(dispatcher, backend, initialState);

// reducer
var initialState: number = 0;

export const counterReducer: Reducer<any> = 
  (state = initialState, action: Action) => {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
    }
  };

@Component({
  selector: 'minimal-counter-app',
  providers: [provideStore({counter: counterReducer})],
  directives: [],
  template: `
  <div>
    Heres the counter
  </div>
  `
})
export default class MinimalCounterApp {
  constructor() {
  }
}

