import React from 'react';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  //certainly don't need all of these
  componentDidMount() {
    console.log('didmount');
    this.generateBubbleChart();
  }

  componentDidUpdate() {
    console.log('did udate');
    this.clearBubbleChart();
    this.generateBubbleChart();
  }

  getRandomPosition = (max, min) => Math.random() * (max - min) + min;

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
      const cx = this.getRandomPosition(1160 - k.relevance * 100, k.relevance * 100); //READO THIS LINE WHHEN FORCE WORKS - FOR NOW ITS FAKED
      const cy = this.getRandomPosition(300 - k.relevance * 100, k.relevance * 100);
      const r = 50 + k.relevance * 60;
      const color = translateColor(k.color);
      const word = k.word;
      console.log('keyword: ', k.word, 'rel: ', k.relevance); //log keywords for testing
      return { cx: cx, cy: cy, r: r, color: color, word: word };
    });

    nodeList.map((k, i) => {
      if (i === 0) {
        k.cx = 10 + k.r;
        k.cy = k.cy + k.r / 2;
      } else {
        k.cx = nodeList[i - 1].cx + nodeList[i - 1].r + k.r;
        k.cy = k.cy + k.r / 2;
      }
    });

    //create svg canvas
    const svg = d3
      .select(this.refs.chartContainer)
      .append('svg')
      .attr('ref', 'canvas')
      .attr('height', height)
      .attr('width', width)
      .attr('id', 'chartContainer');

    //create svg group
    const circleGroup = d3
      .select('#chartContainer')
      .selectAll(this.refs.keyword)
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

    // force.on('end', () => {
    //   //when force calculation ends do this:
    //   circleGroup.attr('cx', d => d.x).attr('cy', d => d.y);
    // });
    //
    // force.start;

    // //force?  <--- HOW THE FUCK DO I DO THIS
    // const ticked = () => {
    //   //grab circles
    //   const updateCircle = d3
    //     .select('svg')
    //     .selectAll('circle')
    //     .data(nodeList);
    //   //update position
    //   updateCircle
    //     .enter()
    //     .append('circle')
    //     .attr('r', d => d.r)
    //     .merge(updateCircle)
    //     .attr('cx', d => d.cx)
    //     .attr('cy', d => d.cy);
    //   updateCircle.exit().remove();
    //   //grab text
    //   const updateText = d3
    //     .select('svg')
    //     .selectAll('text')
    //     .data(nodeList);
    //   //update position
    //   updateText
    //     .enter()
    //     .append('text')
    //     .attr('r', d => d.r)
    //     .merge(updateText)
    //     .attr('cx', d => d.cx)
    //     .attr('cy', d => d.cy);
    //   updateText.exit().remove();
    // };
    //
    // //FIGURE OUT FORCE
    // var simulation = d3
    //   .forceSimulation()
    //   .velocityDecay(0.2)
    //   .force(
    //     'x',
    //     d3
    //       .forceX()
    //       .strength(forceStrength)
    //       .x(center.x)
    //   )
    //   .force(
    //     'y',
    //     d3
    //       .forceY()
    //       .strength(forceStrength)
    //       .y(center.y)
    //   )
    //   .force('charge', d3.forceManyBody().strength(charge))
    //   .on('tick', ticked);
    // // debugger;

    console.log(circleGroup);
  };

  clearBubbleChart = () => {
    d3.selectAll('g > *').remove();
  };

  render() {
    return <div ref="chartContainer" />;
  }
}

export default BubbleChart;
