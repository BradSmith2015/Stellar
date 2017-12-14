import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import { connect } from 'react-redux';
//import '../styles/account.css';
import { logIn } from '../Actions/userState';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';


const Header = () => (
  <div className = 'littleHeader'>
  <h2>STELLAR</h2>
  <button type="button" id="click" className="btn btn-primary btn-lg"><NavLink to="/" activeClassName="is-active" className='account' exact={true}>Home page</NavLink></button>
  <button type="button" id="click" className="btn btn-primary btn-lg"><NavLink to="/accountPage" activeClassName="is-active" className='account' exact={true}>Sign up</NavLink></button>
  </div>
);




const mapStateToProps = (state) => {
  return {
    userinfo: state.userState,
    users: state.userData
  };
};



const logPage = (props) => (
  <div className = 'accountBody'>
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
         alert('Sign in success');
         props.history.push('/musicPlayer');
         // cookies.set('credentials', data.credentials, {path: "/"});
        }

        if (data.status == 0){
          alert('Wrong information');
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
