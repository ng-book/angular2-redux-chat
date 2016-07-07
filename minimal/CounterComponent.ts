/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
  Component
} from '@angular/core';

@Component({
  selector: 'counter-component',
  directives: [],
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
export default class CounterComponent {
  // counter$: Observable<number>;

  // constructor() {
  //   // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/select.md
  //   this.counter$ = store.map<number>(currentState => currentState);
  // }

  // increment() {
  //   store.dispatch({ type: 'INCREMENT' });
  // }

  // decrement() {
  //   store.dispatch({ type: 'DECREMENT' });
  // }
}
