import React from 'react';
import Greeting from '../components/Greeting';
import KeywordArea from '../components/KeywordArea';
import ConversationButton from '../components/ConversationButton';
import UserKeywordArea from '../components/UserKeywordArea';

const UserContainer = props => {
  return (
    <div>
      <Greeting />
      <ConversationButton />
      <UserKeywordArea />
    </div>
  );
};

export default UserContainer;
