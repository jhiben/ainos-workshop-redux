function reducer(x, op) {
  switch (op.type) {
    case '+':
      return x + op.value;
    case '-':
      return x - op.value;
    case '/':
      return x / op.value;
    case '*':
      return x * op.value;
    case 'exp':
      return Math.pow(x, op.value);
    case 'sup':
      return x * op.value.y1 - op.value.y2;
  }

  return 0;
}

function createStore() {
  const subscribers = [];
  let state = 1;

  return {
    dispatch: action => {
      state = reducer(state, action);
      subscribers.forEach(s => s());
    },
    subscribe: s => subscribers.push(s),
    getState: () => state,
  };
}

let store = createStore();
store.subscribe(() => console.log('dispatched ' + store.getState()));
store.dispatch({ type: '+', value: 1 });
