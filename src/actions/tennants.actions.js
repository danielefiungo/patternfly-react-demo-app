import {
  READ_TENNANTS_PENDING,
  READ_TENNANTS_FAILED,
  READ_TENNANTS_SUCCESS,
  SET_TENNTANT
} from './actionTypes';

export const readTennants = () => dispatch => {
  dispatch({
    type: READ_TENNANTS_PENDING
  });
  fetch('./rest/tenant')
    .then(response => response.json())
    .then(data => dispatch({ type: READ_TENNANTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: READ_TENNANTS_FAILED, payload: err }));
};

export const selectTennant = tennant => ({
  type: SET_TENNTANT,
  payload: tennant
});
