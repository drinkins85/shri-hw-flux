const initialState = [];

export default function logReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LOG':
      return [...state, action.payload];
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}
