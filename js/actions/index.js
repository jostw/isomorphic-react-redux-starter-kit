/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import fetch from 'isomorphic-fetch';

/*
 * Action types
 */
export const UPDATE_TIME = 'UPDATE_TIME';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

/*
 * Action creators
 */
export function updateTime(time) {
    return { type: UPDATE_TIME, time };
}

function requestData(url) {
    return { type: REQUEST_DATA, url };
}

function receiveData(url, json) {
    return { type: RECEIVE_DATA, url, json };
}

export function fetchData(url) {
    return dispatch => {
        dispatch(requestData(url));

        return fetch(url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch(receiveData(url, json));
        });
    };
}
