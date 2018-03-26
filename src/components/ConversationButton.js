import React from 'react';
import { Link } from 'react-router-dom';

const ConversationButton = props => {
  return (
    <Link className="dash" to="/conversation">
      <button className="dash-button">GET HELP</button>
    </Link>
  );
};

export default ConversationButton;
