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
      state: null,
      isRevealed: false
    }
  },

  cup: function (winner, number, isRevealed) {
    return (
    <Cup isWinner={number === winner} isRevealed={number == isRevealed} idx={number} onClick={this.onClickCup}/>
    )
  },

  createCups: function (obj) {
    return (
      <div className="cups-holder">
        {this.cup(obj, 1, this.state.isRevealed)}
        {this.cup(obj, 2, this.state.isRevealed)}
        {this.cup(obj, 3, this.state.isRevealed)}
      </div>
    )
  },

  onClickCup: function (cupNumber) {
    this.setState({chosenCup: cupNumber, isRevealed: cupNumber});
    if(cupNumber === this.state.cupsStates) {
      this.setState({state: 'Win!', wins: this.state.wins + 1});
    } else {
      this.setState({state: 'Lose', loses: this.state.loses + 1});
    }

  },

  resetState: function () {
    this.setState({state: null, isRevealed: false});
    this.setState({cupsStates : Math.floor(Math.random()*3 +1)});
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
        <button onClick={this.resetState}>Restart</button>
        {this.createCups(cupsStates)}
        <div>{state}</div>
      </div>
    );
  }
});

export default AppComponent;
