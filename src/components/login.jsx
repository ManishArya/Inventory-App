import React from 'react';
import { withRouter } from 'react-router-dom';
function Login(props) {
  function signUp() {
    props.history.push('/dashboard');
  }
  return <button onClick={signUp}>Login</button>;
}

export default withRouter(Login);
