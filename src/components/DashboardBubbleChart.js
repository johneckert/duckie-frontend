import React from 'react';
import { connect } from 'react-redux';

class BubbleChart extends React.Component {
  getRandomPosition = (max, min) => Math.random() * (max - min) + min;

  generateBubbleChart = () => {
    //assign colors to userKeywords because they are different then convo keywords.
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
      const r = (k.relevance - 1) * 150;
      const color = translateColor(k.color);
      const word = k.word;
      return { r: r, color: color, word: word };
    });

    return nodeList.map((k, i) => {
      //create style object
      const divStyle = {
        // background: k.color,
        height: k.r,
        width: k.r
        // ,
        // marginTop: `${this.getRandomPosition(40, 10)}px`,
        // marginLeft: `${this.getRandomPosition(100, 10)}px`
      };
      return (
        <div className={`convo-bubbles b-${i}`} key={i} style={divStyle}>
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
