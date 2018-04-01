const initialState = '';

export default function sendToServerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SENDED_TO_SERVER':
      return action.payload;
    default:
      return state;
  }
}
