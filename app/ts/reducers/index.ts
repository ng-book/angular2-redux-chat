
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import {
  UsersState,
  UsersReducer
} from './UsersReducer.ts';
import * as users from './UsersReducer.ts';

import {
  ThreadsState,
  ThreadsReducer
} from './ThreadsReducer.ts';
import * as threads from './ThreadsReducer.ts';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

export default compose(storeLogger(), combineReducers)({
  users: UsersReducer,
  threads: ThreadsReducer
});


/**
  * Selectors
  */

export function getThreadsState() {
  return (state$: Observable<AppState>) => state$
  .select(s => s.threads);
}

export function getThreadsEntities() {
  return compose(threads.getThreadsEntities(), getThreadsState());
}

export function getAllThreads() {
  return compose(threads.getAllThreads(), getThreadsState());
}

export function getUnreadMessagesCount() {
  return compose(threads.getUnreadMessagesCount(), getThreadsState());
}

export function getCurrentThread() {
  return compose(threads.getCurrentThread(), getThreadsState());
}

export function getUsersState() {
  return (state$: Observable<AppState>) => state$
  .select(s => s.users);
}

export function getCurrentUser() {
  return compose(users.getCurrentUser(), getUsersState());
}

export function getMessages() {
  return compose(threads.getMessages(), getThreadsState());
}
