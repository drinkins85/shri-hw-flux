
export default function form($, store, actions) {
  const form = $.createElement('div');
  form.classList.add('view-stub__input-block');

  const input = $.createElement('input');
  input.classList.add('view-stub__input');

  const button = $.createElement('button');
  button.classList.add('view-stub__apply');
  button.innerHTML = 'Отправить на сервер';

  button.addEventListener('click', () => {
    console.log('Нажата кнопка');
    actions.log.add(store, 'Нажата кнопка');
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

