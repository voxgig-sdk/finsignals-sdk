

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


describe('RotationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINSIGNALS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINSIGNALS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinsignalsSDK.test()
    const ent = testsdk.Rotation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINSIGNALS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rotation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"credits_charged":{"a":true,"h":"Credits Charged","n":"credits_charged","r":true,"t":"`$NUMBER`","key$":"credits_charged","index$":0},"endpoint_name":{"a":true,"h":"Endpoint Name","n":"endpoint_name","r":true,"t":"`$STRING`","key$":"endpoint_name","index$":1},"endpoint_type":{"a":true,"h":"Endpoint Type","n":"endpoint_type","r":true,"t":"`$STRING`","key$":"endpoint_type","index$":2},"generated_at":{"a":true,"h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":3},"model_version":{"a":true,"h":"Model Version","n":"model_version","r":true,"t":"`$STRING`","key$":"model_version","index$":4},"outlook_1y":{"a":true,"h":"Outlook 1y","n":"outlook_1y","r":true,"sh":"Data for one analysis period (1y or 5y).","t":"`$OBJECT`","key$":"outlook_1y","index$":5},"outlook_5y":{"a":true,"h":"Outlook 5y","n":"outlook_5y","r":true,"sh":"Data for one analysis period (1y or 5y).","t":"`$OBJECT`","key$":"outlook_5y","index$":6},"request_id":{"a":true,"h":"Request Id","n":"request_id","r":true,"t":"`$STRING`","key$":"request_id","index$":7},"trading_date":{"a":true,"h":"Trading Date","n":"trading_date","r":true,"t":"`$STRING`","key$":"trading_date","index$":8}},"name":"rotation","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/sector-rotation","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_api_key","or":"x_api_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/sector-rotation","q":{"exist":["x_api_key"]},"r":{},"s":[{"lit":"v1"},{"lit":"sector-rotation"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"rotation","name__orig":"rotation","Name":"Rotation","name_":"rotation","name-":"rotation","NAME":"ROTATION","index$":3}, {"active":true,"entity":"rotation","key$":"BasicRotationFlow","kind":"basic","name":"BasicRotationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rotation_ref01","srcdatavar":"rotation_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rotation_ref01"}}],"index$":0}]}, 'Rotation', {"GET /v1/sector-rotation":{"protocol":"http","operationId":"get_sector_rotation_v1_sector_rotation_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"request_id":{"key$":"request_id","title":"Request Id","type":"string"},"model_version":{"key$":"model_version","title":"Model Version","type":"string"},"credits_charged":{"key$":"credits_charged","title":"Credits Charged","type":"number"},"endpoint_type":{"key$":"endpoint_type","title":"Endpoint Type","type":"string"},"endpoint_name":{"key$":"endpoint_name","title":"Endpoint Name","type":"string"},"trading_date":{"key$":"trading_date","title":"Trading Date","type":"string"},"generated_at":{"key$":"generated_at","title":"Generated At","type":"string"},"outlook_1y":{"description":"Data for one analysis period (1y or 5y).","key$":"outlook_1y","properties":{"generated_at":{"title":"Generated At","type":"string"},"industry_data":{"additionalProperties":{"properties":{"adjustment":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Adjustment"},"confidence":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Confidence"},"etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Etf"},"fmp_daily_pct":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Fmp Daily Pct"},"mom_accel":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Mom Accel"},"parent_sector_etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Parent Sector Etf"},"pe":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Pe"},"phase":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Phase"},"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_1w":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1W"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"},"rotation_score":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rotation Score"},"rs_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 12M"},"rs_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 1M"},"rs_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 3M"},"rs_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 6M"},"rs_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 9M"},"rs_vs_sector_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 1M"},"rs_vs_sector_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 3M"},"rs_vs_sector_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 6M"},"vol_ratio":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Vol Ratio"}},"title":"IndustryRow","type":"object","x-ref":"#/components/schemas/IndustryRow"},"title":"Industry Data","type":"object"},"sector_data":{"additionalProperties":{"properties":{"adjustment":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Adjustment"},"confidence":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Confidence"},"etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Etf"},"mom_accel":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Mom Accel"},"pe":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Pe"},"phase":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Phase"},"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_1w":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1W"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"},"rotation_score":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rotation Score"},"rs_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 12M"},"rs_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 1M"},"rs_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 3M"},"rs_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 6M"},"rs_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 9M"},"vol_ratio":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Vol Ratio"}},"title":"SectorRow","type":"object","x-ref":"#/components/schemas/SectorRow"},"title":"Sector Data","type":"object"},"spy_metrics":{"properties":{"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"}},"title":"SpyMetrics","type":"object","x-ref":"#/components/schemas/SpyMetrics"},"summary_md":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Summary Md"},"trading_date":{"title":"Trading Date","type":"string"},"weekly_snapshots":{"default":[],"items":{"additionalProperties":true,"type":"object"},"title":"Weekly Snapshots","type":"array"}},"required":["trading_date","generated_at","sector_data","industry_data","spy_metrics"],"title":"RotationPeriodData","type":"object","x-ref":"#/components/schemas/RotationPeriodData"},"outlook_5y":{"description":"Data for one analysis period (1y or 5y).","key$":"outlook_5y","properties":{"generated_at":{"title":"Generated At","type":"string"},"industry_data":{"additionalProperties":{"properties":{"adjustment":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Adjustment"},"confidence":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Confidence"},"etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Etf"},"fmp_daily_pct":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Fmp Daily Pct"},"mom_accel":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Mom Accel"},"parent_sector_etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Parent Sector Etf"},"pe":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Pe"},"phase":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Phase"},"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_1w":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1W"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"},"rotation_score":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rotation Score"},"rs_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 12M"},"rs_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 1M"},"rs_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 3M"},"rs_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 6M"},"rs_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 9M"},"rs_vs_sector_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 1M"},"rs_vs_sector_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 3M"},"rs_vs_sector_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs Vs Sector 6M"},"vol_ratio":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Vol Ratio"}},"title":"IndustryRow","type":"object","x-ref":"#/components/schemas/IndustryRow"},"title":"Industry Data","type":"object"},"sector_data":{"additionalProperties":{"properties":{"adjustment":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Adjustment"},"confidence":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Confidence"},"etf":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Etf"},"mom_accel":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Mom Accel"},"pe":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Pe"},"phase":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Phase"},"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_1w":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1W"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"},"rotation_score":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rotation Score"},"rs_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 12M"},"rs_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 1M"},"rs_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 3M"},"rs_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 6M"},"rs_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Rs 9M"},"vol_ratio":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Vol Ratio"}},"title":"SectorRow","type":"object","x-ref":"#/components/schemas/SectorRow"},"title":"Sector Data","type":"object"},"spy_metrics":{"properties":{"ret_12m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 12M"},"ret_1m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 1M"},"ret_3m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 3M"},"ret_6m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 6M"},"ret_9m":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Ret 9M"}},"title":"SpyMetrics","type":"object","x-ref":"#/components/schemas/SpyMetrics"},"summary_md":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Summary Md"},"trading_date":{"title":"Trading Date","type":"string"},"weekly_snapshots":{"default":[],"items":{"additionalProperties":true,"type":"object"},"title":"Weekly Snapshots","type":"array"}},"required":["trading_date","generated_at","sector_data","industry_data","spy_metrics"],"title":"RotationPeriodData","type":"object","x-ref":"#/components/schemas/RotationPeriodData"}},"type":"object","required":["request_id","model_version","credits_charged","endpoint_type","endpoint_name","trading_date","generated_at","outlook_1y","outlook_5y"],"title":"RotationResponse","x-ref":"#/components/schemas/RotationResponse","index$":0}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"},"input":{"title":"Input"},"ctx":{"type":"object","title":"Context"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError","x-ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","x-ref":"#/components/schemas/HTTPValidationError"}}}}},"parameters":[{"name":"X-API-Key","in":"header","required":true,"schema":{"type":"string","title":"X-Api-Key"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rotation_ref01_data = Object.values(setup.data.existing.rotation)[0] as any

    // LOAD
    const rotation_ref01_ent = client.Rotation()
    const rotation_ref01_match_dt0: any = {}
    const rotation_ref01_data_dt0 = (await rotation_ref01_ent.load(rotation_ref01_match_dt0)).data()
    assert(null != rotation_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rotation/RotationTestData.json')

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
    ['rotation01','rotation02','rotation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINSIGNALS_TEST_ROTATION_ENTID': idmap,
    'FINSIGNALS_TEST_LIVE': 'FALSE',
    'FINSIGNALS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINSIGNALS_TEST_ROTATION_ENTID']

  const live = 'TRUE' === env.FINSIGNALS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINSIGNALS_TEST_ROTATION_ENTID']
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
  
