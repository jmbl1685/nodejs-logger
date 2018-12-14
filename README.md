[![Module Logo](https://image.ibb.co/f4cWVL/nodejs-6-569582.png)](https://www.npmjs.com/package/@jmbl1685/logger)

Logger System for Nodejs using MongoDB

[![Build Status](https://dev.azure.com/jmbl1685-github/github/_apis/build/status/jmbl1685.nodejs-logger?branchName=master)](https://dev.azure.com/jmbl1685-github/github/_build/latest?definitionId=1?branchName=master)
[![Build Status](https://travis-ci.org/jmbl1685/nodejs-logger.svg?branch=master)](https://travis-ci.org/jmbl1685/nodejs-logger)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jmbl1685/nodejs-logger/blob/master/LICENSE)

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
})

logger({
  value:{
    name: 'Juan'
  },
  error: 'Not error',
  status: false,
  otherfield:{
    ...
  }
})

```

```js
'use strict'

import _logger from '@jmbl1685/logger'

const logger = _logger({
  host: 'mongodb://user:password@ds115758.xxxx.com:15758/namedb'
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
* Mongoose https://github.com/Automattic/mongoose#readme


## License

[MIT](https://github.com/angular/angular.js/blob/master/LICENSE)
