

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


describe('InternalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINSIGNALS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINSIGNALS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinsignalsSDK.test()
    const ent = testsdk.Internal()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINSIGNALS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'internal.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"internal","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /internal/rotation/trigger","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"x_internal_token","or":"x_internal_token","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/internal/rotation/trigger","q":{"exist":["x_internal_token"]},"r":{},"s":[{"lit":"internal"},{"lit":"rotation"},{"lit":"trigger"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"internal","name__orig":"internal","Name":"Internal","name_":"internal","name-":"internal","NAME":"INTERNAL","index$":2}, {"active":true,"entity":"internal","key$":"BasicInternalFlow","kind":"basic","name":"BasicInternalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"internal_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Internal', {"POST /internal/rotation/trigger":{"protocol":"http","operationId":"trigger_rotation_internal_rotation_trigger_post","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"},"input":{"title":"Input"},"ctx":{"type":"object","title":"Context"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"x-internal-token","in":"header","required":false,"schema":{"type":"string","default":"","title":"X-Internal-Token"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const internal_ref01_ent = client.Internal()
    let internal_ref01_data = setup.data.new.internal['internal_ref01']

    internal_ref01_data = (await internal_ref01_ent.create(internal_ref01_data)).data()
    assert(null != internal_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/internal/InternalTestData.json')

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
    ['internal01','internal02','internal03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINSIGNALS_TEST_INTERNAL_ENTID': idmap,
    'FINSIGNALS_TEST_LIVE': 'FALSE',
    'FINSIGNALS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINSIGNALS_TEST_INTERNAL_ENTID']

  const live = 'TRUE' === env.FINSIGNALS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINSIGNALS_TEST_INTERNAL_ENTID']
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
  
