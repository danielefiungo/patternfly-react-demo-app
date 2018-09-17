import {
  READ_TENNANTS_SUCCESS,
  READ_TENNANTS_FAILED,
  READ_TENNANTS_PENDING,
  SET_TENNTANT
} from '../actions/actionTypes';

const initialStateTennants = {
  list: [],
  current: undefined
};

export const requestTennants = (state = initialStateTennants, action = {}) => {
  switch (action.type) {
    case READ_TENNANTS_PENDING:
      return { ...state, isPending: true };
    case READ_TENNANTS_SUCCESS:
      return { ...state, isPending: false, list: action.payload };
    case READ_TENNANTS_FAILED:
      return { ...state, isPending: false, list: [], err: action.payload };
    case SET_TENNTANT:
      return { ...state, current: action.payload.id };
    default:
      return state;
  }
};
