const initialState = {
  value: 0,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        history: [...state.history, state.value], 
        value: state.value + 1, 
      };
    case 'DECREMENT':
      return {
        ...state,
        history: [...state.history, state.value], 
        value: state.value - 1, 
      };
    default:
      return state; 
  }
}

export { initialState, reducer };
