import React from 'react';

const KeywordArea = props => {
  return (
    <div>
      KeywordArea
      <ul>
        {props.keywords
          .sort()
          .reverse()
          .map((keyword, index) => <li key={index}>{keyword.word}</li>)}
      </ul>
    </div>
  );
};

export default KeywordArea;
