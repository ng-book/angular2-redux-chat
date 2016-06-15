/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { User } from '../models';
import { UserActions } from '../actions';

export interface UsersState {
  currentUser: User;
};

const initialState: UsersState = {
  currentUser: null
};

export const UsersReducer =
  function(state = initialState, action: Action): UsersState {
  switch (action.type) {
    case UserActions.SET_CURRENT: {
      const user: User = action.payload;
      return {
        currentUser: user
      }
    }
    default: {
      return state;
    }
  }
}

export function getCurrentUser() {
  return (state$: Observable<UsersState>) => state$
    .select(s => s.currentUser);
}
