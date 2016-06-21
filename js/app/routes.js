/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import { routesConfig } from './config';

import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';

export default [
    {
        path: routesConfig.home.path,
        component: App,
        indexRoute: { component: Home },
        childRoutes: [
            { path: routesConfig.about.path, component: About }
        ]
    }
];
