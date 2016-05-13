/*
 * isomorphic-react-redux-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-redux-starter-kit
 *
 * Copyright (c) 2016 jos
 * Licensed under the MIT license.
 */

'use strict';

import fs from 'fs';
import path from 'path';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    let index = fs.readFileSync(path.resolve(__dirname, 'template/index.html'))
                  .toString();

    res.send(index);
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
