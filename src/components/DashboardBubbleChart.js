import React from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  //certainly don't need all of these
  // componentDidMount() {
  //   console.log('didmount');
  //   if (this.props.keywords) {
  //     this.generateBubbleChart();
  //   }
  // }
  //
  // componentDidUpdate() {
  //   console.log('did udate');
  //   this.clearBubbleChart();
  //   this.generateBubbleChart();
  // }

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
      const r = ((k.relevance * 1000) % 900) * 2;
      const color = translateColor(k.color);
      const word = k.word;
      return { cx: cx, cy: cy, r: r, color: color, word: word };
    });

    // nodeList.map((k, i) => {
    //   if (i % 4 === 0) {
    //     k.cx = 10 + k.r;
    //     k.cy = k.cy + k.r / 2;
    //   } else {
    //     k.cx = nodeList[i - 1].cx + nodeList[i - 1].r + k.r + 5;
    //     k.cy = k.cy + k.r / 2;
    //   }
    //
    //   if (i >= 4 && i <= 7) {
    //     k.cy = k.cy + 190;
    //   } else if (i >= 8) {
    //     k.cy = k.cy + 380;
    //   }
    // });

    return nodeList.map((k, i) => {
      const divStyle = {
        background: k.color,
        height: k.r,
        width: k.r,
        marginTop: this.getRandomPosition(30, 5),
        marginBottom: this.getRandomPosition(30, 5),
        marginLeft: this.getRandomPosition(30, 5),
        marginRight: this.getRandomPosition(30, 5)
        // left: k.cx,
        // top: k.cy
      };
      return (
        <div className="bubble-div" key={i} style={divStyle}>
          <p>{k.word}</p>
        </div>
      );
    });
    //   //create svg canvas
    //   const svg = d3
    //     .select(this.refs.chartContainer)
    //     .append('svg')
    //     .attr('ref', 'canvas')
    //     .attr('height', height)
    //     .attr('width', width)
    //     .attr('id', 'chartContainer');
    //
    //   //create svg group
    //   const circleGroup = d3
    //     .select('#chartContainer')
    //     .selectAll(this.refs.keyword)
    //     .data(nodeList)
    //     .enter()
    //     .append('g');
    //   //add circle to group
    //   circleGroup
    //     .append('circle')
    //     .attr('ref', 'keyword')
    //     .attr('r', (d, i) => d.r)
    //     .style('fill', (d, i) => d.color)
    //     .attr('cx', (d, i) => d.cx)
    //     .attr('cy', (d, i) => d.cy);
    //
    //   //add text to group
    //   circleGroup
    //     .append('text')
    //     .attr('ref', 'keyword')
    //     .attr('class', 'bubble')
    //     .attr('x', (d, i) => d.cx)
    //     .attr('y', (d, i) => d.cy)
    //     .attr('text-anchor', 'middle')
    //     .text((d, i) => d.word);
    //
    //   // force.on('end', () => {
    //   //   //when force calculation ends do this:
    //   //   circleGroup.attr('cx', d => d.x).attr('cy', d => d.y);
    //   // });
    //   //
    //   // force.start;
    //
    //   // //force?  <--- HOW THE FUCK DO I DO THIS
    //   // const ticked = () => {
    //   //   //grab circles
    //   //   const updateCircle = d3
    //   //     .select('svg')
    //   //     .selectAll('circle')
    //   //     .data(nodeList);
    //   //   //update position
    //   //   updateCircle
    //   //     .enter()
    //   //     .append('circle')
    //   //     .attr('r', d => d.r)
    //   //     .merge(updateCircle)
    //   //     .attr('cx', d => d.cx)
    //   //     .attr('cy', d => d.cy);
    //   //   updateCircle.exit().remove();
    //   //   //grab text
    //   //   const updateText = d3
    //   //     .select('svg')
    //   //     .selectAll('text')
    //   //     .data(nodeList);
    //   //   //update position
    //   //   updateText
    //   //     .enter()
    //   //     .append('text')
    //   //     .attr('r', d => d.r)
    //   //     .merge(updateText)
    //   //     .attr('cx', d => d.cx)
    //   //     .attr('cy', d => d.cy);
    //   //   updateText.exit().remove();
    //   // };
    //   //
    //   // //FIGURE OUT FORCE
    //   // var simulation = d3
    //   //   .forceSimulation()
    //   //   .velocityDecay(0.2)
    //   //   .force(
    //   //     'x',
    //   //     d3
    //   //       .forceX()
    //   //       .strength(forceStrength)
    //   //       .x(center.x)
    //   //   )
    //   //   .force(
    //   //     'y',
    //   //     d3
    //   //       .forceY()
    //   //       .strength(forceStrength)
    //   //       .y(center.y)
    //   //   )
    //   //   .force('charge', d3.forceManyBody().strength(charge))
    //   //   .on('tick', ticked);
    //   // // debugger;
    //
    //   console.log(circleGroup);
    // };
    //
    // clearBubbleChart = () => {
    //   d3.selectAll('g > *').remove();
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
