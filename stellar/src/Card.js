import React from 'react';
import './Card.css';




class SongPlayer extends React.Component{
constructor(props){
  super(props);
  this.audioobject = new Audio(this.props.audio);

  this.state = {isTrackliked: false,
                background: "likebutton",
                isTrackPlaying: false,
                playing: "playbutton",
                songName: "November"
                };
  this.handlePlay = this.handlePlay.bind(this);
  this.handleLike = this.handleLike.bind(this);
  this.isTrackPlaying = this.isTrackPlaying.bind(this);
}
//handles like function for the heartbutton
//TODO:add function to store liked into databases
handleChange(){
  this.setState(prevState => ({
    songName:this.props.songname,

}));
}
isTrackPlaying(){
  return (this.state.isTrackPlaying);
}
handleLike(){
if(this.state.isTrackliked === false){
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

  if(this.state.isTrackPlaying === false && this.audioobject.paused ){
    this.setState(prevState => ({
      isTrackPlaying: true,
      playing: "pausebutton"

    }));
    this.audioobject.play();
}else if(this.state.isTrackPlaying === true ){
    this.setState(prevState => ({
      isTrackPlaying: false,
      playing: "playbutton"


    }));
  this.audioobject.pause();
  this.audioobject.currentTime = 0;
  }

}
componentWillUpdate(nextProps){
  if(this.state.isTrackPlaying === false && this.audioobject.paused && nextProps.turnon === true){
    this.setState(prevState => ({
      isTrackPlaying: true,
      playing: "pausebutton"

    }));
    this.audioobject.play();
}else if(this.state.isTrackPlaying === true && nextProps.turnon===false){
    this.setState(prevState => ({
      isTrackPlaying: false,
      playing: "playbutton"


    }));
  this.audioobject.pause();
  this.audioobject.currentTime = 0;
  }

}






render(){
  return(
 <div className ="Songlistobject">
   <button className={this.state.playing} onClick={this.props.myClick}/>
   <h1 className = "SonglistName">{this.state.songName}</h1>
   <button className={this.state.background} onClick = {this.handleLike} >
   </button>
 </div>
   );
   }

}


export default class Card extends React.Component{
  constructor(props){

    super(props);
    this.state = {
                  s1: false,
                  s2: false

                };

    this.track1url = "https://p.scdn.co/mp3-preview/e9e8d9fce04ab59c61ed9708d9bee03910d5e205?cid=8897482848704f2a8f8d7c79726a70d4";
    this.track2url = "https://p.scdn.co/mp3-preview/b150fc166941abb97b0c12d622ddbdcd54b00d11?cid=8897482848704f2a8f8d7c79726a70d4";
    this.playjustsong1 = this.playjustsong1.bind(this);
    this.playjustsong2 = this.playjustsong2.bind(this);


  }


//TODO: add method to pervent from multiple songs playing at once
playjustsong1(){
if(this.state.s1 === false ){
  this.setState(prevState => ({
    s1: true,
    s2: false

  }));

}else if(this.state.s1 === true){
  this.setState(prevState => ({
    s1: false,
    s2: false

  }));

}
}
playjustsong2(){
if(this.state.s2 === false){
  this.setState(prevState => ({
    s1: false,
    s2: true

  }));
}else if(this.state.s2 === true){
  this.setState(prevState => ({
    s1: false,
    s2: false

  }));

}
}



render(){
    return(

    <div className = "CardBoarder">
      <div className = "ArtistImage">
        <img src = {require('./tyler.jpg')} className = "Image"/>
      </div>
      <div style = {{marginBottom:"10px"}}>
        <h1 className = "artistName">{this.props.artistName}</h1>
      </div>
      <SongPlayer  audio ={this.track1url} turnon = {this.state.s1} myClick = {this.playjustsong1}/>
      <SongPlayer audio = {this.track2url} turnon = {this.state.s2} myClick = {this.playjustsong2}/>
    </div>
      );
    }

}
