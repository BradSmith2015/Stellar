import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.cardChange = this.cardChange.bind(this);
  this.handleleftSwipe = this.handleleftSwipe.bind(this);
  this.handlerightSwipe = this.handlerightSwipe.bind(this);
  this.state = {
                newartist: "Tyler",
                seed: "kanye+west",
                requestFailed: false,
                image:""

              };

  this.n = 0;

    }



componentWillMount(){
  fetch('https://stellar-backend.herokuapp.com/getrelatedartist?artist='+ this.state.seed)
      .then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }

      return response
      })
      .then(d => d.json())
      .then(d =>{
        this.setState({
          data: d
        })
        },() => {
        this.setState({
          requestFailed: true
        })
      })
    }


cardChange(){
  this.n++
  var name = this.state.data.similarartists.artist[this.n].name;
  var imageurl = this.state.data.similarartists.artist[this.n].image[5]["#text"];
  this.setState({
    newartist:name,
    image: imageurl
  })
}



handleleftSwipe(){




}
handlerightSwipe(){



}


    render() {
      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.data) return <p>Loading...</p>
      return (
        <div className = "Layout">
          <div className = "columns">
            <button className = "leftbuttons" onClick ={this.cardChange}>
              <img src = {require('./Arrows-Forward-icon-flip.png')} style = {{width: "100%", height: "100%"}}/>
            </button>
          </div>
          <div className = "columns" >
            <Card artistName = {this.state.newartist} image = {this.state.image} />
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
