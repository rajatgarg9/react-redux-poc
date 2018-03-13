import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import app from "./js/reducers/appReducer";
import ajax from "./js/reducers/ajaxReducer";
import productCard from "./js/reducers/productCardReducer";



export default createStore(
    combineReducers({
        app,
        ajax,
        productCard
    }),
    {},
    composeWithDevTools(
        applyMiddleware(logger),
      )
);