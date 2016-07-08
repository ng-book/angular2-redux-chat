import {
  Action,
  ActionCreator
} from 'redux';

export const DECREMENT: string = 'DECREMENT';
export const INCREMENT: string = 'INCREMENT';

export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
