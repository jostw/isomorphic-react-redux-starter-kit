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
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './app/routes';
import fetch from './app/fetch';
import configureStore from './stores/configureStore';

document.addEventListener('DOMContentLoaded', () => {
    fetch(location.pathname)
        .then(initialState => {
            const store = configureStore(initialState);

            const router = React.createElement(Router, { history: browserHistory }, routes);
            const provider = React.createElement(Provider, { store }, router);

            ReactDOM.render(provider, document.getElementById('app'));
        });
});
