# Isomorphic React Redux Starter Kit

This project shows how to build an isomorphic application with React and Redux.
It is just another React starter kit includes some cool stuff.
Most of the code are written in ES6 syntax.
If you are having trouble building isomorphic application with React and Redux, maybe you can find some answers in the codebase.

## Overview

This project includes the following tools.

- [React](http://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React Router](https://github.com/reactjs/react-router/)
- [Immutable](https://facebook.github.io/immutable-js/)
- [Express](http://expressjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [Webpack](http://webpack.github.io/)
- [Babel](https://babeljs.io/)

## Getting Started

First, clone this project.

```
git clone https://github.com/jostw/isomorphic-react-redux-starter-kit.git
```

- Make sure [Node.js](https://nodejs.org/) is installed properly.

- Use ` npm start ` for watching files and developing at ` http://localhost:3000 `.

- Use ` npm run build ` for production.

## Development

- ` app.js `: server side application
- ` js/app.js `: client side application

- Following features are isomorphic, shared between server side and client side applications.
    - ` js/app/config.js `: shared configurations
    - ` js/app/routes.js `: routing settings
    - ` js/app/fetch.js `: send ajax request with [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch/)
    - ` js/components/*.jsx `: react components

## Contribute

Pull requests are welcome :)

## License

MIT
