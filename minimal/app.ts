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
import { createStore, Store, compose, applyMiddleware, Middleware, MiddlewareAPI, Dispatch, StoreEnhancer } from 'redux';
import { AppStore } from './app-store';
import { AppState } from './app-state';
import { counterReducer } from './counter-reducer';
import CounterComponent from './CounterComponent';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ?
               window['devToolsExtension']() : f => f;

// const devtoolsMiddleware = (a: AppState): AppState => devtools(a) as AppState;

const loggerMiddleware: Middleware =
  <S>({getState}: MiddlewareAPI<S>) =>
    (next: Dispatch<S>) =>
      (action: any): any => {
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
      }

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  // applyMiddleware(loggerMiddleware)
  compose(devtools)
  // compose(devtoolsMiddleware) as (a: AppState) => AppState
);

console.log('hello', store, store.getState());

@Component({
  selector: 'minimal-redux-app',
  directives: [
    // MinimalCounterApp
  ],
  template: `
  <div>
    <counter-component>
    </counter-component>
  </div>
  `
})
class MinimalApp {
  constructor() {
  }
}

bootstrap(MinimalApp, [
  // provideStore({messages: Messages})
])
.catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('../app/ts/vendor');
require('./app-store');
require('./app-state');
require('./counter-reducer');
require('./CounterComponent');
// require('./services/services');
// require('./ChatExampleData');
// require('./util/util');
// require('./components/ChatNavBar');
// require('./components/ChatWindow');
// require('./components/ChatThreads');

