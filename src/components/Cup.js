require('normalize.css');
require('styles/App.css');

import React from 'react';

const Cup = React.createClass({
  render: function () {
    return (<div onClick={() => {this.setState({chosenCup: this.props.idx});} } className="square"></div>);
  }
});
export default Cup;
