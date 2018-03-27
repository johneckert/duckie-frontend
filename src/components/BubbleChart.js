import React from 'react';
import { connect } from 'react-redux';

class BubbleChart extends React.Component {
  removeDuplicates = (array, prop) => {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  };

  getRandomPosition = (max, min) => Math.random() * (max - min) + min;

  generateBubbleChart = () => {
    //convert color name to hex
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

    //generate node list
    const nodeList = this.props.keywords.map(k => {
      const r = (k.relevance - 1) * 150 + 80;
      const color = translateColor(k.color);
      const word = k.word;
      return { r: r, color: color, word: word };
    });

    return nodeList.map((k, i) => {
      //create style object
      const divStyle = {
        background: k.color,
        height: k.r,
        width: k.r,
        marginTop: `${this.getRandomPosition(100, 0)}px`
      };
      //return first 5 bubbles
      if (i < 6) {
        return (
          <div className="convo-bubbles" key={i} style={divStyle}>
            <p>{k.word}</p>
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
