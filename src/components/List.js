import react from "react";

export default function List() {
  const numbers = [1, 2, 3, 4, 5];
  
  // Function Expression
  const listItems = numbers.map(function(number, index) {
    return <li key={index}>{number}</li>; 
  });

  // Arrow Function
  const arrowItems = numbers.map((number, index) => <li key={index}>{number}</li>);

  const style = {
    'listStyleType': 'none',
    'border': 'solid 1px #000', 
    'margin': '20px auto',
    'width': '25%',
    'padding': '20px',
  }

  console.log('test');
  // This with Arrow Functions
  const arrowObj = {
    name: "John",
    sayHello: function() {
      setTimeout(() => {
        console.log("Hello, " + this.name);
      }, 1000);
    }
  };
  
  
  // this without arrow functions
  const funcObj = {
    name: "John",
    sayHello: function() {
      setTimeout(function() {
        console.log("Hello, " + this.name);
      }.bind(this), 1000);
    }
  };
 
  // this without arrow functions unbound this
  const funcObjUnbound = {
    name: "John",
    sayHello: function() {
      // window.name = 'Global Name';
      setTimeout(function() {
        console.log("Hello, " + this.name);
      }, 1000);
    }
  };

  const arrowFunc = () => {
    arrowObj.sayHello();
  }


  const callFunc = () => {
    funcObj.sayHello();
  }
 
  const callFuncUnbound = () => {
    funcObjUnbound.sayHello();
  }

  return (
    <div>
      <h2>List Items</h2>

      <ul style={style}>
        {listItems}
      </ul>
      
      <h2>Arrow Items</h2>
      
      <ul style={style}>
        { arrowItems}
      </ul>

      <button onClick={arrowFunc}>
        Arrow Function
      </button>

      <button onClick={callFunc}>
        Function Bind
      </button>

      <button onClick={callFuncUnbound}>
        Function Unbound This
      </button>
    </div>    
  );
}