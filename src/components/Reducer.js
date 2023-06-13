import React, { useReducer } from 'react';

const INITIAL_STATE = { count: 0 };

const reducer = (state, action) => {
  const { type } = action || {};
  if (!type) throw new Error('Action type must be defined');

  switch (type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Did you misspell an action type?');
  }
};


 export default function Reducer({ array }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const reducedValue = array.reduce((acc, curr) => {
    return acc + curr
  }, 0);

  const style = {
    'border': 'solid 1px #000',
    'margin': '20px auto',
    'padding': '20px',
    'width': '25%'
  }

  return (
    <div style={style}>
      <h3>Reduced Value</h3>
      <p>
        { reducedValue }
      </p>

      <h3>useReducer State Count</h3>
      <div>{state.count}</div>
      <button onClick={()=> dispatch({type: 'increment'}) }>Increment</button>
      {/* Synthetic events need functions, not results of function -- state changes trigger re-renders */}
      {/* <button onClick={dispatch({type: 'decrement'})}>No State Change</button> */}
    </div>
  );
 }