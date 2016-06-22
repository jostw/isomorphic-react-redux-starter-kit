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

import fetch from '../app/fetch';
import { updateTime } from '../actions';

import Nav from './Nav.jsx';

class App extends React.Component {
    constructor() {
        super();

        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount() {
        this.fetchData(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname === nextProps.location.pathname) {
            return;
        }

        this.fetchData(nextProps.location.pathname);
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

    fetchData(url) {
        fetch(url)
            .then(data => {
                this.props.dispatch(updateTime(data.time));
            });
    }

    updateTime(e) {
        e.preventDefault();

        this.props.dispatch(updateTime(new Date().toISOString()));
    }
}

/* eslint no-console: 0 */
function mapStateToProps(state) {
    console.log(state);

    return state;
}

App.propTypes = {
    location: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,

    children: React.PropTypes.element.isRequired,
    navigation: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    time: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
