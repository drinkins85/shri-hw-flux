export default function ($, store, actions) {
  const logContainer = $.createElement('div');
  const log = $.createElement('div');
  log.classList.add('log');

  const clearBtn = $.createElement('button');
  clearBtn.classList.add('log-list__clear');
  clearBtn.innerHTML = 'Очистить';

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
