import {
  READ_EMPLOYEES_PENDING,
  READ_EMPLOYEES_FAILED,
  READ_EMPLOYEES_SUCCESS,
  READ_EMPLOYEES_MISS_TENNANT,
  SET_EMPLOYEE
} from './actionTypes';

export const readEmployees = ({ id: tennantId = false } = {}) => dispatch => {
  if (!tennantId) {
    dispatch({
      type: READ_EMPLOYEES_MISS_TENNANT,
      payload: 'No tennant selected'
    });
  } else {
    dispatch({
      type: READ_EMPLOYEES_PENDING
    });
    fetch(`./rest/tenant/${tennantId}/employee`)
      .then(response => response.json())
      .then(data => dispatch({ type: READ_EMPLOYEES_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: READ_EMPLOYEES_FAILED, payload: err }));
  }
};

export const selectEmployee = employee => ({
  type: SET_EMPLOYEE,
  payload: employee
});
