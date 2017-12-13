import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import { connect } from 'react-redux';
//import '../styles/styles.scss';
import { logIn } from '../Actions/userState';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';


const Header = () => (
  <div>
  <h2>STELLAR</h2>
  <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
  <NavLink to="/accountPage" activeClassName="is-active" exact={true}>create</NavLink>
  <NavLink to="/logPage" activeClassName="is-active" exact={true}>Log</NavLink>
  <NavLink to="/musicPlayer" activeClassName="is-active" exact={true}>music</NavLink>
  </div>
);




const mapStateToProps = (state) => {
  return {
    userinfo: state.userState,
    users: state.userData
  };
};



const logPage = (props) => (
  <div>
  <Header/>
  <div className="container">
  <form onSubmit={(e) => {
    e.preventDefault();

    const cookies = new Cookies();
    $.ajax({
      type: "POST",
      url: "http://10.201.30.150/requests",
      data:{target: 'login', data: [e.target.uname.value, e.target.psw.value]},
      dataType: 'json',
      cache: false,
      success: function(data){
        //console.log(data);
        if (data.status == 1){
          console.log('tets');
         console.log(cookies.get('credentials'));
         // cookies.set('credentials', data.credentials, {path: "/"});
        }

        if (data.status == 0){
          console.log('error');
        }
      },
      error:function(er){
        console.log(er);
      }
    });
    
    //console.log(log);

    e.target.reset();
  }} >
  <label><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname"   />
  <label><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" />
  <button>Login</button>
  </form>
  </div>
</div>

);













export default connect(mapStateToProps)(logPage);
