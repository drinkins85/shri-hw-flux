import createStore from './createStore';

export default function configureStore(rootReducer) {
  const store = {};
  Object.keys(rootReducer).forEach((reducer) => {
    store[reducer] = createStore(rootReducer[reducer]);
  });
  return store;
}

