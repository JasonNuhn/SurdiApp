import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export const addUser = (user) => {
    const promise = axios.post('http://localhost:3001/Signup', user)
    return {
        type: ADD_USER,
        payload: promise,
    };
};