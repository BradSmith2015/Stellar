import React from 'react';


export const createAccount = ({username = 'admin', password = 'admin'} = {}) => ({
    type: 'creation',
    userData: {
        username,
        password
    }
});