import React from 'react';
import './Card.css';
class SongPlayer extends React.Component{
constructor(props){
  super(props);
  this.state = {isTrackliked: false,
                background: "likebutton",
                isTrackPlaying: false,
                playing: "playbutton"

                };
  this.handlePlay = this.handlePlay.bind(this);
  this.handleLike = this.handleLike.bind(this);
}
//handles like function for the heartbutton
//TODO:add function to store liked into databases
handleLike(){
if(this.state.isTrackliked == false){
  this.setState(prevState => ({
    isTrackliked: !prevState.isTrackliked,
    background: "likebuttonfill"
  }));
}else{
  this.setState(prevState => ({
    isTrackliked: !prevState.isTrackliked,
    background: "likebutton"
  }));
}
}
//TODO:add fucntionality so that not all istance of playbutton can be
//playing at once, this possibly may have to be add in App.js
//TODO:add fucntionality to connect to Spotify api so that track is played 
handlePlay(){
  if(this.state.isTrackPlaying == false ){
    this.setState(prevState => ({
      isTrackPlaying: !prevState.isTrackPlaying,
      playing: "pausebutton"

    }));
  }else{
    this.setState(prevState => ({
      isTrackPlaying: !prevState.isTrackPlaying,
      playing: "playbutton"

    }));
  }

}




render(){
  return(
 <div className ="Songlistobject">
   <button className={this.state.playing} onClick={this.handlePlay}/>
   <h1 className = "SonglistName">November</h1>
   <button className={this.state.background} onClick = {this.handleLike} >
   </button>
 </div>
   );
   }
     }
export default class Card extends React.Component{






render(){

  return(
    <div className = "CardBoarder">
      <div className = "ArtistImage">
        <img src = {require('./tyler.jpg')} className = "Image"/>
      </div>
      <div style = {{marginBottom:"10px"}}>
        <h1 className = "artistName">Tyler the Creator</h1>
      </div>
      <SongPlayer id="song1"/>
      <SongPlayer id="song2"/>
      <SongPlayer id="song3"/>
      <SongPlayer id ="song4"/>
      <SongPlayer id="song5"/>

    </div>
      );
    }

}
