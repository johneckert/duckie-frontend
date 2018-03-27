import React from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  getRandomPosition = (max, min) => Math.random() * (max - min) + min;

  generateBubbleChart = () => {
    //chart size
    const width = 754;
    const height = 650;

    const keywords = this.props.keywords.map((keyword, index) => {
      keyword.color = this.props.colors[index % this.props.colors.length];
      return keyword;
    });

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
      const cx = this.getRandomPosition(500 - k.relevance * 100, k.relevance * 100); //READO THIS LINE WHEN FORCE WORKS - FOR NOW ITS FAKED
      const cy = this.getRandomPosition(200 - k.relevance * 100, k.relevance * 100);
      const r = ((k.relevance - 1 * 1000) % 900) * 2;
      const color = translateColor(k.color);
      const word = k.word;
      return { cx: cx, cy: cy, r: r, color: color, word: word };
    });

    return nodeList.map((k, i) => {
      const divStyle = {
        background: k.color,
        height: k.r,
        width: k.r
        // left: k.cx,
        // top: k.cy
      };
      return (
        <div className="bubble-div" key={i} style={divStyle}>
          <p>{k.word}</p>
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
