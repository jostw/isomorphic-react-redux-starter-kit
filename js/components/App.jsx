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
import { connect } from 'react-redux';

import { updateTime } from '../actions';

import Nav from './Nav.jsx';

class App extends React.Component {
    constructor() {
        super();

        this.updateTime = this.updateTime.bind(this);
    }

    render() {
        return (
            <div>
                <Nav navigation={ this.props.navigation } />
                { React.cloneElement(this.props.children, { time: this.props.time }) }
                <button onClick={ this.updateTime }>update</button>
            </div>
        );
    }

    updateTime(e) {
        e.preventDefault();

        this.props.dispatch(updateTime(new Date().toISOString()));
    }
}

function mapStateToProps(state) {
    console.log(state);

    return state;
}

export default connect(mapStateToProps)(App);
