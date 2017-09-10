import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';

import math from "./js/reducers/mathReducer";
import user from "./js/reducers/userReducer"



export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger)
);