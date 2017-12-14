import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux'
import configureStore from './store/store';
import  { createStore, combineReducers} from 'redux';
const store = configureStore();

//store.dispatch(createAccount({username: 'zmx', password: '480658'}));

const state = store.getState();

//console.log(state.userData);
const CurrentPage = () =>(
    <Provider store={store}>
      <Main/>
    </Provider>
)
export default CurrentPage;
