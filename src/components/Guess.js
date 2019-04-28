import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
  return (
    <div>
      <h3>Guess whether the next card will be even or odd.</h3>
      <div>
        <button 
          onClick={setGuessEven}
          style={guess === 'even' ? { border: '2px solid #43a047'} : null }
          >Even
        </button>
        {' '}
        <button 
          onClick={setGuessOdd}
          style={guess === 'odd' ? { border: '2px solid #43a047'} : null }
          >Odd
        </button>
      </div>

    </div>
  )
}
// How is component connected already? export default line, call connect to make component connector function
// pass in Guess itself to connect function
// supply mapStateToProps parameter. want guess so is destructured form gameState key, grabbing guess value from gameState obj 
// allows us to attach within an obj that is returned from () the actual guess value to props obj of guess comp
// also want to be sure can dispatch setguesE or O methods  action creators so pass in 2nd arg to connect function (mapStatetoProps param)
export default connect (
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessEven, setGuessOdd }
)(Guess);