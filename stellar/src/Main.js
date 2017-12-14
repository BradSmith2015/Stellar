import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Likedartist from './Likedartist';
import Likedsongs from './Likedsongs';
import App from './CardPage';
import mainPage from './components/mainPage';
import accountPage from './components/accountPage';
import logPage from './components/logPage';



const Main = () =>  (
  <main>
    <Switch>
      <Route path="/accountPage" component={accountPage} exact={true}/>
      <Route path="/logPage" component={logPage} exact={true}/>
      <Route path="/" component={mainPage} exact={true}/>
      <Route exact path = '/musicPlayer' component = {App}/>
      <Route exact path = '/Likedartist' component={Likedartist}/>
      <Route exact path = '/Likedsongs' component = {Likedsongs}/>
    </Switch>
  </main>
)
export default Main
