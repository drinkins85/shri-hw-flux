export function add(store, data) {
  store.log.dispatch({
    type: 'ADD_LOG',
    payload: data,
  });
}

export function clear(store) {
  store.log.dispatch({ type: 'CLEAR' });
}
