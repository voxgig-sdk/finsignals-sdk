
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FinsignalsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FinsignalsSDK.test()
    equal(null !== testsdk, true)
  })

})
