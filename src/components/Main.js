require('normalize.css');
require('styles/App.css');

import React from 'react';
import Cup from './cup';

var AppComponent = React.createClass({
  getInitialState: function () {
    return {
      cupsStates : Math.floor(Math.random()*3 +1),
      chosenCup : 0,
      wins: 0,
      loses: 0
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
    if(cupNumber === this.state.cupsStates) {
      alert('Win!');
      this.setState({wins: this.state.wins + 1});
    } else {
      alert('Lose');
      this.setState({loses: this.state.loses + 1});
    }
    this.setState({cupsStates : Math.floor(Math.random()*3 +1)});
  },

  render: function() {
    var cupsStates = this.state.cupsStates;
    var wins = this.state.wins;
    var loses = this.state.loses;
    console.log(wins, loses);
    return (
      <div className="app">
        <span>Wins</span>
        <input type="text" value={wins} />
        <span>Loses</span>
        <input type="text" value={loses} />
        {this.createCups(cupsStates)}
      </div>
    );
  }
});

export default AppComponent;
