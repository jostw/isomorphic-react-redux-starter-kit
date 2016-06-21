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
import { match } from 'react-router';

import routes from './js/app/routes';
import Index from './js/components/Index.jsx';

const app = express();

app.use(express.static('public'));

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        const index = React.createElement(Index, { renderProps });

        res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(index));
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
