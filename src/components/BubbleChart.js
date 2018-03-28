import React from 'react';
import { connect } from 'react-redux';

class BubbleChart extends React.Component {
  removeDuplicates = (array, prop) => {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  };

  getRandomValue = (max, min) => Math.random() * (max - min) + min;

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
        default:
          return '#ffffff';
      }
    };

    const nodeList = this.props.keywords.map(kw => {
      const radius = (kw.relevance - 1) * 150 + 80;
      const color = translateColor(kw.color);
      const word = kw.word;
      return { radius: radius, color: color, word: word };
    });

    return nodeList.map((kw, i) => {
      const divStyle = {
        background: kw.color,
        height: kw.radius,
        width: kw.radius,
        marginTop: `${this.getRandomValue(100, 0)}px`
      };
      if (i < 5) {
        return (
          <div className="convo-bubbles" key={i} style={divStyle}>
            <p>{kw.word}</p>
          </div>
        );
      }
    });
  };

  render() {
    const uniqKeywords = this.removeDuplicates(this.props.keywords, 'word');
    return uniqKeywords ? (
      <div className="convo-bubble-container" ref="chartContainer">
        {this.generateBubbleChart()}
      </div>
    ) : (
      <div />
    );
  }
}

const mapStateToProps = state => {
  return { keywords: state.keywords, colors: state.colors };
};

export default connect(mapStateToProps)(BubbleChart);
