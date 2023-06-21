import '../App.css';
import React, { useEffect, useState  } from 'react';
//exported to be used elsewhere in components

export default function Usestateprop() {
  const [message, setMessage] = useState('Loading');
  const [name, setName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    console.log('Usestate Props loaded')
    if (isTyping) {
      console.log('is typing');
      return;
    }

    loadMessage(name);
    // adding message below will cause an additional render and cause performance issues
  }, [name, isTyping, setMessage]);
  
  const loadMessage = nickName => {
    try {
      fetch(
        `https://json.versant.digital/.netlify/functions/fake-api/message/name/${nickName}`
      )
        .then(res => res.json())
        .then(message => {
          setMessage(message);
        });
    } catch (e) {}
  };

  const handleNameFormSubmit = event => {
    event.preventDefault();
    setIsTyping(false);
  };
  
  return (
    <div className="App">
      <form onSubmit={handleNameFormSubmit}>
        <input
          value={name}
          onChange={event => {
            setIsTyping(true);
            setName(event.target.value);
          }}
        />
        <button>Set nickname</button>
      </form>
      <h1>{message}</h1>
    </div>
  );
}
