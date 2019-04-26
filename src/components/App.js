import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('this', this);
    return (
      <div>React App</div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);

  return {gameStarted: state.gameStarted };
}

const comonentConnector = connect(mapStateToProps);

export default comonentConnector(App);