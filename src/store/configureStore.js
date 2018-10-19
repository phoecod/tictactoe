import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import playersReducer from '../reducers/players';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (
	combineReducers ({
		players: playersReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);