import React from 'react';
import * as d3 from 'd3';

class BubbleChart extends React.Component {
  diameter = 500; //max bubble size
  color = d3.scale.category20b(); //color category

  bubble = d3.layout
    .pack()
    .sort(null)
    .size([this.diameter, this.diameter])
    .padding(1.5);

  svg = d3
    .select('body')
    .append('svg')
    .attr('width', this.diameter)
    .attr('height', this.diameter)
    .attr('class', 'bubble');

  data = this.props.keywords;
  //bubbles need specific format convert data to this
  nodes = this.bubble.nodes({ children: this.data }).filter(function(d) {
    return !d.children;
  });

  //setup the chart
  bubbles = this.svg
    .append('g')
    .attr('transform', 'translate(0,0)')
    .selectAll('.bubble')
    .data(this.nodes)
    .enter();

  //create the bubbles
  createBubbles = () => {
    this.bubbles
      .append('circle')
      .attr('r', d => {
        return d.r;
      })
      .attr('cx', d => {
        return d.x;
      })
      .attr('cy', d => {
        return d.y;
      })
      .style('fill', d => {
        return this.color(d.value);
      });
  };

  //format the text for each bubbles
  bubbleText = () => {
    this.bubbles
      .append('text')
      .attr('x', function(d) {
        return d.x;
      })
      .attr('y', function(d) {
        return d.y + 5;
      })
      .attr('text-anchor', 'middle')
      .text(function(d) {
        return d['Fruit'];
      })
      .style({
        fill: 'white',
        'font-family': 'Helvetica Neue, Helvetica, Arial, san-serif',
        'font-size': '12px'
      });
  };

  componentWillReceiveProps() {
    this.createBubbles();
    this.bubbleText();
  }

  render() {
    return <svg id="chart" />;
  }
}

export default BubbleChart;
