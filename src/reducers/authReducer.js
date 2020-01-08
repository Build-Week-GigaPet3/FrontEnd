import { getToken, getUser } from '../utils/'
import { authActionTypes } from '../actions'

const { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } = authActionTypes

const initialState = {
    isAuthenticated: getToken(),
    user: {
        username: '',
        id: ''
    },
    isLoading: false,
    error: '',


}

export const authentication = (state = initialState, action) =>{
    switch(action.type) {
        case LOGIN_REQUEST:
        case REGISTRATION_REQUEST:
            console.log('login request')
            return {
                ...state,
                isLoading: true
            };
        
        case LOGIN_SUCCESS:
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }

        case LOGIN_FAIL:
        case REGISTRATION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}