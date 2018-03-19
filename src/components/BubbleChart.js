import React from 'react';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  componentDidMount() {
    this.attemptingD3();
  }
  componentDidUpdate() {
    this.attemptingD3();
  }

  componentWillReceiveProps() {
    this.attemptingD3();
  }

  getRandomPosition = (max, min) => Math.random() * (max - min) + min;

  // buildChart() {
  //   return (
  //     <svg width="1160" height="300" id="bubbleCanvas">
  //       {this.props.keywords.map(keyword => {
  //         return (
  //           <g key={keyword.id} ref="bubbleWithText">
  //             <circle
  //               className={`${keyword.color}-bubble`}
  //               cx={this.getRandomPosition(1160 - keyword.relevance * 100, keyword.relevance * 100)}
  //               cy={this.getRandomPosition(300 - keyword.relevance * 100, keyword.relevance * 100)}
  //               r={keyword.relevance * 100}
  //               ref="bubble"
  //               fill={keyword.color}
  //             />
  //             <text x="50%" y="50%" text-anchor="middle">
  //               {keyword.text}
  //             </text>
  //           </g>
  //         );
  //       })}
  //     </svg>
  //   );
  // }

  attemptingD3 = () => {
    //chart size
    const width = 1160;
    const height = 300;
    const keywords = this.props.keywords;
    //create svg
    const svg = d3
      .select(this.refs.chartContainer)
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .append('g')
      .attr('transform', 'translate(0,0)');

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

    const createCircles = keywords => {
      const circles = svg
        .selectAll('.keyword')
        .data(keywords)
        .enter()
        .append('circle')
        .attr('ref', 'keyword')
        .attr('r', (d, i) => d.relevance * 100)
        .style('fill', (d, i) => translateColor(d.color))
        .attr('cx', (d, i) => {
          return this.getRandomPosition(1160 - d.relevance * 100, d.relevance * 100);
        })
        .attr('cy', (d, i) => {
          return this.getRandomPosition(300 - d.relevance * 100, d.relevance * 100);
        })
        .append('text', (d, i) => d.word)
        .attr('class', 'bubble');
      console.log(circles);
      return circles;
    };

    svg.append('d', createCircles(keywords));
  };

  render() {
    return <div ref="chartContainer" />;
  }
}

export default BubbleChart;
