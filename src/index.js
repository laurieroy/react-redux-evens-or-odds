import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './index.css'




const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
console.log('store', store);

store.subscribe(() => console.log('store.getState()', store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));

