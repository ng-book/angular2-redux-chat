import { Action, Reducer, Store } from '@ngrx/store';

let initialState = {};

export const messages: Reducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
