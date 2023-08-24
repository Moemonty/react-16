import './App.css';
import Button from './components/Button';
import List from './components/List';
import Select from './components/Select';
import Reducer from './components/Reducer';
import React, { useEffect, useState, useCallback, useContext, createContext } from 'react';
import axios from 'axios';
import Usecallback from "./components/Usecallback";
import Usememo from "./components/Usememo";
import Useref from "./components/Useref";
import LayoutEffect from "./components/Layouteffect";
import Localfun from "./components/Localfun";

//exported to be used elsewhere in components
export const ThemeContext = createContext('Light');

function App() {
  const [message, setMessage] = useState('Loading');
  const [isLoading, setIsLoading] = useState(false);

  const testLetVar = () => {
    var guessMe1 = 1;
    let guessMe2 = 2;
    
    {
      let guessMe2 = 3;
      
      try {
        console.log( guessMe1, guessMe2 ); // (A)
      } catch(err){console.log("Error");}
      
      console.log( guessMe1, guessMe2 ); // (B)
    }
    
    console.log( guessMe1, guessMe2 ); // (C)
    
    const print_func = () => {
      
      var guessMe1 = 5;
      console.log( guessMe1 ); // (D)
      let guessMe2 = 6;
      console.log( guessMe1, guessMe2 ); // (E)
    };
    
    print_func();
    console.log( guessMe1, guessMe2 ); // (F)
  }
  
  useEffect(() => {
    console.log('load');
    console.log(message);
    // testLetVar();
    // loadMessage();
    // adding message below will cause an additional render and cause performance issues
  }, []);
  
  // const loadMessage = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(
  //       'https://json.versant.digital/.netlify/functions/fake-api/message'
  //     );
  //     setMessage(response.data);
  //     setIsLoading(false);
  //   } catch (e) {
  //     setMessage(e.message);
  //     setIsLoading(false);
  //   }
  // };
  
  if (isLoading) {
    return 'Loading...';
  } else {
    return (
        <ThemeContext.Provider value={'Light'}>
          <div className="App">
            <h3>React 16 App:</h3>
            Async Message: { message }
            {/*<Usecallback />*/}
            {/*<Usememo />*/}
            {/*<LayoutEffect />*/}
            {/*<Localfun name={'Your Name!'}/>*/}
            {/*<Useref />*/}
            {/*<Reducer array={[1,2,3,4]} />*/}
            {/*<Button />*/}
            {/*<List />*/}
            {/*<Select />*/}
          </div>
        </ThemeContext.Provider>
    );
  }
}

export default App;
