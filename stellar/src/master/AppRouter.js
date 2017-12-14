
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import accountPage from '../components/accountPage';
import logPage from '../components/logPage';
import mainPage from '../components/mainPage';
import musicPlayer from '../music/App';
import Likedartist from  '../music/Likedartist';
import Likedsongs from '../music/Likedsongs';






const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={mainPage} exact={true}/>
          <Route path="/accountPage" component={accountPage} exact={true}/>
          <Route path="/logPage" component={logPage} exact={true}/>
          <Route path="/musicPlayer" component={musicPlayer} exact={true}/>
          <Route path="/Likedartist" component={Likedartist} exact={true}/>
        <Route path="/Likedsongs" component={Likedsongs} exact={true}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
