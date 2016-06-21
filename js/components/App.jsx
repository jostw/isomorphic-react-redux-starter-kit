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

import Nav from './Nav.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                { this.props.children }
            </div>
        );
    }
}

export default App;
