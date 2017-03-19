import { Component, Inject } from '@angular/core';
import { Store } from 'redux';

import { AppStore } from './app.store';
import { AppState } from './app.reducer';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}
