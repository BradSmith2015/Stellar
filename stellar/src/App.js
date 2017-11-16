import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

let x = "song";

class App extends Component {
  render() {
    return (
    <div className = "Layout">
      <div className = "columns">
        <button className = "leftbuttons">
          <img src = {require('./Arrows-Forward-icon-flip.png')} style = {{width: "100%", height: "100%"}}/>
        </button>
      </div>
      <div className = "columns" >
        <Card />
      </div>
      <div className = "columns">
        <button className = "rightbuttons">
          <img src = {require('./Arrows-Forward-icon.png')} style = {{width: "100%", height: "100%"}}/>
        </button>
      </div>

    </div>




    );
  }
}

export default App;
