import './App.css';
import Button from './components/Button';
import List from './components/List';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="App">
      <header className="App-header">
        Async Message: { message }      
        <Button />
        <List />
      </header>
    </div>
  );
}

export default App;
