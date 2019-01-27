import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reducers } from '../reducers/reducers.js';

export const store = createStore(
    combineReducers({
        state: reducers
    }),
    applyMiddleware(thunk)
)