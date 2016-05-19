interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<any> = (state: any, action: Action) => {
  return state;
};

console.log(reducer(0, null)); // -> 0
