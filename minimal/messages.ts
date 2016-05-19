/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import {
  Component
} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { provideStore } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { List, Map, Record, fromJS } from 'immutable';
import { Action, Reducer, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// model
export const MessageRecord = Record({
  id: null,
  sentAt: null,
  isRead: null,
  text: null
});

export interface IMessage {
  id: string;
  sentAt: Date;
  isRead: boolean;
  text: string;
}

export interface IMessages extends Map<String, any> {
  entities: {messages: Map<Number, IMessage>};
}

@Injectable()
export class Messages {
  private actions$ = new BehaviorSubject<Action>({type: null, payload: null});
  constructor(private _store: Store<any>) {
  }
}

// reducer
var initialMessagesState: IMessages = fromJS({
  entities: {
    messages: {}
  }
});

export const messagesReducer: Reducer<any> = (state = initialMessagesState, 
                                              action: Action) => {
  switch (action.type) {
  }
};
