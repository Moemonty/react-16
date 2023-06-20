import { Fragment, useMemo, useState } from 'react';

export default function Usememo() {
  
  const [userId, setUserId] = useState(1);
  
  const getResult = () => {
    console.log('get new number if new user id')
    return Math.floor(Math.random() * 11);
  }
  
  const memoizedResult = useMemo(
   () => getResult(),
   [userId]
  );
  
  const style = {
    'margin': '20px'
  };
  
  console.log(memoizedResult);
  
  return (
    <Fragment>
      <h3>Memoized Callback</h3>
      <div style={style}>
        User {userId}'s score: {memoizedResult}
      </div>
      <button onClick={() => setUserId(1)}>User 1's New Score</button>
      <button onClick={() => setUserId(2)}>User 2's New Score</button>
    </Fragment>
  );
}