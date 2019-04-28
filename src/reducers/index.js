import { combineReducers } from 'redux';
import deckReducer from './deck';
import settingsReducer from './settings';
import gameStateReducer from './gameState';

export default combineReducers({ 
  settings: settingsReducer, 
  deck: deckReducer,
  gameState: gameStateReducer
});