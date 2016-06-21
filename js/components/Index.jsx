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
import { RouterContext } from 'react-router';

class Index extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <meta charSet='utf-8' />
                    <meta httpEquiv='x-ua-compatible' content='ie=edge' />

                    <title>Isomorphic React Redux Starter Kit</title>
                    <meta name='description' content='Starter kit for isomorphic React and Redux application.' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </head>
                <body>
                    <p>Hello world! This is Isomorphic React Redux Starter Kit.</p>

                    <div id='app'>
                        <RouterContext {...this.props.renderProps} />
                    </div>

                    <script src='js/script.js'></script>
                </body>
            </html>
        );
    }
}

export default Index;
