import React from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

const KeywordArea = props => {
  return (
    <div className="keyword-area">
      <h2>Keywords</h2>
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
