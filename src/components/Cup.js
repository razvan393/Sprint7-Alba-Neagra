require('normalize.css');
require('styles/App.css');

import React from 'react';

const Cup = React.createClass({
  setCupNumber: function () {
    this.props.onClick(this.props.idx);
  },

  render: function () {
    return (<div onClick={this.setCupNumber} className="square"></div>);
  }
});
export default Cup;
