import { axiosWithAuth } from '../utils';

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const getData = () => dispatch => {
      dispatch({ type: DATA_LOAD_START });
      axiosWithAuth()
      .get('/colors')
      .then(res => {
          console.log (DATA_LOAD_SUCCESS, res);
          dispatch({type: DATA_LOAD_SUCCESS, payload: res.data});
      })
      .catch(err => {
          console.log(err)
          dispatch({type: DATA_LOAD_FAILURE, payload: err.message})
      })
};