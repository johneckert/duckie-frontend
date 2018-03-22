import React from 'react';

const SignInForm = props => {
  const handleClick = event => {
    event.preventDefault();
    props.toggleLogIn();
  };

  return (
    <div className="login-panel">
      <h2>Sign In</h2>
      <form>
        <label for="email">EMAIL</label>
        <input type="text" id="email" />
        <label for="password">PASSWORD</label>
        <input type="password" id="password" />
        <button>SIGN IN</button>
        <button onClick={event => handleClick(event)}>CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default SignInForm;
