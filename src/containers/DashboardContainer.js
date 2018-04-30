import React from 'react';
import { connect } from 'react-redux';
import Greeting from '../components/Greeting';
import TinyDuck from '../components/TinyDuck';
import KeywordArea from '../components/KeywordArea';
import ConversationButton from '../components/ConversationButton';
import UserKeywordArea from '../components/UserKeywordArea';
import ConversationCount from '../components/ConversationCount';

class DashboardContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <TinyDuck />
        <div className="dashboard-main-area">
          <div className="left-panel">
            <Greeting />
            <ConversationButton />
            <ConversationCount />
          </div>
          <UserKeywordArea />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(DashboardContainer);
