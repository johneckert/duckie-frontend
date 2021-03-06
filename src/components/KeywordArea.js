import React from 'react';
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

const KeywordArea = props => {
  return (
    <div className="keyword-area">
      {props.keywords.length > 0 ? (
        <div>
          <div className="keyword-title">Keywords</div>
          <BubbleChart />
        </div>
      ) : (
        <div className="keyword-area" />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    keywords: state.keywords
  };
};

export default connect(mapStateToProps)(KeywordArea);
