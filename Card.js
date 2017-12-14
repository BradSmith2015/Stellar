import React from 'react';
import './Card.scss';




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
  //this.handlePlay = this.handlePlay.bind(this);
  this.baseState = this.state;
  this.handleLike = this.handleLike.bind(this);
  this.isTrackPlaying = this.isTrackPlaying.bind(this);
  this.clickhandle = this.clickhandle.bind(this);
  this.play = this.play.bind(this);
}
//handles like function for the heartbutton
//TODO:add function to store liked into databases
resetlikes(){
  this.setState(this.baseState);
}

play(){
  let search = (this.props.songName+'-'+this.props.artist).trim().replace(/\s+/g, '+').split("-");
  //console.log(search);
  
  fetch("https://itunes.apple.com/search?entity=musicTrack&term="+search[0]).then(function(response) {
    return response.json();
  }).then(function(data) {
    //console.log(data);
   let results = data.results;
  // console.log(results);
    for(let i = 0; i < results.length;i++){
      //console.log(results[i].artistName.toLowerCase());
      let trackName = results[i].trackName;
      let song = search[0].replace(/\+/g, " ").toLowerCase();
      let artist_name = search[1].trim().replace(/\+/g,' ').toLowerCase();
      console.log(results[i].artistName.toLowerCase(), artist_name);
       //console.log(trackName, song, artist_name);
      if(results[i].artistName.toLowerCase() == artist_name.toLowerCase() && trackName.toLowerCase().indexOf(song) !== -1){
        //playAudio(results[i].previewUrl);
       // console.log('test');
        console.log(results[i].previewUrl);
        break;
      }
    }
  }).catch(function(err) {
    console.log(err);
  });
  
}

clickhandle(){
  console.log(this.props.songName);
  console.log(this.props.artist);
  this.play();
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
  var song = this.state.songName;
  //input as a liked song


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

/*handlePlay(){

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

}*/

componentWillUpdate(nextProps){
if(nextProps.turnon !== this.props.turnon){
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
else if(nextProps.songName !== this.state.songName){
  this.setState(({
    songName: this.props.songName,
    isTrackliked: false,
    background: "likebutton"
  }));
}



}











render(){
  return(
 <div className ="Songlistobject">

   <button className={this.state.playing} onClick={this.play}/>
   <div className = "SonglistName">{this.state.songName}</div>
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
                  s2: false,
                  artistName: "Tyler",
                  requestFailed: false,
                  inital:true
                };

    this.track1url = "https://p.scdn.co/mp3-preview/e9e8d9fce04ab59c61ed9708d9bee03910d5e205?cid=8897482848704f2a8f8d7c79726a70d4";
    this.track2url = "https://p.scdn.co/mp3-preview/b150fc166941abb97b0c12d622ddbdcd54b00d11?cid=8897482848704f2a8f8d7c79726a70d4";
    this.playjustsong1 = this.playjustsong1.bind(this);
    this.playjustsong2 = this.playjustsong2.bind(this);
    //this.myClick = this.myClick.bind(this);


  }
componentDidMount(){
  if(this.state.inital === true){
  var artistlink = this.props.artistName.split(' ').join('+');
  fetch('https://stellar-backend.herokuapp.com/gettoptracks?artist=' + artistlink)
      .then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }

      return response
      })
      .then(d => d.json())
      .then(d =>{
        this.setState({
          data: d,
          inital: false
        })
        },() => {
        this.setState({
          requestFailed: true

        })
      })
    }
  }
componentDidUpdate(nextProps){
  if(this.props.artistName !== nextProps.artistName){
  var artistlink = this.props.artistName.split(' ').join('+');
  fetch('https://stellar-backend.herokuapp.com/gettoptracks?artist=' + artistlink)
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

      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.data) return <p>Loading...</p>
      else{

        this.song = this.state.data.toptracks.track;
        console.log(this.state.data)
        return(
    <div className = "CardBoarder">
      <div className = "ArtistImage">
        <img src = {this.props.image} className = "Image"/>
      </div>
      <div style = {{marginBottom:"10px"}}>
        <h1 className = "artistName">{this.props.artistName}</h1>
      </div>

      <SongPlayer songName = {this.state.data.toptracks.track[0].name}  artist = {this.props.artistName}/>
      <SongPlayer songName = {this.state.data.toptracks.track[1].name}  artist = {this.props.artistName}/>
      <SongPlayer songName = {this.state.data.toptracks.track[2].name}  artist = {this.props.artistName}/>
      <SongPlayer songName = {this.state.data.toptracks.track[3].name}  artist = {this.props.artistName}/>
      <SongPlayer songName = {this.state.data.toptracks.track[4].name}  artist = {this.props.artistName}/>



    </div>
      );
    }
  }

}
