import React from 'react';

const Header = props => {
  return (
    <div className="header">
      <h1 className="title">{'</Duckie>'}</h1>
      <ul>
        <li>
          <a href="/conversation">Conversation</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
