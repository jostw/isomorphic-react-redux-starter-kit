/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import { combineReducers } from 'redux';
import { List } from "immutable";

import { routesConfig } from '../app/config';
import { UPDATE_TIME } from '../actions';

function navigation() {
    return List([
        routesConfig.home,
        routesConfig.about
    ]);
}

function time(state = '', action) {
    switch(action.type) {
        case UPDATE_TIME:
            return action.time;
        default:
            return state;
    }
}

const indexReducer = combineReducers({ navigation, time });

export default indexReducer;
