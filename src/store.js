import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import app from "./js/reducers/appReducer";
import ajax from "./js/reducers/ajaxReducer";


export default createStore(
    combineReducers({
        app,
        ajax
    }),
    {},
    composeWithDevTools(
        applyMiddleware(logger),
      )
);