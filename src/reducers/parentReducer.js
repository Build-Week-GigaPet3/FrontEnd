import { parentActionTypes } from '../actions'

const {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE,
    CHOOSE_PET,
    CREATE_PET_START,
    CREATE_PET_SUCCESS,
    CREATE_PET_FAILURE,
    DELETE_PET_START,
    DELETE_PET_SUCCESS,
    DELETE_PET_FAILURE,
    EDIT_PET_START,
    EDIT_PET_SUCCESS,
    EDIT_PET_FAILURE,
    FOOD_LOAD_START,
    FOOD_LOAD_SUCCESS,
    FOOD_LOAD_FAILURE,
    LOG_LOAD_START,
    LOG_LOAD_SUCCESS,
    LOG_LOAD_FAILURE,
  } = parentActionTypes;

  // const initialData = () =>{
  //   return {}
  // }

  const initialState = {
      data: [{
        name:'',
        image:'',
      }],
      food: [
        {name: 'Fruit',
        items: ["Apples", "Oranges", "Banana"]
        },
        {name: 'Veggie',
        items: ["Carrots", "Potatoes", "Peas"]
        },
        {name: 'Grain',
        items: ["Bread", "Cereal", "Pasta"]
        },
        {name: 'Meat',
        items: ["Beef", "Chicken", "Pork"]
        },
        {name: 'Dairy',
        items: ["Cheese", "Milk", "Butter"]
        },
        {name: 'Fat',
        items: ["Pizza", "Fries", "Burgers"]
        },
        {name: 'Treat',
        items: ["Ice Cream", "Cotton Candy", "Chocolates"]
        },
      ],
      log: [
        {name: 'Fruit',
        date: [{}]
        },
        {name: 'Veggie',
        date: [{},{}]
        },
        {name: 'Grain',
        date: [{},{},{}]
        },
        {name: 'Meat',
        date: [{},{},{},{}]
        },
        {name: 'Dairy',
        date: [{},{},{},{},{}]
        },
        {name: 'Fat',
        date: [{},{},{},{},{},{}]
        },
        {name: 'Treat',
        date: [{},{},{},{},{},{},{}]
        }, 
      ],
      isLoading: false,
      error: '',
      petChoice: ''
  }

  export const parent = (state = initialState, action, index) => {
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
            console.log('create success')
            return {
              ...state,
              petChoice: '',
              isLoading: false
            };
          case CREATE_PET_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
          case DELETE_PET_START:
            return {
              ...state,
              isLoading: true
            };
          case DELETE_PET_SUCCESS:
            console.log('delete success')
            return {
              ...state,
              petChoice: '',
              isLoading: false
            };
          case DELETE_PET_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
          case EDIT_PET_START:
            return {
              ...state,
              isLoading: true
            };
          case EDIT_PET_SUCCESS:
            console.log('edit success')
            return {
              ...state,
              petChoice: '',
              isLoading: false
            };
          case EDIT_PET_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
          case FOOD_LOAD_START:
            return {
              ...state,
              isLoading: true
            };
          case FOOD_LOAD_SUCCESS:
            return {
              ...state,
              food: action.payload,
              isLoading: false
            };
          case FOOD_LOAD_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
          case LOG_LOAD_START:
            return {
              ...state,
              isLoading: true
            };
          case LOG_LOAD_SUCCESS:
            const payload = action.payload
            return {
              ...state,
              isLoading: false,
              log: [
                ...state.log,
                state.log[index].date.push({payload}) 
              ]
            };
          case LOG_LOAD_FAILURE:
            return {
              ...state,
              error: action.payload,
              isLoading: false
            };
        default:
            return state;
      }
  }