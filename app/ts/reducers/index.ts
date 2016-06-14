
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import {
  MessagesState,
  MessagesReducer
} from './MessagesReducer.ts';

import {
  ThreadsState,
  ThreadsReducer
} from './ThreadsReducer.ts';
import * as threads from './ThreadsReducer.ts';

export interface AppState {
  messages: MessagesState;
  threads: ThreadsState;
}

export default compose(storeLogger(), combineReducers)({
  messages: MessagesReducer,
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
