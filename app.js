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
import browserSync from 'browser-sync';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match } from 'react-router';

import { port } from './config';
import { routesConfig } from './js/app/config';
import routes from './js/app/routes';
import fetch from 'isomorphic-fetch';

import Index from './js/components/Index.jsx';

const isDev = process.argv.some(arg => arg.match('dev'));
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

        fetch(url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(json => {
            const index = React.createElement(Index, { isDev, renderProps, initialState: json });

            res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(index));
        });
    });
});

/* eslint no-console: 0 */
app.listen(port.app, () => {
    console.log('Server listening on port', port.app);

    if (isDev) {
        const browserSyncServer = browserSync.create();

        browserSyncServer.init({
            logSnippet: false,
            reloadOnRestart: true,
            port: port.browserSync
        });
    }
});
