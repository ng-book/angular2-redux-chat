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
    default: {
      return state;
    }
  }
}
