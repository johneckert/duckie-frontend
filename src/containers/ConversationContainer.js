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
    keywords: [],
    colors: ['royal', 'gold', 'red-orange', 'aqua', 'mellow-yellow']
  };

  getKeyWords = json => {
    //assign a color to each keyword
    const keywords = json.map((keyword, index) => {
      return { ...keyword, color: this.state.colors[index % this.state.colors.length] };
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
