import React from 'react';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  componentDidMount() {
    this.generateBubbleChart();
  }
  componentDidUpdate() {
    this.generateBubbleChart();
  }

  componentWillReceiveProps() {
    this.generateBubbleChart();
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

  generateBubbleChart = () => {
    //chart size
    const width = 1160;
    const height = 300;
    const keywords = this.props.keywords;
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
      const cx = this.getRandomPosition(1160 - k.relevance * 100, k.relevance * 100);
      const cy = this.getRandomPosition(300 - k.relevance * 100, k.relevance * 100);
      const r = 50 + k.relevance * 60;
      const color = translateColor(k.color);
      const word = k.word;
      return { cx: cx, cy: cy, r: r, color: color, word: word };
    });

    //create svg canvas
    const svg = d3
      .select(this.refs.chartContainer)
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .attr('id', 'chartContainer');

    //create svg group
    const circleGroup = d3
      .select('#chartContainer')
      .selectAll(this.refs.keyword) //this line is necessary WTF does it do?
      .data(nodeList)
      .enter()
      .append('g');
    //add circle to group
    circleGroup
      .append('circle')
      .attr('ref', 'keyword')
      .attr('r', (d, i) => d.r)
      .style('fill', (d, i) => d.color)
      .attr('cx', (d, i) => d.cx)
      .attr('cy', (d, i) => d.cy);

    //add text to group
    circleGroup
      .append('text')
      .attr('ref', 'keyword')
      .attr('class', 'bubble')
      .attr('x', (d, i) => d.cx)
      .attr('y', (d, i) => d.cy)
      .attr('text-anchor', 'middle')
      .text((d, i) => d.word);

    console.log(circleGroup);
  };

  render() {
    return <div ref="chartContainer" />;
  }
}

export default BubbleChart;
