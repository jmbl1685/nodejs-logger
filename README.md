[![Module Logo](https://image.ibb.co/f4cWVL/nodejs-6-569582.png)](https://www.npmjs.com/package/@jmbl1685/logger)

Logger System for Nodejs using MongoDB

## Installation

```sh
$ npm install @jmbl1685/logger
```

## Quick Start


How to use the module? Easy!!

```js
'use strict'

const logger = require('@jmbl1685/logger')({
  host: 'mongodb://user:password@ds115758.xxxx.com:15758/namedb',
  logname: 'logs' /* Optional */
})

logger({
  ip: '192.168.1.67',
  body: {
    name: 'Juan Manuel',
    lastname: 'Batty Linero'
  },
  response: {
    message: 'User created'
  },
  otherfield:{
    ...
  }
})
```
[![Module Logo](https://image.ibb.co/i6NvPf/examaple.png)](https://www.npmjs.com/package/@jmbl1685/logger)

## Used modules
* Mongoose https://github.com/Automattic/mongoose#readme


## License

[MIT](https://github.com/angular/angular.js/blob/master/LICENSE)
