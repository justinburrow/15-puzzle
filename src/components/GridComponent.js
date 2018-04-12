'use strict';

import React from 'react';
import GridLayout from 'react-grid-layout';

require('../../node_modules/react-grid-layout/css/styles.css');
require('../../node_modules/react-resizable/css/styles.css');
require('styles//Grid.css');

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      layout: [],
      movable: []
    }
  }

  // Determine which positions should be movable based on current empty square
  openSquareList(hiddenSquare) {
    switch (hiddenSquare) {
      case 1:  return [2, 5];
      case 2:  return [1, 3, 6];
      case 3:  return [2, 4, 7];
      case 4:  return [3, 8];
      case 5:  return [1, 6, 9];
      case 6:  return [2, 5, 7, 10];
      case 7:  return [3, 5, 8, 11];
      case 8:  return [4, 7, 12];
      case 9:  return [5, 13, 10];
      case 10:  return [6, 9, 11, 14];
      case 11:  return [7, 10, 12, 15];
      case 12:  return [8, 11, 16];
      case 13:  return [9, 14];
      case 14:  return [10, 13, 15];
      case 15:  return [11, 14, 16];
      case 16:  return [12, 15];
    }
  }

  render() {
    let that = this;


    let createGrid = function() {
      that.props.layout.forEach((item) => {
        if (item.x == 0 && item.y == 0) {
          that.state.rows.push(<div key={item.i}  className={'grid-1'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 0 && item.y == 1) {
          that.state.rows.push(<div key={item.i}  className={'grid-2'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 0 && item.y == 2) {
          that.state.rows.push(<div key={item.i}  className={'grid-3'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 0 && item.y == 3) {
          that.state.rows.push(<div key={item.i}  className={'grid-4'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 1 && item.y == 0) {
          that.state.rows.push(<div key={item.i}  className={'grid-5'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 1 && item.y == 1) {
          that.state.rows.push(<div key={item.i}  className={'grid-6'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 1 && item.y == 2) {
          that.state.rows.push(<div key={item.i}  className={'grid-7'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 1 && item.y == 3) {
          that.state.rows.push(<div key={item.i}  className={'grid-8'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 2 && item.y == 0) {
          that.state.rows.push(<div key={item.i}  className={'grid-9'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 2 && item.y == 1) {
          that.state.rows.push(<div key={item.i}  className={'grid-10'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 2 && item.y == 2) {
          that.state.rows.push(<div key={item.i}  className={'grid-11'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 2 && item.y == 3) {
          that.state.rows.push(<div key={item.i}  className={'grid-12'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 3 && item.y == 0) {
          that.state.rows.push(<div key={item.i}  className={'grid-13'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 3 && item.y == 1) {
          that.state.rows.push(<div key={item.i}  className={'grid-14'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 3 && item.y == 2) {
          that.state.rows.push(<div key={item.i}  className={'grid-15'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        } else if (item.x == 3 && item.y == 3) {
          that.state.rows.push(<div key={item.i}  className={'grid-16 hidden'} style={{backgroundImage: 'url(' + that.props.image + ')'}}><span>{item.i}</span></div>);
        }
      });
    }



    createGrid();
    
    return (
      <GridLayout
        className="layout"
        layout={this.props.layout}
        cols={4}
        rowHeight={200}
        width={800}
        margin={[0,0]}
        isResizable={false}
        maxRows={4}
      >
      {that.state.rows}
      </GridLayout>
    );
  }
}

GridComponent.displayName = 'GridComponent';
export default GridComponent;
