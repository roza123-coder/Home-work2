import React, { useReducer } from 'react';

const initialState = {
    value: 0,
    history: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1,
                history: [...state.history, state.value + 1],
            };
        case 'DECREMENT':
            return {
                value: state.value - 1,
                history: [...state.history, state.value - 1],
            };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Счётчик: {state.value}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Увеличить</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Уменьшить</button>
            <h2>История: {state.history.join(', ')}</h2>
        </div>
    );
};

export default Counter;
