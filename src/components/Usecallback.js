import React, {Fragment, useCallback, useState} from 'react';
export default function Usecallback() {
  
  const [count, setCount] = useState(0);
  const compute = () => {
    setCount(count + 1);
  };
  
  console.log(count);
  
  const memoizedCb = useCallback(() => {
    console.log('in callback');
    compute();
    // TODO: What happens when count changes, as in the dependency listed in useCallback's second
    // parameter
  }, [count]);
  
  console.log(memoizedCb);
  return (
    <Fragment>
      <h3>Memoized Callback</h3>
      <button onClick={memoizedCb}>
        Use Memo
      </button>
    </Fragment>
  );
}