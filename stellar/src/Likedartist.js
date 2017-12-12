import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Likeartist.css';

export default class Likedartist extends Component{
  constructor(props){
    super(props)
  }







  render(){
  return(
    <div className = "Layout">
      <ul className = "list">
        <li>Home</li>
        <li><Link to ='/' style = {{textDecoration: 'none', color: 'white'}}>Discover</Link></li>
        <li className= "active"><Link to ='/Likedartist' style = {{textDecoration: 'none', color: 'white'}}>Artist</Link></li>
        <li><Link to = '/Likedsongs' style = {{textDecoration: 'none', color: 'white'}}>Songs</Link></li>
      </ul>
      <div className = "songlistcontainer">
        <ul className = "songlist">
          <li>fdlkgjdf</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>
          <li>flkdfjask</li>

          <li>flkdfjask</li>

        </ul>
      </div>
    </div>
  );
  }
}
