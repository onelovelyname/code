import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./Photo.js";

function App() {
  return (
    <div className="App">
      <h1>Hi coding class</h1>
      <input type="text" placeholder="What are you looking for?" id="search-input"/>
      <button>Submit</button>
      <div>
        <Photo name="Dolphin" src="dolphin.jpeg"/>
        <Photo name="Tiger" src="tiger.jpeg"/>
        <Photo name="Lion" src="lion.jpeg"/>      
        <Photo name="Cat" src="cat.jpeg"/>      
        <Photo name="Butterfly" src="butterfly.jpeg"/>      

      </div>

    </div>
  );
}

export default App;
