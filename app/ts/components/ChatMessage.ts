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
  User,
  Message,
  Thread
} from '../models';
import { FromNowPipe } from '../pipes/FromNowPipe';

@Component({
  inputs: ['message'],
  selector: 'chat-message',
  pipes: [FromNowPipe],
  template: `
  <div class="msg-container"
       [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">

    <div class="avatar"
         *ngIf="!incoming">
      <img src="{{message.author.avatarSrc}}">
    </div>

    <div class="messages"
      [ngClass]="{'msg-sent': !incoming, 'msg-receive': incoming}">
      <p>{{message.text}}</p>
      <time>{{message.sender}} • {{message.sentAt | fromNow}}</time>
    </div>

    <div class="avatar"
         *ngIf="incoming">
      <img src="{{message.author.avatarSrc}}">
    </div>
  </div>
  `
})
export default class ChatMessage implements OnInit {
  message: Message;
  currentUser: User;
  incoming: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.incoming = !this.message.author.isClient;
  }
}
