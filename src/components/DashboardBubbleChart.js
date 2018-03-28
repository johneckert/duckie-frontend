import React from 'react';
import { connect } from 'react-redux';

class BubbleChart extends React.Component {
  generateBubbleChart = () => {
    const translateColor = name => {
      switch (name) {
        case 'aqua':
          return '#7cdbd5';
        case 'gold':
          return '#fbb040';
        case 'red-orange':
          return '#f15a29';
        case 'royal':
          return '#4484ce';
        case 'mellow-yellow':
          return '#fedc3d';
      }
    };

    const nodeList = this.props.keywords.map(kw => {
      const radius = (kw.relevance - 1) * 150;
      const color = translateColor(kw.color);
      const word = kw.word;
      return { radius: radius, color: color, word: word };
    });

    return nodeList.map((kw, i) => {
      const divStyle = {
        height: kw.radius,
        width: kw.radius
      };
      return (
        <div className={`convo-bubbles b-${i}`} key={i} style={divStyle}>
          <p>{kw.word}</p>
        </div>
      );
    });
  };

  render() {
    return this.props.keywords ? (
      <div className="chartContainer" ref="chartContainer">
        {this.generateBubbleChart()}
      </div>
    ) : (
      <div />
    );
  }
}

const mapStateToProps = state => {
  return { keywords: state.user.userKeywords, colors: state.colors };
};

export default connect(mapStateToProps)(BubbleChart);
