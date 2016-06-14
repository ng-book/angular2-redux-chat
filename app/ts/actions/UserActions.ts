import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  User
} from '../models';

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
