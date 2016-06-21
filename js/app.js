/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './app/routes.js';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(Router, { history: browserHistory }, routes),
        document.getElementById('app')
    );
});
