import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import Instructions from './instructions';


class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck;
  }

  render() {
    return (
      <div>
        <h2>Evens or Odds</h2>
      {
        this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {gameStarted: state.gameStarted };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()), 
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => (fetchNewDeck(dispatch))
//   };
// }

const componentConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App);