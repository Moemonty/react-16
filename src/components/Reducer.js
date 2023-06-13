import React from 'react';

 export default function Reducer({ array }) {

  const reducedValue = array.reduce((acc, curr) => {
    return acc + curr
  }, 0);
  
  const style = {
    'border': 'solid 1px #000',
    'margin': '20px auto',
    'width': '25%'
  }

  return (
    <div style={style}>
      <h3>Reduced Value</h3>
      <p>
        { reducedValue }
      </p>      
    </div>
  );
 }