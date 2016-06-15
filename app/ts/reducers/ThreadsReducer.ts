import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctKey';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import {
  Thread,
  Message
} from '../models';
import { ThreadActions } from '../actions';

export interface ThreadsState {
  ids: string[];
  currentThreadId?: string;
  entities: { [id: string]: Thread };
};

const initialState: ThreadsState = {
  ids: [],
  currentThreadId: null,
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
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.id]: thread
        })
      };
    }

    case ThreadActions.ADD_MESSAGE: {
      const thread: Thread = action.payload.thread;
      const message: Message = action.payload.message;

      // special case: if the message being added is in the current thread, then
      // mark it as read
      const isRead = message.thread.id === state.currentThreadId ?
                      true : message.isRead;
      const newMessage = Object.assign({}, message, { isRead: isRead });

      const oldThread = state.entities[thread.id];
      const newThread = Object.assign({}, oldThread, {
        messages: [...oldThread.messages, newMessage]
      });

      return {
        ids: state.ids,
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.id]: newThread
        })
      };
    }

    case ThreadActions.SELECT_THREAD: {
      const thread: Thread = action.payload;
      const oldThread = state.entities[thread.id];

      // mark the messages as read
      const newMessages = oldThread.messages.map(
        (message) => Object.assign({}, message, { isRead: true }));

      // give them to this new thread
      const newThread = Object.assign({}, oldThread, {
        messages: newMessages
      });

      return {
        ids: state.ids,
        currentThreadId: thread.id,
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

export function getThread(id: string) {
  return (state$: Observable<ThreadsState>) => state$
    .select(s => s.entities[id]);
}

export function getCurrentThread() {
  return (state$: Observable<ThreadsState>) => state$
    .select(s => s.entities[s.currentThreadId]);
}

export function getMessages() {
  return (state$: Observable<ThreadsState>) => state$
    .let(getAllThreads())
    .select(threads => threads.reduce( // gather all messages
      (messages, thread) => [...messages, ...thread.messages],
      []).sort((m1, m2) => m1.sentAt - m2.sentAt)) // sort them by time
    .flatMap(message => message) // emit once each message
    .distinctKey('id'); // and distinct on id (memory leak!, yolo)
}
