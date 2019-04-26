import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

  if (instructionsExpanded) {
    return (
      <div>
        <h3>Instructions:</h3>
        <p>Welcome to Evens or Odds. Here's how to play: </p>
        <p>You have a normal 4-suit, 52 card deck, it is shuffled. </p>
        <p>The object is to guess whether the upcoming card will be even or odd.</p>
        <p>(Face cards don't count)</p>
        <br />
        <button onClick={collapseInstructions}>Hide Instructions</button>
      </div>  
    );
}

  return (
    <div>
      <h3>Instructions:</h3>
        <p>Welcome to Evens or Odds. Here's how to play... </p>
        <button onClick={expandInstructions}>Show Instructions</button>
    </div>
  )
}

export default connect(
  state => ({ instructionsExpanded: state.instructionsExpanded }),
  { expandInstructions, collapseInstructions}
  )(Instructions);
