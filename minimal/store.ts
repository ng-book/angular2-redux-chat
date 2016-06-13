/// <reference path="../../../typings/main.d.ts"/>
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export class Store<T> extends BehaviorSubject<T> {
  private _dispatcher: Subject<Action>;

  constructor(
    private _reducer: Reducer<T>,
    initialState: T
  ) {
    super(initialState);

    this._dispatcher = new Subject<Action>();
    this._dispatcher
      .scan(
        (state: T, action: Action) => this._reducer(state, action),
        initialState)
      .subscribe((state) => super.next(state));
  }

  getState(): T {
    return this.value;
  }

  dispatch(action: Action): void {
    this._dispatcher.next(action);
  }
}
