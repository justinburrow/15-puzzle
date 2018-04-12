require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import GridComponent from './GridComponent.js';
import _ from 'underscore'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      gameStarted: false,
      moves: 0,
      reset: false,
      image: '//source.unsplash.com/random/800x800',
      layout: [
      {i: '1', x: 0, y: 0, w: 1, h: 1},
      {i: '2', x: 1, y: 0, w: 1, h: 1},
      {i: '3', x: 2, y: 0, w: 1, h: 1},
      {i: '4', x: 3, y: 0, w: 1, h: 1},
      {i: '5', x: 0, y: 1, w: 1, h: 1},
      {i: '6', x: 1, y: 1, w: 1, h: 1},
      {i: '7', x: 2, y: 1, w: 1, h: 1},
      {i: '8', x: 3, y: 1, w: 1, h: 1},
      {i: '9', x: 0, y: 2, w: 1, h: 1},
      {i: '10', x: 1, y: 2, w: 1, h: 1},
      {i: '11', x: 2, y: 2, w: 1, h: 1},
      {i: '12', x: 3, y: 2, w: 1, h: 1},
      {i: '13', x: 0, y: 3, w: 1, h: 1},
      {i: '14', x: 1, y: 3, w: 1, h: 1},
      {i: '15', x: 2, y: 3, w: 1, h: 1},
      {i: '16', x: 3, y: 3, w: 1, h: 1}],
      winOrder: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    };

    // randomize x/y coords of grid layout
    let item = 0;
    let coords = [];
    while(coords.length < 16) {
      var randomX = Math.floor(Math.random()*4);
      var randomY = Math.floor(Math.random()*4);
      var newCoord = {X:randomX, Y:randomY};
      if(_.findWhere(coords, newCoord) == null) {
        this.state.layout[item].x = randomX;
        this.state.layout[item].y = randomY;
        coords.push(newCoord);
        item++;
      }
    }
  }

  render() {
    return (
      <div className="index">
        <GridComponent onRef={ref => (this.grid = ref)} layout={this.state.layout} image={this.state.image}>
        </GridComponent>
      </div>
    );
  }
  componentDidMount() {
    let that = this;
    setTimeout(function() {
      that.forceUpdate()
    }, 1000)
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
