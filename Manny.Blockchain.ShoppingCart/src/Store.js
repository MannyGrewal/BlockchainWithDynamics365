import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from './CRM Blockchain/Reducers';

const middleware = applyMiddleware(thunk, promise, createLogger())
export default createStore(allReducers, composeWithDevTools(middleware));