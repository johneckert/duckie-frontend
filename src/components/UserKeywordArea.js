import React from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

const KeywordArea = props => {
  return (
    <div className="dashboard-keyword-area">
      <div className="dashboard-keyword-header">Keywords</div>
      <BubbleChart />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    keywords: state.keywords
  };
};

export default connect(mapStateToProps)(KeywordArea);
