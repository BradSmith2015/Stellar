import React from 'react';



const initialUsers = [
    {
        username: 'admin',
        password: 'admin'
    }
];


export default (state = initialUsers, action) => {

    switch (action.type){
        case 'creation':
            return [
                ...state,
                action.userData
            ];  
        
        default:
            return state;
        }
};