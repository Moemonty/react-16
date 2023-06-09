import React, { useState } from 'react';


export default function Button () {
  const [count, setCount  ] = useState(0);

  return (
    <div>
      <div>
      { count } 
      </div>
      <button onClick={() => setCount(count + 1) }>
        Add
      </button>
    </div>    
  );
}