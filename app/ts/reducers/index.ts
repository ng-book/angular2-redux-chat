
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store'

import {
  MessagesState,
  MessagesReducer
} from './MessagesReducer.ts';

import {
  ThreadsState,
  ThreadsReducer
} from './ThreadsReducer.ts';

export interface AppState {
  messages: MessagesState;
  threads: ThreadsState;
}

export default compose(storeLogger(), combineReducers)({
  messages: MessagesReducer,
  threads: ThreadsReducer
});
