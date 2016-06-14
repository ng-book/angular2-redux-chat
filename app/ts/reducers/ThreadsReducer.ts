import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import {
  Thread,
  Message
} from '../models';
import { ThreadActions } from '../actions';
import { MessagesReducer } from './MessagesReducer';

export interface ThreadsState {
  ids: string[];
  entities: { [id: string]: Thread };
};

const initialState: ThreadsState = {
  ids: [],
  entities: {}
};

export const ThreadsReducer =
  function(state = initialState, action: Action): ThreadsState {
  switch (action.type) {
    case ThreadActions.ADD_THREAD: {
      const thread: Thread = action.payload;

      if (state.ids.includes(thread.id)) {
        return state;
      }

      return {
        ids: [ ...state.ids, thread.id ],
        entities: Object.assign({}, state.entities, {
          [thread.id]: thread
        })
      };
    }

    case ThreadActions.ADD_MESSAGE: {
      const thread: Thread = action.payload.thread;
      const message: Message = action.payload.message;

      const oldThread = state.entities[thread.id];
      const newThread = Object.assign({}, oldThread, {
        messages: [...oldThread.messages, message]
      });

      return {
        ids: state.ids,
        entities: Object.assign({}, state.entities, {
          [thread.id]: newThread
        })
      };
    }

    default: {
      return state;
    }
  }
}

export function getThreadsEntities() {
  return (state$: Observable<ThreadsState>) => state$
    .select(s => s.entities);
};

export function getAllThreads() {
  return (state$: Observable<ThreadsState>) => state$
    .let(getThreadsEntities())
    .map(entities => Object.keys(entities)
                           .map((threadId) => entities[threadId]));
}

export function getUnreadMessagesCount() {
  return (state$: Observable<ThreadsState>) => state$
    .let(getAllThreads())
    .map(threads => threads.reduce(
      (unreadCount: number, thread: Thread) => {
        thread.messages.forEach((message: Message) => {
          if(!message.isRead) {
            ++unreadCount;
          }
        })
        return unreadCount;
    }, 0));
}
