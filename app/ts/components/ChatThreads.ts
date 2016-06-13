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
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  Thread
} from '../models';
import {
  AppState,
  getThreadsEntities
} from '../reducers';

@Component({
  selector: 'chat-threads',
  template: `
  <!-- conversations -->
  <div class="row">
    <div class="conversation-wrap">

      <div
           *ngFor="let thread of threads$ | async"
           >
           hi
      </div>

    </div>
  </div>
  `
})

// TODO - this should be a container and the Thread can be a component
export default class ChatThreads {
  threads$: Observable<{ [id: string]: Thread }>

  constructor(private store: Store<AppState>) {
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
    this.threads$ = store.let(getThreadsEntities());
  }
}
