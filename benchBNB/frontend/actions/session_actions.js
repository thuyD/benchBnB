import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
  });
};


const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const login = (user) => dispatch => (
  APIUtil.login(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then((user) => dispatch(receiveCurrentUser(null)))
);

export const signup = (newUser) => dispatch => (
  APIUtil.signup(newUser).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
