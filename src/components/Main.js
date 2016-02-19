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
      loses: 0,
      state: null
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
      this.setState({state: 'Win!'});
      this.setState({wins: this.state.wins + 1});
    } else {
      this.setState({state: 'Lose'});
      this.setState({loses: this.state.loses + 1});
    }
    this.setState({cupsStates : Math.floor(Math.random()*3 +1)});
  },

  resetState: function () {
    this.setState({wins: 0, loses: 0, state: null});
  },

  render: function() {
    var cupsStates = this.state.cupsStates;
    var wins = this.state.wins;
    var loses = this.state.loses;
    var state = this.state.state;
    return (
      <div className="app">
        <span>Wins</span>
        <span> {wins} </span>
        <span>Loses</span>
        <span> {loses} </span>
        {this.createCups(cupsStates)}
        <div>{state}</div>
        <button onClick={this.resetState}>Restart</button>
      </div>
    );
  }
});

export default AppComponent;
