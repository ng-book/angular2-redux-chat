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

import {provideStore} from '@ngrx/store';
// import {messages} from './reducers/messages';

console.log("minimal app loaded")

@Component({
  selector: 'minimal-ngrx-app',
  directives: [],
  template: `
  <div>
    hi minimal
  </div>
  `
})
class MinimalApp {
  constructor() {
  }
}

bootstrap(MinimalApp, [
  // provideStore({messages})
])
.catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('../app/ts/vendor');
// require('./services/services');
// require('./ChatExampleData');
// require('./util/util');
// require('./components/ChatNavBar');
// require('./components/ChatWindow');
// require('./components/ChatThreads');

