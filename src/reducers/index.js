import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authReducer';
import { parent } from './parentReducer';

const LOGOUT = 'LOGOUT';

const appReducer = combineReducers ({
    authentication,
    parent
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        console.log('logging out...')
        state = undefined;
        sessionStorage.clear();
    }

    return appReducer(state, action);
}

  export const store = createStore(rootReducer, applyMiddleware(thunk));