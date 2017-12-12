import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Likedartist from './Likedartist';
import Likedsongs from './Likedsongs';
import App from './App';

const Main = () =>  (
  <main>
    <Switch>
      <Route exact path = '/' component = {App}/>
      <Route exact path = '/Likedartist' component={Likedartist}/>
      <Route exact path = '/Likedsongs' component = {Likedsongs}/>
    </Switch>
  </main>
)
export default Main
