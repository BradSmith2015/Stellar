import React from 'react';

export const logIn = (userState = true) => ({
    type: 'logIn',
    userState
});


export const logOut = (userState = false) => ({
    type: 'logOut',
    userState
});