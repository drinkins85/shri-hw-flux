import createElement from './utils/createElement';
import output from './components/output';
import form from './components/form';
import log from './components/log';

function app(store, actions) {
  const app = createElement('div', '');
  app.appendChild(form(store, actions));
  app.appendChild(output(store, actions));
  app.appendChild(log(store, actions));
  return app;
}

export default app;
