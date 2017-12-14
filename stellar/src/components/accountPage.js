import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import { connect } from 'react-redux';
import { createAccount } from '../Actions/usersInfo';


const Header = () => (
  <div className = 'littleHeader'>
    <h2>STELLAR</h2>
    <button type="button" id="click" className="btn btn-primary btn-lg"><NavLink to="/" activeClassName="is-active" className='account' exact={true}>Home page</NavLink></button>
    <button type="button" id="click" className="btn btn-primary btn-lg"><NavLink to="/logPage" activeClassName="is-active" className='account' exact={true}>Sign in</NavLink></button>
  </div>
);



const mapStateToProps = (state) => {
  return {
    users: state.userData
  };
};


const accountPage = (props) => (
  <div className = 'accountBody'>
  <Header/>
  <form  onSubmit={(e) => {
    e.preventDefault();

    if (e.target.uname.value === '' || e.target.psw.value === '' || e.target.psw.value !== e.target.psw2.value){
      alert('wrong information');
    }

    else{
      alert('Sign up success!');
      props.dispatch(createAccount({username: e.target.uname.value, password: e.target.psw.value}));
    }

    e.target.reset();
  }}  >
    <div className="container">
      <label><b>username</b></label>
      <input type="text" placeholder="Enter Email" name="uname" />

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" />

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw2" r/>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <div className="clearfix">
        <button type="button" className="cancelbtn"><NavLink to="/" activeClassName="is-active" exact={true}>Cancel</NavLink></button>
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
  </div>
);

  export default connect(mapStateToProps)(accountPage);
