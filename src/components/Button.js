import React, { useState } from 'react';


export default function Button () {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Button pressed');
  }

  const [count, setCount  ] = useState(0);

  

  return (
    <div>
      <div>
      Count: { count } 
      </div>
      
      <form onSubmit={handleSubmit}>
        <p>Submit - Prevent Default</p>
        <button type="submit">Submit</button>
      </form>

      <p>Click Button</p>
      <button onClick={() => setCount(count + 1) }>
        Add 
      </button>
    </div>    
  );
}