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
        .post('/register', values)
        .then(res => {
            const { user, token } = res.data;
            const data = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                type: user.type
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
        .post('/login', values)
        .then(res => {
            console.log(res.data)
            const { user, token } = res.data;
            const data = {
                id: user.id,
                username: user.username,
                type: user.type
            };
            sessionStorage.setItem('token',res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
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