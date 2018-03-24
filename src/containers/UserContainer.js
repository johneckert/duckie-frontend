import React from 'react';
import { connect } from 'react-redux';
import Greeting from '../components/Greeting';
import KeywordArea from '../components/KeywordArea';
import ConversationButton from '../components/ConversationButton';
import UserKeywordArea from '../components/UserKeywordArea';

class UserContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <Greeting />
        <ConversationButton />
        <UserKeywordArea />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(UserContainer);
