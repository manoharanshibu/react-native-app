import React from 'react';
import { combineReducers, createStore } from 'redux';
import { reducers } from '../reducers/reducers.js';

export const store = createStore(
    combineReducers({
        state: reducers
    })
)