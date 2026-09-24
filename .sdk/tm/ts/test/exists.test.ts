
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FinsignalsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FinsignalsSDK.test()
    equal(testsdk instanceof FinsignalsSDK, true,
      'FinsignalsSDK.test() must return a client synchronously')
  })

})
