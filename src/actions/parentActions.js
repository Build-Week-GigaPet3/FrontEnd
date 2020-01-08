import { axiosWithAuth } from '../utils/'

const DATA_LOAD_START = "DATA_LOAD_START";
const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";
const CHOOSE_PET = "CHOOSE_PET";
const CREATE_PET_START = "CREATE_PET_START";
const CREATE_PET_SUCCESS = "CREATE_PET_SUCCESS";
const CREATE_PET_FAILURE = "CREATE_PET_FAILURE";

const getData = (id) => dispatch => {
      dispatch({ type: DATA_LOAD_START });
      if (id === undefined){
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



const createPet = (id, petChoice, name) => dispatch => {
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
            console.log(res)
            dispatch({ type: CREATE_PET_SUCCESS });
            dispatch(getData());
        })
        .catch(err => dispatch({ type: CREATE_PET_FAILURE, payload: err.message }))
}

const choosePet = (value) => dispatch => {
    console.log('action choose pet', value)
    dispatch({ type: CHOOSE_PET, payload: value });

}

export const parentActionTypes = {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE,
    CHOOSE_PET,
    CREATE_PET_START,
    CREATE_PET_SUCCESS,
    CREATE_PET_FAILURE
}

export const parentActionCreators = {
    getData,
    choosePet,
    createPet
}