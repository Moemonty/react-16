import React, { useEffect, useState } from 'react';

const Localfun = ({ name }) => {
  // Name is a prop or external dependency
  const [message, setMessage] = useState('');
  
  const loadMessage = nickName => {
    setMessage(`Hello, ${name}`)
  };
  
  useEffect(() => {
    loadMessage(name);
  }, [name, loadMessage]);
  
  // Try not to have local functions in useEffect Deps
  // Either have in useEffect like so or..
  useEffect(() => {
    const loadMessage = nickName => {
      setMessage(`Hello, ${name}`)
    };

    loadMessage(name);
  }, [name]);

  
  return (
    <div>
      <p>
        Load Message: Local Function
      </p>
      <p>
        { message }
      </p>
      
    </div>
  );
};

export default Localfun;