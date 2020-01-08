import { axiosWithAuth } from '../utils/'

const DATA_LOAD_START = "DATA_LOAD_START";
const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

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



// const createPet = (values, id) => dispatch => {
//     dispatch({ type: CREATE_PET_START });

//     const payload = {
//         pet_name: values.name,
//         pet_type: values.type,
//         parent_id: values.id,
//         image: values.image
//     }

//     axiosWithAuth()
//         .post(`/parents/${id}/pets`, payload)
//         .then(() => {
//             dispatch({ type: CREATE_TODO_SUCCESS });
//             dispatch(fetchTodos());
//         })
//         .catch(err => dispatch({ type: CREATE_TODO_FAIL, payload: err.message }))
// }

export const parentActionTypes = {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
}

export const parentActionCreators = {
    getData,
}