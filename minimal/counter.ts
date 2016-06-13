/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { Action, Reducer, Store } from './store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Create our reducer that will handle changes to the state
const counterReducer: Reducer<any> =
  (state = initialState, action: Action) => {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
    }
  };

// Our initial state is just the number 0
var initialState: number = 0;

// Create a store that holds the reducer and the state
// Note that we'd normally inject this at the top of the app (so that the store
// can be shared across many components and not limited to this file), but we're
// just building up the idea right now.
const store: Store<number> = new Store(counterReducer, initialState);

@Component({
  selector: 'minimal-counter-app',
  directives: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <h3>Counter</h3>
            <p>Custom Store</p>

            <p>
              The counter value is:
              <b>{{counter$ | async}}</b>
            </p>

            <p>
              <button (click)="increment()"
                      class="btn btn-primary">Increment</button>
              <button (click)="decrement()"
                      class="btn btn-default" role="button">Decrement</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export default class MinimalCounterApp {
  counter$: Observable<number>;

  constructor() {
    // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/select.md
    this.counter$ = store.map<number>(currentState => currentState);
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }
}


require("./store");
