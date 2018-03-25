import React from 'react';
import { connect } from 'react-redux';
import DashboardDuck from './DashboardDuck';

const ConversationCount = props => {
  const countColor = () => {
    if (props.user.numberOfConversations <= 25) {
      return 'red-orange';
    } else if (props.user.numberOfConversations >= 26 && props.user.numberOfConversations <= 50) {
      return 'aqua';
    } else {
      return 'royal';
    }
  };

  return (
    <div className="count-container">
      <div className="conversation-count-header">Conversations with the duck</div>
      <div className={`count-style ${countColor()}`}>{props.user.numberOfConversations}</div>
      <DashboardDuck className="dashboard-duck" />
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ConversationCount);
