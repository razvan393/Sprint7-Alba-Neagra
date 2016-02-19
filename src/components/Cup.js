require('normalize.css');
require('styles/App.css');

import React from 'react';

const Cup = React.createClass({
  getInitialState: function() {
    return{
      background: 'url("../images/plastic-cup.jpg")'
    }
  },

  setCupNumber: function () {
    this.props.onClick(this.props.idx);

  },

  render: function () {
    var style = {background: 'white'};
    if (this.props.isRevealed === false) {
      style.background = 'url("../images/plastic-cup.jpg")';
    } else if ((this.props.isRevealed === true)&&(this.props.isWinner === true)){
      style.background = 'url("../images/ball.jpg")';
    } else if ((this.props.isRevealed === true)&&(this.props.isWinner === false)) {
      style.background = 'white';
    }
    return (<div onClick={this.setCupNumber} style={style} className="square"></div>);
  }
});
export default Cup;
