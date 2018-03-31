import createElement from '../utils/createElement';

export default function (store, actions) {
  const logContainer = createElement('div', '');
  const log = createElement('div', '', 'log');
  const clearBtn = createElement('button', 'Очистить', 'log-list__clear');

  clearBtn.addEventListener('click', () => {
    actions.log.clear(store);
  });

  logContainer.appendChild(log);
  logContainer.appendChild(clearBtn);

  const unSubscribe = store.log.subscribe(() => {
    const logs = store.log.getState();
    const logsList = logs.map((log) => {
      return `<li class="log-list__item">${log}</li>`;
    }).join('');
    log.innerHTML = `<ul class="log-list">${logsList}</ul>`;
  });

  return logContainer;
}
