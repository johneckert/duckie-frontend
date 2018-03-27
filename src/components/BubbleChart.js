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
    //chart size
    const width = 1160;
    const height = 300;

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
      }
    };

    //generate node list
    const nodeList = this.props.keywords.map(k => {
      const cx = this.getRandomPosition(1160 - k.relevance * 100, k.relevance * 100); //READO THIS LINE WHHEN FORCE WORKS - FOR NOW ITS FAKED
      const cy = this.getRandomPosition(300 - k.relevance * 100, k.relevance * 100);
      const r = (k.relevance - 1) * 200 + 80;
      const color = translateColor(k.color);
      const word = k.word;
      return { cx: cx, cy: cy, r: r, color: color, word: word };
    });

    return nodeList.map((k, i) => {
      const divStyle = {
        background: k.color,
        height: k.r,
        width: k.r,
        left: k.cx,
        top: k.cy
      };
      return (
        <div className="convo-bubbles" key={i} style={divStyle}>
          <p>{k.word}</p>
        </div>
      );
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
