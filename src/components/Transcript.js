import React from 'react';
import { connect } from 'react-redux';

class Transcript extends React.Component {
  tSpans = () => {
    //split transcript into spans before rendering
    return this.props.transcript.split(' ').map((tWord, i) => {
      return (
        <span key={i} id={tWord} className={this.findColor(tWord)}>
          {`${tWord} `}
        </span>
      );
    });
  };

  stripPeriod = tWord => {
    let cleanTWord;
    if (tWord[tWord.length - 1] === '.') {
      cleanTWord = tWord.slice(0, -1);
    } else {
      cleanTWord = tWord;
    }
    return cleanTWord;
  };

  findRelevantKeyword = word => {
    let relevantKeyword = this.props.keywords.find(keyword => {
      return keyword.word.toLowerCase() === word.toLowerCase();
    });
    return relevantKeyword;
  };

  findColor = tWord => {
    const cleanTWord = this.stripPeriod(tWord);
    if (this.props.keywords.length > 0) {
      const relevantKeyword = this.findRelevantKeyword(cleanTWord);
      if (relevantKeyword) {
        return relevantKeyword.color;
      } else {
        return 'white';
      }
    }
  };

  transcriptContent = () => {
    if (this.props.transcript === '' && !this.props.listening) {
      //on load
      return (
        <div className="instruction-text">
          <span>Press Start Listening to Begin.</span>
          <br />
          <br />
          <span className="instruction-text smaller">
            If you don't see text, pause for a second and let me catch up!
          </span>
        </div>
      );
    } else if (this.props.transcript === '' && this.props.listening) {
      //listening and waiting for response
      return (
        <span className="loader">
          <div className="loading-dot one" />
          <div className="loading-dot two" />
          <div className="loading-dot three" />
        </span>
      );
    } else {
      //have response
      return <div className="transcript-text">{this.tSpans()}</div>;
    }
  };

  render() {
    return <div className="transcript-box">{this.transcriptContent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    transcript: state.conversation.transcript,
    keywords: state.keywords,
    listening: state.listening
  };
};

export default connect(mapStateToProps)(Transcript);
