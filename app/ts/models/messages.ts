// import { Observable } from 'rxjs/Observable';
// import { ApiService } from '../services/api';

// export const LOADING_USERS = 'LOADING_USERS';
// export const LOADED_USERS = 'LOADED_USERS';
// export const LOADING_USER = 'LOADING_USER';
// export const LOADED_USER = 'LOADED_USER';
// export const ADDING_USER = 'ADDING_USER';
// export const ADDED_USER = 'ADDED_USER';
// export const DELETING_USER = 'DELETING_USER';
// export const DELETED_USER = 'DELETED_USER';
// export const PATCHED_USER = 'PATCHED_USER';

// const PATCH_USER = 'PATCH_USER';
// const DELETE_USER = 'DELETE_USER';
// const ADD_USER = 'ADD_USER';
// const LOAD_USER = 'LOAD_USER';
// const LOAD_USERS = 'LOAD_USERS';

import { Injectable } from '@angular/core';
import { normalize, arrayOf, Schema } from 'normalizr';
import { List, Map, Record, fromJS } from 'immutable';
import { Action, Reducer, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const messageSchema = new Schema('message');
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
  // author: User;
  // thread: Thread;
}

// export interface IMessages extends Map<String, any> {
//   result: List<Number>;
//   entities: {users: Map<Number, IUser>};
//   adding: boolean;
//   loading: boolean;
// }

@Injectable()
export class Messages {
  private actions$ = new BehaviorSubject<Action>({type: null, payload: null});

  constructor(private _store: Store<any>) {
  }
}
