[![Module Logo](https://image.ibb.co/f4cWVL/nodejs-6-569582.png)](https://www.npmjs.com/package/@jmbl1685/logger)

Logger System for Nodejs using MongoDB

[![Build Status](https://github.com/jmbl1685/nodejs-logger/workflows/build/badge.svg)](https://github.com/jmbl1685/nodejs-logger/actions)
[![Build Status](https://dev.azure.com/jmbl1685-github/github/_apis/build/status/jmbl1685.nodejs-logger?branchName=master)](https://dev.azure.com/jmbl1685-github/github/_build/latest?definitionId=1?branchName=master)
[![Build Status](https://travis-ci.org/jmbl1685/nodejs-logger.svg?branch=master)](https://travis-ci.org/jmbl1685/nodejs-logger)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jmbl1685/nodejs-logger/blob/master/LICENSE)
[![JavaScript](https://img.shields.io/badge/%3C%2F%3E-Javascript-yellow.svg)](https://github.com/jmbl1685/nodejs-logger/blob/master/dist/index.js)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://github.com/jmbl1685/nodejs-logger/blob/master/index.ts)

## Installation

```sh
$ npm install @jmbl1685/logger
```

## Quick Start

How to use the module? Easy!!

```js
'use strict'

const logger = require('@jmbl1685/logger').default({
  host: '{{your_mongo_connection_string}}',
  logname: 'logs' /* Optional */
})

// You can save anything in the log...
logger({
  ip: '192.168.1.67',
  body: {
    name: 'Juan Manuel',
    lastname: 'Batty Linero'
  },
  response: {
    message: 'User created'
  },
  ...
})

logger({
  transactionDate: Date.now(),
  ...
})

```

```js
'use strict'

import NodeLogger from '@jmbl1685/logger'

const logger = NodeLogger({
  host: '{{your_mongo_connection_string}}'
})

// You can save anything in the log...
logger({
  body: {
    name: 'Juan Manuel',
    lastname: 'Batty Linero',
    state: true,
    identification: 12345
  }
})
```

[![Module Logo](https://image.ibb.co/i6NvPf/examaple.png)](https://www.npmjs.com/package/@jmbl1685/logger)

## Used modules

- Mongoose https://github.com/Automattic/mongoose#readme

## License

[MIT](https://github.com/angular/angular.js/blob/master/LICENSE)
