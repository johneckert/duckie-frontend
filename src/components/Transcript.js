import React from 'react';
import { connect } from 'react-redux';

const Transcript = props => {
  let tSpans = props.transcript.split(' ').map((tWord, i) => {
    let relevantKeyword = props.keywords.filter(kw => {
      console.log('k', kw.word.toLowerCase(), 't', tWord.toLowerCase());
      return kw.word.toLowerCase() === tWord.toLowerCase();
    });
    console.log('keyword', relevantKeyword);
    return (
      <span
        key={i}
        className={relevantKeyword[0] ? `${relevantKeyword[0].color}` : `white`}
      >{`${tWord} `}</span>
    );
  });

  return (
    <div className="transcript-box">
      {props.transcript === '' ? (
        <div className="instruction-text">Press Start Listening to Begin</div>
      ) : (
        <div className="transcript-text">{tSpans}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    transcript: state.conversation.transcript,
    keywords: state.keywords
  };
};

export default connect(mapStateToProps)(Transcript);
