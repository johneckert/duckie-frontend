import React, { Component } from 'react';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordArea from '../components/KeywordArea';

class ConversationContainer extends Component {
  state = {
    user: {
      id: 1,
      username: 'John'
    },
    keywords: [
      // { id: 1, word: 'javascript', relevance: 0.912565, color: 'royal' },
      // { id: 2, word: 'ruby', relevance: 0.815, color: 'mellow-yellow' },
      // { id: 3, word: 'function', relevance: 0.33333, color: 'royal' },
      // { id: 4, word: 'cheese', relevance: 0.1, color: 'red-orange' },
      // { id: 5, word: 'conditional', relevance: 0.7712565, color: 'aqua' },
      // { id: 6, word: 'variable', relevance: 0.56435, color: 'gold' }
    ], //words are for testing should be empty
    colors: ['royal', 'gold', 'red-orange', 'aqua', 'mellow-yellow']
  };

  getKeyWords = json => {
    //assign a color to each keyword
    const keywords = json.map((keyword, index) => {
      keyword.color = this.state.colors[index % this.state.colors.length];
      return keyword;
    });
    //add array of keywords to state
    this.setState({ keywords: keywords });
  };

  render() {
    return (
      <div className="conversation-container">
        <HeroDuck />
        <TranscriptionContainer
          className="transcript-item"
          user={this.state.user}
          getKeyWords={this.getKeyWords}
          colors={this.state.colors}
        />
        <KeywordArea
          className="keyword-item"
          keywords={this.state.keywords}
          colors={this.state.colors}
        />
      </div>
    );
  }
}

export default ConversationContainer;
