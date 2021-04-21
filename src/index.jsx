
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// import channelsReducer from './reducers/channels_reducer.js';
// import currentUserReducer from './reducers/current_user_reducer.js';
import messagesReducer from './reducers/messages_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';


const identityReducer = (state = null) => state;
// State and reducers
const reducers = combineReducers({
  channels: identityReducer,
  currentUser: identityReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise,logger));

const initialState = {
  messages: [],
  channels: ['general','react','paris'],
  currentUser: prompt('what is your username?')   || `anonymous${10+(Math.random()  *90)}`,
  selectedChannel: 'general'
};
// console.log(initialState.messages)
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers,initialState, middlewares)}>
    <App />
  </Provider>, root);
