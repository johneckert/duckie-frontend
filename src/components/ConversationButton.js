import React from 'react';
import { Link } from 'react-router-dom';

const ConversationButton = props => {
  return (
    <Link to="/conversation">
      <button className="listen-button">GET HELP</button>
    </Link>
  );
};

export default ConversationButton;
