import createElement from '../utils/createElement';

export default function form(store, actions) {
  const form = createElement('div', '', 'view-stub__input-block');
  const input = createElement('input', '', 'view-stub__input');
  const button = createElement('button', 'Отправить на сервер', 'view-stub__apply');

  button.addEventListener('click', () => {
    console.log('Нажата кнопка');
    actions.log.add(store, 'Нажата кнопка');
    console.log('Вызов диспетчера');
    actions.log.add(store, 'Вызов диспетчера');

    const data = input.value;
    actions.sendToServer.send(store, data);

    input.value = '';
    input.focus();
  });

  form.appendChild(input);
  form.appendChild(button);

  return form;
}

