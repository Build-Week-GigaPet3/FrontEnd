import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
  } from "../actions";

  const initialData = () =>{

  }

  const initialState = {
      isLoading: false,
      error: '',
      data: initialData(),
  }

  const reducer = (state = initialState, action) => {
      switch (action.type) {
        case DATA_LOAD_START:
            return {
              ...state,
              isLoading: true
            };
          case DATA_LOAD_SUCCESS:
            console.log(action.payload)
            return {
              ...state,
              data: action.payload,
              isLoading: false
            };
          case DATA_LOAD_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
        default:
            return state;
      }
  }

  export const store = createStore(reducer, applyMiddleware(thunk));