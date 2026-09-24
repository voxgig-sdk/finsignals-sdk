

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FinsignalsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINSIGNALS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINSIGNALS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinsignalsSDK.test()
    const ent = testsdk.Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINSIGNALS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"usage","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/plan","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_api_key","or":"x_api_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/plan","q":{"exist":["x_api_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"plan"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/usage","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_api_key","or":"x_api_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/usage","q":{"exist":["x_api_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage","name__orig":"usage","Name":"Usage","name_":"usage","name-":"usage","NAME":"USAGE","index$":4}, {"active":true,"entity":"usage","key$":"BasicUsageFlow","kind":"basic","name":"BasicUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"usage_ref01","srcdatavar":"usage_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_ref01"}}],"index$":0}]}, 'Usage', {"GET /v1/plan":{"protocol":"http","operationId":"get_plan_v1_plan_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"},"input":{"title":"Input"},"ctx":{"type":"object","title":"Context"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"X-API-Key","in":"header","required":true,"schema":{"type":"string","title":"X-Api-Key"},"index$":0}],"securitySource":"unspecified"},"GET /v1/usage":{"protocol":"http","operationId":"get_usage_v1_usage_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"},"input":{"title":"Input"},"ctx":{"type":"object","title":"Context"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"X-API-Key","in":"header","required":true,"schema":{"type":"string","title":"X-Api-Key"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_ref01_data = Object.values(setup.data.existing.usage)[0] as any

    // LOAD
    const usage_ref01_ent = client.Usage()
    const usage_ref01_match_dt0: any = {}
    const usage_ref01_data_dt0 = (await usage_ref01_ent.load(usage_ref01_match_dt0)).data()
    assert(null != usage_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage/UsageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FinsignalsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['usage01','usage02','usage03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINSIGNALS_TEST_USAGE_ENTID': idmap,
    'FINSIGNALS_TEST_LIVE': 'FALSE',
    'FINSIGNALS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINSIGNALS_TEST_USAGE_ENTID']

  const live = 'TRUE' === env.FINSIGNALS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINSIGNALS_TEST_USAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FinsignalsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FINSIGNALS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
