import React from 'react';


export default (state = {userState: false}, action) => {
    switch(action.type){
        case 'logIn':
            return {
                userState: action.userState
            };
        case 'logOut':
            return {
                userState: action.userState
            };
        default:
            return state;
    }
};
