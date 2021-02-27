import React , { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Students from './students.js';
function App() {
  let [count , setCount] = useState(true)
  return (
    <div className="App">
       <h1>Learning Class 3</h1>

       <Students Name="shayan" counter = {count}/>
       <br/>
       <button className="btn" onClick = {() => setCount (++count)}>
         Increase Count
       </button>
       <button className="btn" onClick = {() => setCount (--count)}>
         Decrease Count
       </button>
    </div>
  );
}

export default App;
