import { axiosWithAuth } from '../utils/axiosWithAuth';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

const authenticateUser = (values) => dispatch => {
    dispatch({type: LOGIN_REQUEST});

    axiosWithAuth()
        .post('/login', values)
        .then(res => {
            console.log(res.data)
            const { user, token } = res.data;
            const data = {
                id: user.id,
                username: user.username,
                type: user.type
            }
            sessionStorage.setItem('token',res.data.payload)
            dispatch({type: LOGIN_SUCCESS, payload: data})
            props.history.push('/bubbles')
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
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
}

export const authActionCreators = {
    authenticateUser,
    logoutUser
}