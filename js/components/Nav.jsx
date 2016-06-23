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
import { List } from 'immutable';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>{
                    this.props.navigation.map(route => {
                        return (
                            <li key={ route.title }>
                                <Link to={ route.path }>{ route.title }</Link>
                            </li>
                        );
                    })
                }</ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    navigation: React.PropTypes.instanceOf(List).isRequired
};

export default Nav;
