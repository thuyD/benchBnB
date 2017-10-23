import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
