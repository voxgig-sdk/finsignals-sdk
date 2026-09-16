"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RotationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FINSIGNALS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FINSIGNALS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FinsignalsSDK.test();
        const ent = testsdk.Rotation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FINSIGNALS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rotation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "credits_charged", "req": true, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "endpoint_name", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "endpoint_type", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "generated_at", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "model_version", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "outlook_1y", "req": true, "short": "Data for one analysis period (1y or 5y).", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "outlook_5y", "req": true, "short": "Data for one analysis period (1y or 5y).", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "request_id", "req": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "trading_date", "req": true, "type": "`$STRING`", "index$": 8 }], "name": "rotation", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_api_key", "orig": "x_api_key", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "GET /v1/sector-rotation", "json": "{\"operationId\":\"get_sector_rotation_v1_sector_rotation_get\",\"parameters\":[{\"in\":\"header\",\"name\":\"X-API-Key\",\"required\":true,\"schema\":{\"title\":\"X-Api-Key\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"credits_charged\":{\"title\":\"Credits Charged\",\"type\":\"number\"},\"endpoint_name\":{\"title\":\"Endpoint Name\",\"type\":\"string\"},\"endpoint_type\":{\"title\":\"Endpoint Type\",\"type\":\"string\"},\"generated_at\":{\"title\":\"Generated At\",\"type\":\"string\"},\"model_version\":{\"title\":\"Model Version\",\"type\":\"string\"},\"outlook_1y\":{\"description\":\"Data for one analysis period (1y or 5y).\",\"properties\":{\"generated_at\":{\"title\":\"Generated At\",\"type\":\"string\"},\"industry_data\":{\"additionalProperties\":{\"properties\":{\"adjustment\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Adjustment\"},\"confidence\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Confidence\"},\"etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Etf\"},\"fmp_daily_pct\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Fmp Daily Pct\"},\"mom_accel\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Mom Accel\"},\"parent_sector_etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Parent Sector Etf\"},\"pe\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Pe\"},\"phase\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Phase\"},\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_1w\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1W\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"},\"rotation_score\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rotation Score\"},\"rs_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 12M\"},\"rs_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 1M\"},\"rs_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 3M\"},\"rs_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 6M\"},\"rs_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 9M\"},\"rs_vs_sector_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 1M\"},\"rs_vs_sector_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 3M\"},\"rs_vs_sector_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 6M\"},\"vol_ratio\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Vol Ratio\"}},\"title\":\"IndustryRow\",\"type\":\"object\"},\"title\":\"Industry Data\",\"type\":\"object\"},\"sector_data\":{\"additionalProperties\":{\"properties\":{\"adjustment\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Adjustment\"},\"confidence\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Confidence\"},\"etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Etf\"},\"mom_accel\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Mom Accel\"},\"pe\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Pe\"},\"phase\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Phase\"},\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_1w\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1W\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"},\"rotation_score\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rotation Score\"},\"rs_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 12M\"},\"rs_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 1M\"},\"rs_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 3M\"},\"rs_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 6M\"},\"rs_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 9M\"},\"vol_ratio\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Vol Ratio\"}},\"title\":\"SectorRow\",\"type\":\"object\"},\"title\":\"Sector Data\",\"type\":\"object\"},\"spy_metrics\":{\"properties\":{\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"}},\"title\":\"SpyMetrics\",\"type\":\"object\"},\"summary_md\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Summary Md\"},\"trading_date\":{\"title\":\"Trading Date\",\"type\":\"string\"},\"weekly_snapshots\":{\"default\":[],\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"title\":\"Weekly Snapshots\",\"type\":\"array\"}},\"required\":[\"trading_date\",\"generated_at\",\"sector_data\",\"industry_data\",\"spy_metrics\"],\"title\":\"RotationPeriodData\",\"type\":\"object\"},\"outlook_5y\":{\"description\":\"Data for one analysis period (1y or 5y).\",\"properties\":{\"generated_at\":{\"title\":\"Generated At\",\"type\":\"string\"},\"industry_data\":{\"additionalProperties\":{\"properties\":{\"adjustment\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Adjustment\"},\"confidence\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Confidence\"},\"etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Etf\"},\"fmp_daily_pct\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Fmp Daily Pct\"},\"mom_accel\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Mom Accel\"},\"parent_sector_etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Parent Sector Etf\"},\"pe\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Pe\"},\"phase\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Phase\"},\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_1w\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1W\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"},\"rotation_score\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rotation Score\"},\"rs_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 12M\"},\"rs_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 1M\"},\"rs_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 3M\"},\"rs_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 6M\"},\"rs_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 9M\"},\"rs_vs_sector_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 1M\"},\"rs_vs_sector_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 3M\"},\"rs_vs_sector_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs Vs Sector 6M\"},\"vol_ratio\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Vol Ratio\"}},\"title\":\"IndustryRow\",\"type\":\"object\"},\"title\":\"Industry Data\",\"type\":\"object\"},\"sector_data\":{\"additionalProperties\":{\"properties\":{\"adjustment\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Adjustment\"},\"confidence\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Confidence\"},\"etf\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Etf\"},\"mom_accel\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Mom Accel\"},\"pe\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Pe\"},\"phase\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Phase\"},\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_1w\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1W\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"},\"rotation_score\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rotation Score\"},\"rs_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 12M\"},\"rs_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 1M\"},\"rs_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 3M\"},\"rs_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 6M\"},\"rs_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Rs 9M\"},\"vol_ratio\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Vol Ratio\"}},\"title\":\"SectorRow\",\"type\":\"object\"},\"title\":\"Sector Data\",\"type\":\"object\"},\"spy_metrics\":{\"properties\":{\"ret_12m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 12M\"},\"ret_1m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 1M\"},\"ret_3m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 3M\"},\"ret_6m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 6M\"},\"ret_9m\":{\"anyOf\":[{\"type\":\"number\"},{\"type\":\"null\"}],\"title\":\"Ret 9M\"}},\"title\":\"SpyMetrics\",\"type\":\"object\"},\"summary_md\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}],\"title\":\"Summary Md\"},\"trading_date\":{\"title\":\"Trading Date\",\"type\":\"string\"},\"weekly_snapshots\":{\"default\":[],\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"title\":\"Weekly Snapshots\",\"type\":\"array\"}},\"required\":[\"trading_date\",\"generated_at\",\"sector_data\",\"industry_data\",\"spy_metrics\"],\"title\":\"RotationPeriodData\",\"type\":\"object\"},\"request_id\":{\"title\":\"Request Id\",\"type\":\"string\"},\"trading_date\":{\"title\":\"Trading Date\",\"type\":\"string\"}},\"required\":[\"request_id\",\"model_version\",\"credits_charged\",\"endpoint_type\",\"endpoint_name\",\"trading_date\",\"generated_at\",\"outlook_1y\",\"outlook_5y\"],\"title\":\"RotationResponse\",\"type\":\"object\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"ctx\":{\"title\":\"Context\",\"type\":\"object\"},\"input\":{\"title\":\"Input\"},\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/sector-rotation", "segments": [{ "lit": "v1" }, { "lit": "sector-rotation" }], "select": { "exist": ["x_api_key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "rotation", "name__orig": "rotation", "Name": "Rotation", "name_": "rotation", "name-": "rotation", "NAME": "ROTATION", "index$": 3 }, { "active": true, "entity": "rotation", "key$": "BasicRotationFlow", "kind": "basic", "name": "BasicRotationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "rotation_ref01", "srcdatavar": "rotation_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rotation_ref01" } }], "index$": 0 }] }, 'Rotation');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rotation_ref01_data = Object.values(setup.data.existing.rotation)[0];
        // LOAD
        const rotation_ref01_ent = client.Rotation();
        const rotation_ref01_match_dt0 = {};
        const rotation_ref01_data_dt0 = (await rotation_ref01_ent.load(rotation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != rotation_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rotation/RotationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FinsignalsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rotation01', 'rotation02', 'rotation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FINSIGNALS_TEST_ROTATION_ENTID': idmap,
        'FINSIGNALS_TEST_LIVE': 'FALSE',
        'FINSIGNALS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FINSIGNALS_TEST_ROTATION_ENTID'];
    const live = 'TRUE' === env.FINSIGNALS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FINSIGNALS_TEST_ROTATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FinsignalsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RotationEntity.test.js.map