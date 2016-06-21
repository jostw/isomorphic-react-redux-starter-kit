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

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>The first rule of Fight Club is: you do not talk about Fight Club.</h1>
                <div>{ this.props.time }</div>
            </div>
        );
    }
}

export default About;
