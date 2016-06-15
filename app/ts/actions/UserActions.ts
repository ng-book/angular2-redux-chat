/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  User
} from '../models';

/**
 * UserActions specifies action creators concerning Users
 */
@Injectable()
export class UserActions {
  static SET_CURRENT = '[User] SET_CURRENT';
  setCurrent(user: User): Action {
    return {
      type: UserActions.SET_CURRENT,
      payload: user
    };
  }

}
