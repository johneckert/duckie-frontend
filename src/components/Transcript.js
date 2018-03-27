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

  findColor = tWord => {
    //strip period off of transcript word for comparison
    let cleanTWord;
    if (tWord[tWord.length - 1] === '.') {
      cleanTWord = tWord.slice(0, -1);
    } else {
      cleanTWord = tWord;
    }
    //find if word is a keyword, if its return color for className of span
    if (this.props.keywords.length > 0) {
      let relevantKeyword = this.props.keywords.find(kw => {
        return kw.word.toLowerCase() === cleanTWord.toLowerCase();
      });
      if (relevantKeyword) {
        return relevantKeyword.color;
      } else {
        return 'white';
      }
    }
  };

  render() {
    return (
      <div className="transcript-box">
        {this.props.transcript === '' ? (
          <div className="instruction-text">Press Start Listening to Begin</div>
        ) : (
          <div className="transcript-text">{this.tSpans()}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transcript: state.conversation.transcript,
    keywords: state.keywords
  };
};

export default connect(mapStateToProps)(Transcript);
