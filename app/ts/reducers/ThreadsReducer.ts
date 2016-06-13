import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import {
  Thread,
  Message
} from '../models';
import { ThreadActions } from '../actions';

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
