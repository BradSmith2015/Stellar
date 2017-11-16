import React from 'react';
import './Card.css';
export default class Card extends React.Component{

render(){
  return(
    <div className = "CardBoarder">
      <div className = "ArtistImage">
        <img src = {require('./tyler.jpg')} className = "Image"/>
      </div>
      <div style = {{marginBottom:"30px"}}>
        <h1 className = "artistName">Tyler the Creator</h1>
      </div>
      <div>
        
      </div>
    </div>
      );
    }

    }
