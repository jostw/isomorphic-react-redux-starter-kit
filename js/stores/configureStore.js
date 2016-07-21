/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import indexReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        indexReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware
        )
    );
}
