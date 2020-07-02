import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ text, setText] = useState([])
  const appendText = () => {
    setText(text.concat([document.getElementById("input").value]))
  } 
  return (
    <div className="App">
      {text.map( item => 
      
          <p>{item}</p>

      )}
      <input  id="input"></input> 
      <button onClick={() => appendText()}>добавить</button>
    </div>
  );
}

export default App;
