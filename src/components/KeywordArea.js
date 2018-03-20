import React from 'react';
import BubbleChart from './BubbleChart';

const KeywordArea = props => {
  return (
    <div className="keyword-area">
      {props.keywords.length > 0 ? (
        <div>
          <h2>Keywords</h2>
          <BubbleChart keywords={props.keywords} />
        </div>
      ) : (
        <div className="keyword-area" />
      )}
    </div>
  );
};

export default KeywordArea;
