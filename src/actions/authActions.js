import { axiosWithAuth } from '../utils/';

const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_FAIL = 'REGISTRATION_FAIL';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

const registerUser = (values, redirect) => dispatch => {
    dispatch({type: REGISTRATION_REQUEST});

    axiosWithAuth()
        .post('/auth/register', values)
        .then(res => {
            console.log ('register user', res.data)
            const { user, token } = res.data;
            const data = {
                id: user.id,
                username: user.username,
            }
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch({type: REGISTRATION_SUCCESS, payload: data });
            redirect();
        })
        .catch(err => dispatch({type: REGISTRATION_FAIL, payload: err.message}));
}

const authenticateUser = (values, redirect) => dispatch => {
    dispatch({type: LOGIN_REQUEST});
    // console.log('authenticate user action', values)
    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            const { user, token } = res.data;
            // console.log('user logged in', res.data);
            
            // console.log('user', user.username);
            const data = {
                id: res.data.id,
                username: res.data.username,
            };
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(data.id));
            dispatch({type: LOGIN_SUCCESS, payload: data});
            redirect();
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOGIN_FAIL, payload: err.message})
        })
}

const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT});
}

export const authActionTypes = {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
}

export const authActionCreators = {
    registerUser,
    authenticateUser,
    logoutUser
}