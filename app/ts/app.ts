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
import ChatPage from './pages/ChatPage';
// import {ChatNavBar} from './components/ChatNavBar';
// import {ChatThreads} from './components/ChatThreads';
// import {ChatWindow} from './components/ChatWindow';

/*
 * Injectables
 */
// import { servicesInjectables } from './services/services';
// import {utilInjectables} from './util/util';

/*
 * Services
 */
// import {
//   MessagesService,
//   ThreadsService,
//   UserService
// } from './services/services';

// import {ChatExampleData} from './ChatExampleData';

import { provideStore } from '@ngrx/store';
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
  constructor() {
  }
}

bootstrap(ChatApp, [
  provideStore({ })
])
.catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./pages/ChatPage');
require('./reducers');
require('./models');
