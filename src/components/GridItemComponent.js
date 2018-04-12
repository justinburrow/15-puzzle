'use strict';

import React from 'react';

class GridItem extends React.Component {
  render() {
    return (
      <div key={this.props.key} className={this.props.number} style={{backgroundImage: 'url(' + this.props.image + ')'}}><span>{this.props.key}</span></div>
  )}
}

GridItem.displayName = 'GridItem';

export default GridItem;
