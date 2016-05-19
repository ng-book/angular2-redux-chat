const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch(state); // dummy dispatch

  return { getState, dispatch, subscribe };
};

let reducer = (state, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
  default: 
    return state;
  }
}

let store = createStore(reducer, 0);
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

console.log(store.getState() == 3);
