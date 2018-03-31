export default function ($, store, actions) {
  const output = $.createElement('p');
  output.classList.add('view-stub__label');

  const unSubscribeServ = store.sendToServer.subscribe(() => {
    output.innerHTML = `Сервер принял данные:  <b>${store.sendToServer.getState()}</b>`;
    console.log('Обновлены данные компонента');
    actions.log.add(store, 'Обновлены данные компонента');
  });

  return output;
}
