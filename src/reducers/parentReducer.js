import { parentActionTypes } from '../actions'



const {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE,
    CHOOSE_PET,
    CREATE_PET_START,
    CREATE_PET_SUCCESS,
    CREATE_PET_FAILURE
  } = parentActionTypes;

  // const initialData = () =>{
  //   return {}
  // }

  const initialState = {
      data: [],
      isLoading: false,
      error: '',
      petChoice: ''
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
          case CHOOSE_PET:
            return{
              ...state,
              petChoice: action.payload,
              isLoading: false
            }
          case CREATE_PET_START:
            return {
              ...state,
              isLoading: true
            };
          case CREATE_PET_SUCCESS:
            console.log('create success',action.payload)
            return {
              ...state,
              data: action.payload,
              petChoice: '',
              isLoading: false
            };
          case CREATE_PET_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
        default:
            return state;
      }
  }