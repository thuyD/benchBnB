import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "signup") ? signup : login;

  return ({
    processForm: (user) => dispatch(processForm(user)),
    formType,
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
