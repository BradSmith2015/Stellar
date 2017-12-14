import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import  { createStore, combineReducers} from 'redux';
import  AppRouter from './master/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { createAccount } from './Actions/usersInfo';
import { logIn, logOut } from './Actions/userState';

const store = configureStore();

//store.dispatch(createAccount({username: 'zmx', password: '480658'}));

const state = store.getState();

//console.log(state.userData);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);




ReactDOM.render(jsx, document.getElementById('app'));
