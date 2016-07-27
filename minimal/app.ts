/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import {
  Component,
  provide
} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';
import { AppStore } from './app-store';
import { AppState } from './app-state';
import { counterReducer } from './counter-reducer';
import CounterComponent from './CounterComponent';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  compose(devtools)
);

@Component({
  selector: 'minimal-redux-app',
  directives: [ CounterComponent ],
  template: `
  <div>
    <counter-component>
    </counter-component>
  </div>
  `
})
class MinimalApp {
}

bootstrap(MinimalApp, [
  provide(AppStore, { useFactory: () => store }),
])
.catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
// require('../app/ts/vendor');
require('./app-store');
require('./app-state');
require('./counter-reducer');
require('./counter-action-creators');
require('./CounterComponent');
