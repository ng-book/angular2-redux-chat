/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  Component,
  OnInit
} from '@angular/core';
import {
  Thread
} from '../models';


@Component({
  inputs: ['thread'],
  selector: 'chat-thread',
  template: `
  <div class="media conversation">
    <div class="pull-left">
      <img class="media-object avatar"
           src="{{thread.avatarSrc}}">
    </div>
    <div class="media-body">
      <h5 class="media-heading contact-name">{{thread.name}}
        <span *ngIf="selected">&bull;</span>
      </h5>
      <small class="message-preview">{{thread.lastMessage.text}}</small>
    </div>
    <a (click)="clicked($event)" class="div-link">Select</a>
  </div>
  `
})
export default class ChatThread {
  thread: Thread;
  selected: boolean = false;

  constructor() {
  }

  // ngOnInit(): void {
  //   this.threadsService.currentThread
  //     .subscribe( (currentThread: Thread) => {
  //       this.selected = currentThread &&
  //         this.thread &&
  //         (currentThread.id === this.thread.id);
  //     });
  // }
  //
  // clicked(event: any): void {
  //   this.threadsService.setCurrentThread(this.thread);
  //   event.preventDefault();
  // }
}
