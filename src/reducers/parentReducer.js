import { parentActionTypes } from '../actions'



const {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
  } = parentActionTypes;

  // const initialData = () =>{
  //   return {}
  // }

  const initialState = {
      data: [],
      isLoading: false,
      error: '',
  }

  export const parent = (state = initialState, action) => {
      switch (action.type) {
        case DATA_LOAD_START:
            return {
              ...state,
              isLoading: true
            };
          case DATA_LOAD_SUCCESS:
            console.log('reducer',action.payload)
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