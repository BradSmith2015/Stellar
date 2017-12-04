import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';
let artistID;
class App extends Component {
  constructor(props){
  super(props);
  this.cardChange = this.cardChange.bind(this);
  this.handleleftSwipe = this.handleleftSwipe.bind(this);
  this.handlerightSwipe = this.handlerightSwipe.bind(this);
  this.state = {
                newartist: "Tyler",
                }


    }

cardChange(){
  this.setState(prevState => ({
        newartist: "Stuff",
        newId: artistID

    }))





    }
    handleleftSwipe(){
    //take artistID and send that to data base
    //



    }
    handlerightSwipe(){
    //take artistID and send that to database

    }


    render() {
      return (
        <div className = "Layout">
          <div className = "columns">
            <button className = "leftbuttons" onClick ={this.cardChange}>
              <img src = {require('./Arrows-Forward-icon-flip.png')} style = {{width: "100%", height: "100%"}}/>
            </button>
          </div>
          <div className = "columns" >
            <Card artistName = {this.state.newartist} />
      </div>
      <div className = "columns">
        <button className = "rightbuttons" onClick= {this.cardChange}>
          <img src = {require('./Arrows-Forward-icon.png')} style = {{width: "100%", height: "100%"}}/>
        </button>
      </div>

    </div>




    );
  }
}

export default App;
