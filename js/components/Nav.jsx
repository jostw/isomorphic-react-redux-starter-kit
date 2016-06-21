/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import React from 'react';
import { Link } from 'react-router';

import { routes } from '../app/config';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={ routes.home.path }>{ routes.home.title }</Link>
                    </li>
                    <li>
                        <Link to={ routes.about.path }>{ routes.about.title }</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
