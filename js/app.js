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

import App from './components/App.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const app = React.createElement(App);

    ReactDOM.render(app, document.getElementById('app'));
});
