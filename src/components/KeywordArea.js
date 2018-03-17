import React from 'react';

const KeywordArea = props => {
  return (
    <div className="keyword-area">
      {props.keywords.length > 0 ? (
        <div>
          <h2>Keywords</h2>
          <ul>
            {props.keywords
              .sort()
              .reverse()
              .map((keyword, index) => (
                <li key={index} className={props.colors[index % props.colors.length]}>
                  {keyword.word}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="keyword-area" />
      )}
    </div>
  );
};

export default KeywordArea;
