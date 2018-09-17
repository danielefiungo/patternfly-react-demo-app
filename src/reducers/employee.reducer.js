import {
  READ_EMPLOYEES_SUCCESS,
  READ_EMPLOYEES_FAILED,
  READ_EMPLOYEES_PENDING,
  READ_EMPLOYEES_MISS_TENNANT,
  SET_EMPLOYEE
} from '../actions/actionTypes';

const initialStateEmployees = {
  list: [],
  current: undefined
};

export const requestEmployees = (
  state = initialStateEmployees,
  action = {}
) => {
  switch (action.type) {
    case READ_EMPLOYEES_PENDING:
      return { ...state, isPending: true };
    case READ_EMPLOYEES_SUCCESS:
      return { ...state, isPending: false, list: action.payload, err: false };
    case READ_EMPLOYEES_FAILED:
      return { ...state, isPending: false, list: [], err: action.payload };
    case SET_EMPLOYEE:
      return { ...state, current: action.payload.id };
    case READ_EMPLOYEES_MISS_TENNANT:
      return { ...state, err: 'no-tennant' };
    default:
      return state;
  }
};
