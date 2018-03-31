import '../styles/main.scss';
import app from './app';
import actions from './actions/index';
import rootReducer from './reducers/index';
import configureStore from './store/configureStore';

const store = configureStore(rootReducer);


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.root').appendChild(app(store, actions));
});
