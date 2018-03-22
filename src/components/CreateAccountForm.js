import React from 'react';

const CreateAccountForm = props => {
  const handleClick = event => {
    event.preventDefault();
    props.toggleLogIn();
  };

  return (
    <div className="login-panel">
      <h2>Create Account</h2>
      <form>
        <label for="firstName">FIRST NAME</label>
        <input type="text" id="firstName" />
        <label for="lastName">LAST NAME</label>
        <input type="text" id="lastName" />
        <label for="email">EMAIL</label>
        <input type="text" id="email" />
        <label for="password">PASSWORD</label>
        <input type="password" id="password" />
        <button>CONTINUE</button>
        <button onClick={event => props.toggleLogIn(event)}>CANCEL</button>
      </form>
    </div>
  );
};

export default CreateAccountForm;
