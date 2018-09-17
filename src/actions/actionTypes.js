const READ_TENNANTS = 'get:tennants';
export const READ_TENNANTS_PENDING = `${READ_TENNANTS}:pending`;
export const READ_TENNANTS_SUCCESS = `${READ_TENNANTS}:ok`;
export const READ_TENNANTS_FAILED = `${READ_TENNANTS}:ko`;

const READ_EMPLOYEES = 'get:employees';
export const READ_EMPLOYEES_PENDING = `${READ_EMPLOYEES}:pending`;
export const READ_EMPLOYEES_SUCCESS = `${READ_EMPLOYEES}:ok`;
export const READ_EMPLOYEES_FAILED = `${READ_EMPLOYEES}:ko`;
export const READ_EMPLOYEES_MISS_TENNANT = `${READ_EMPLOYEES}:no-tennant`;
export const SET_TENNTANT = 'set:tennant';
// export const DELETE_TENNANT = 'delete:tennant';

export const SET_EMPLOYEE = 'set:employee';
// export const DELETE_EMPLOYEE = 'delete:tennant';
