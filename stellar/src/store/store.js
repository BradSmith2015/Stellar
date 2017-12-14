import { createStore, combineReducers } from 'redux';
import Creation from '../Reducers/Creation';
import Log from '../Reducers/Log';



export default () => {
    const store = createStore(
      combineReducers({
        userData: Creation,
        userState: Log
      })
    );
    return store;
  };
  