import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import { connect } from 'react-redux';
import '../styles/main.css';

const mapStateToProps = (state) => {
    return {
      users: state.userState
    };
  };



const mainPage = (props) => (


  <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#"><p id="s">STELLAR</p></a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" activeClassName="is-active" className="do" exact={true}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/accountPage" activeClassName="is-active" className="do" exact={true}>SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/logPage" activeClassName="is-active" className="do" exact={true}>SignIn</NavLink>
        </li>
      </ul>
    </nav>


    <div id="cre" className="container-fluid">
      <h1 className="intro">STELLAR MUSIC</h1>
      <h1 className="intro">Here in STELLAR</h1>
      <h1 className="intro">You can find</h1>
      <h1 className="intro">The best music that fits your taste</h1>
      <br/>
      <p className="intro">Discover your next favorite song, album, or artist</p>
      <p className="intro">Create you music library</p>
      <p className="intro">The best way to enjoy music!</p>
      <br/>
      <br/>
      <div className="holder">
        <button type="button" id="click" className="btn btn-primary btn-lg"><NavLink to="/accountPage" activeClassName="is-active" className='account' exact={true}>Click here to create your first account!</NavLink></button>
      </div>
      <br/>
      <br/>
    </div>

  </div>

);


export default connect(mapStateToProps)(mainPage);
