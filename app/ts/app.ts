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
import { Store, provideStore } from '@ngrx/store';

/*
 * Components
 */
import ChatPage from './pages/ChatPage';
// import {ChatNavBar} from './components/ChatNavBar';
// import {ChatThreads} from './components/ChatThreads';
// import {ChatWindow} from './components/ChatWindow';

import ChatExampleData from './ChatExampleData';
import reducer, { AppState } from './reducers';

// import { messages } from './reducers/messages';

/*
 * Webpack
 */
require('../css/styles.scss');

@Component({
  selector: 'chat-app',
  directives: [ChatPage],
  template: `
  <div>
    <chat-page></chat-page>
  </div>
  `
})
class ChatApp {
  constructor(private store: Store<AppState>) {
    ChatExampleData(store);
  }
}

bootstrap(ChatApp, [
  provideStore(reducer)
])
.catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./pages/ChatPage');
require('./reducers');
require('./models');
require('./models/User');
require('./models/Message');
require('./models/Thread');
require('./actions');
require('./ChatExampleData');
require('./components/ChatMessage');
require('./components/ChatWindow');
require('./components/ChatThreads');
require('./components/ChatThread');
require('./components/ChatNavBar');
