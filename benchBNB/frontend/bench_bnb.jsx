import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<h1>hello</h1>, rootEl);
});
