/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Index from './js/components/Index.jsx';

const app = express();

app.get('/', (req, res) => {
    const index = React.createElement(Index);

    res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(index));
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
