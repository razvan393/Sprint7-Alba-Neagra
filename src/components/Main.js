require('normalize.css');
require('styles/App.css');

import React from 'react';
import Cup from './cup';

var AppComponent = React.createClass({
  getDefaultProps: function () {
    return {
      cupsStates : Math.floor(Math.random()*3 +1)
    }
  },

  getInitialState: function () {
    return {
      chosenCup :0
    }
  },

  cup: function (winner, number) {
    return (
    <Cup isWinner={number === winner} idx={number} onClick={this.onClickCup}/>
    )
  },

  createCups: function (obj) {
    return (
      <div className="cups-holder">
        {this.cup(obj, 1)}
        {this.cup(obj, 2)}
        {this.cup(obj, 3)}
      </div>
    )
  },
  onClickCup: function (cupNumber) {
    this.setState({chosenCup: cupNumber});
  },

  render: function() {
    var cupsStates = this.props.cupsStates;
    return (
      <div className="app">
        {this.createCups(cupsStates)}
        {this.state.chosenCup}
      </div>
    );
  }
});

export default AppComponent;
