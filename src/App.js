import './App.css';
import Button from './components/Button';
import List from './components/List';
import Select from './components/Select';

import React, { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';


//exported to be used elsewhere in components
export const ThemeContext = createContext('Light');

function App() {
  const [message, setMessage] = useState('Loading');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://json.versant.digital/.netlify/functions/fake-api/message'
      );
      setMessage(response.data);
      setIsLoading(false);
    } catch (e) {
      setMessage(e.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <ThemeContext.Provider value={'Them Color'}>
      <div className="App">
        <h3>React 16 App:</h3>
        Async Message: { message }      

        <Button />
        <List />
        <Select />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
