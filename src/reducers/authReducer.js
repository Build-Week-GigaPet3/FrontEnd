import { getToken } from '../utils/getToken'
import { authActionTypes } from '../actions'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } = authActionTypes

const initialState = {
    isAuthenticated: getToken(),
    isLoading: false,
    error: ''
}

export const authentication = (state = initialState, action) =>{
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}