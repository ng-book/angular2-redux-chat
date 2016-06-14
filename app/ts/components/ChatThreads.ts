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
  ThreadActions
} from '../actions';
import {
  AppState,
  getCurrentThread,
  getAllThreads
} from '../reducers';
import ChatThread from '../components/ChatThread';

@Component({
  selector: 'chat-threads',
  directives: [ChatThread],
  template: `
  <!-- conversations -->
  <div class="row">
    <div class="conversation-wrap">
      <chat-thread
           *ngFor="let thread of threads$ | async"
           [thread]="thread"
           [selected]="thread.id === currentThreadId"
           (onThreadSelected)="handleThreadClicked($event)"
           >
      </chat-thread>
    </div>
  </div>
  `
})

// TODO - this should be a container and the Thread can be a component
export default class ChatThreads {
  threads$: Observable<Thread[]>
  currentThreadId: string;

  constructor(private store: Store<AppState>,
              private threadActions: ThreadActions) {
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
    this.threads$ = this.store.let(getAllThreads());
    this.store.let(getCurrentThread()).subscribe((t) => this.currentThreadId = t.id);
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(this.threadActions.select(thread));
  }
}
