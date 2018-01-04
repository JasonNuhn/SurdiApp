import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export const addUser = () => {
    const promise = axios.post('http://localhost:5000/Signup')
    return {
        type: ADD_USER,
        payload: promise,
    };
};