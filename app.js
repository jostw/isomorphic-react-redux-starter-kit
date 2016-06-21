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

import { routesConfig } from './js/app/config';
import routes from './js/app/routes';
import fetch from './js/app/fetch';

import Index from './js/components/Index.jsx';

const app = express();

let requestCount;
let requestTime;

app.get(routesConfig.home.path, (req, res, next) => {
    if (!req.xhr) {
        next();
        return;
    }

    requestCount++;

    res.send({ time: requestCount > 2 ? new Date() : requestTime });
});

app.get(routesConfig.about.path, (req, res, next) => {
    if (!req.xhr) {
        next();
        return;
    }

    requestCount++;

    res.send({ time: requestCount > 2 ? new Date() : requestTime });
});

app.use(express.static('public'));

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        const url = 'http://' + req.headers.host + req.url;

        requestCount = 0;
        requestTime = new Date();

        fetch(url)
            .then(initialState => {
                const index = React.createElement(Index, { renderProps, initialState });

                res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(index));
            });
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
