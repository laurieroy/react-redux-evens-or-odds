import { combineReducers } from 'redux';
import deckReducer from './deck';
import settingsReducer from './settings';

export default combineReducers({ 
  settings: settingsReducer, 
  deck: deckReducer
});