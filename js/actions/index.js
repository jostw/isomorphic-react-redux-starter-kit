/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Action types
 */
export const UPDATE_TIME = 'UPDATE_TIME';

/*
 * Action creators
 */
export function updateTime(time) {
    return { type: UPDATE_TIME, time };
}
