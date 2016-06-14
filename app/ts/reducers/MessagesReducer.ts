import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Message } from '../models';
import {
  MessageActions,
  ThreadActions
} from '../actions';

export interface MessagesState {
  ids: string[];
  entities: { [id: string]: Message };
};

const initialState: MessagesState = {
  ids: [],
  entities: {}
};

export const MessagesReducer =
  function(state = initialState, action: Action): MessagesState {
  switch (action.type) {

    // Notice that we're handling this _ThreadAction_ here
    case ThreadActions.ADD_MESSAGE: {
      const thread: Thread = action.payload.thread;
      const message: Message = action.payload.message;

      const oldThread = state.entities[thread.id];
      const newThread = Object.assign({}, oldThread, {
        messages: [...oldThread.messages, message]
      });

      return {
        ids: state.ids,
        currentThreadId: state.currentThreadId,
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

export function getMessageEntities() {
  return (state$: Observable<MessagesState>) => state$
    .select(s => s.entities);
};
