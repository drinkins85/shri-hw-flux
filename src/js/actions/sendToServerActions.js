export function send(store, data) {
  // async
  setTimeout(() => {
    store.sendToServer.dispatch({
      type: 'SENDED_TO_SERVER',
      payload: data,
    });
  }, 1000);
}
