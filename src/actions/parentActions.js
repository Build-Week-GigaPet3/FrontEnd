import { axiosWithAuth } from '../utils/'

const DATA_LOAD_START = "DATA_LOAD_START";
const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";
const CHOOSE_PET = "CHOOSE_PET";
const CREATE_PET_START = "CREATE_PET_START";
const CREATE_PET_SUCCESS = "CREATE_PET_SUCCESS";
const CREATE_PET_FAILURE = "CREATE_PET_FAILURE";
const DELETE_PET_START = "DELETE_PET_START";
const DELETE_PET_SUCCESS = "DELETE_PET_SUCCESS";
const DELETE_PET_FAILURE = "DELETE_PET_FAILURE";
const EDIT_PET_START = "EDIT_PET_START";
const EDIT_PET_SUCCESS = "EDIT_PET_SUCCESS";
const EDIT_PET_FAILURE = "EDIT_PET_FAILURE";
const FOOD_LOAD_START = "FOOD_LOAD_START";
const FOOD_LOAD_SUCCESS = "FOOD_LOAD_SUCCESS";
const FOOD_LOAD_FAILURE = "FOOD_LOAD_FAILURE";


const getData = (id) => dispatch => {
      dispatch({ type: DATA_LOAD_START });
      if (id === '' || id === undefined || id === null){
          dispatch({type: DATA_LOAD_FAILURE, payload: 'data is undefined!'})
          console.log('id is undefined!')
          return
      }
      axiosWithAuth()
        .get(`/parents/${id}/pets`)
        .then(res => {
            // console.log (DATA_LOAD_SUCCESS, res.data);

            dispatch({type: DATA_LOAD_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DATA_LOAD_FAILURE, payload: err.message})
        })
};

const createPet = (id, petChoice, name, redirect) => dispatch => {
    dispatch({ type: CREATE_PET_START });

    const payload = {
        pet_name: name,
        pet_type: petChoice,
        parent_id: id,
        image: petChoice
    }

    axiosWithAuth()
        .post(`/parents/${id}/pets`, payload)
        .then(res => {
            // console.log(res)
            dispatch({ type: CREATE_PET_SUCCESS });
            dispatch(getData(id));
            redirect();
        })
        .catch(err => dispatch({ type: CREATE_PET_FAILURE, payload: err.message }))
}

const deletePet = (petId, id) => dispatch => {
    dispatch({ type: DELETE_PET_START });

    axiosWithAuth()
        .delete(`/pets/${petId}`)
        .then(() => {
            dispatch({ type: DELETE_PET_SUCCESS });
            dispatch(getData(id));
        })
        .catch(err => dispatch({ type: DELETE_PET_FAILURE, payload: err.message }))
}

const editPet = (petId, name, id, redirect) => dispatch => {

    const payload = {
        pet_name: name
    }

    dispatch({ type: EDIT_PET_START });
    console.log(petId)
    axiosWithAuth()
        .put(`/pets/${petId}`, payload)
        .then((res) => {
            console.log('actions edit', res)
            dispatch({ type: EDIT_PET_SUCCESS });
            dispatch(getData(id));
            redirect()
        })
        .catch(err => dispatch({ type: EDIT_PET_FAILURE, payload: err.message }))
}

const choosePet = (value) => dispatch => {
    console.log('action choose pet', value)
    dispatch({ type: CHOOSE_PET, payload: value });

}

const getFoodList = (id) => dispatch => {
    // Backend listed categories of food, but did not add array to post to.
    dispatch({ type: FOOD_LOAD_START });
      if (id === '' || id === undefined || id === null){
          dispatch({type: FOOD_LOAD_FAILURE, payload: 'data is undefined!'})
          console.log('id is undefined!')
          return
      }
      axiosWithAuth()
        .get(`/food`)
        .then(res => {
            console.log('food list:', res.data)
            dispatch({type: FOOD_LOAD_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FOOD_LOAD_FAILURE, payload: err.message})
        })
}

const getFoodLog = (id) => dispatch => {
    // Backend layout needs to have a food log already created at time of pet creation
    dispatch({ type: FOOD_LOAD_START });
      if (id === '' || id === undefined || id === null){
          dispatch({type: FOOD_LOAD_FAILURE, payload: 'data is undefined!'})
          console.log('id is undefined!')
          return
      }
      axiosWithAuth()
        .get(`/parents/${id}/food/log`)
        .then(res => {
            console.log('food log:', res.data)
            dispatch({type: FOOD_LOAD_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FOOD_LOAD_FAILURE, payload: err.message})
        })
}

export const parentActionTypes = {
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
}

export const parentActionCreators = {
    getData,
    choosePet,
    createPet,
    deletePet,
    editPet,
    getFoodList,
    getFoodLog
}