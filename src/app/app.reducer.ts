/* tslint:disable:typedef */

import {
 Reducer,
 combineReducers
} from 'redux';
import {
 UsersState,
 UsersReducer
} from './user/users.reducer';
export * from './user/users.reducer';
import {
 ThreadsState,
 ThreadsReducer
} from './thread/threads.reducer';
export * from './thread/threads.reducer';

export interface AppState {
 users: UsersState;
 threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
 users: UsersReducer,
 threads: ThreadsReducer
});

export default rootReducer;
