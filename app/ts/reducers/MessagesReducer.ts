import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Message } from '../models';
import { MessageActions } from '../actions';

export interface MessagesState {
  ids: string[];
  entities: { [id: string]: Message };
};

const initialState: MessagesState = {
  ids: [],
  entities: {}
};

export default function(state = initialState, action: Action): MessagesState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
