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
import { bootstrap } from '@angular/platform-browser-dynamic';

/*
 * Components
 */
import ChatNavBar from '../containers/ChatNavBar';
import ChatThreads from '../containers/ChatThreads';
import ChatWindow from '../containers/ChatWindow';

@Component({
  selector: 'chat-page',
  directives: [ChatNavBar,
               ChatThreads,
               ChatWindow],
  template: `
  <div>
    <chat-nav-bar></chat-nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export default class ChatPage {
  constructor() {
  }
}
