'use strict'

const logger = require('../index')({
  host: process.env.MONGODB_CONNECTION,
  logname: 'logs'
})

test('@jmbl1685/logger [module test]', async () => {

  const _logger = await logger({ ip: '192.168.1.66', status: 200, response: { message: 'Example Logger Succesful' } })

  const response = _logger[0].info

  expect(response.ip).toBe('192.168.1.66')
  expect(response.status).toBe(200)
  expect(typeof response.status).toBe('number')
  expect(response.response.message).toBe('Example Logger Succesful')

})



