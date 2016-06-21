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

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>There's no place like home.</h1>
                <div>{ this.props.time }</div>
            </div>
        );
    }
}

export default Home;
