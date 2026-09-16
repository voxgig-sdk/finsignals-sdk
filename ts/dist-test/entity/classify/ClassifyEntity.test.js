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
(0, node_test_1.describe)('ClassifyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FINSIGNALS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FINSIGNALS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FinsignalsSDK.test();
        const ent = testsdk.Classify();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FINSIGNALS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'classify.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "body", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "company_name", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "credits_charged", "req": true, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "endpoint_name", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "endpoint_type", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "items", "req": true, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "model_version", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "outputs", "req": true, "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "request_id", "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "ticker", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 10 }], "name": "classify", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_api_key", "orig": "x_api_key", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /v1/classify", "json": "{\"operationId\":\"classify_single_v1_classify_post\",\"parameters\":[{\"in\":\"header\",\"name\":\"X-API-Key\",\"required\":true,\"schema\":{\"title\":\"X-Api-Key\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"body\":{\"default\":\"\",\"maxLength\":40000,\"title\":\"Body\",\"type\":\"string\"},\"company_name\":{\"default\":\"\",\"maxLength\":200,\"title\":\"Company Name\",\"type\":\"string\"},\"ticker\":{\"default\":\"\",\"maxLength\":20,\"title\":\"Ticker\",\"type\":\"string\"},\"title\":{\"default\":\"\",\"maxLength\":1000,\"title\":\"Title\",\"type\":\"string\"}},\"title\":\"SingleClassifyRequest\",\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"credits_charged\":{\"title\":\"Credits Charged\",\"type\":\"number\"},\"endpoint_name\":{\"title\":\"Endpoint Name\",\"type\":\"string\"},\"endpoint_type\":{\"title\":\"Endpoint Type\",\"type\":\"string\"},\"model_version\":{\"title\":\"Model Version\",\"type\":\"string\"},\"outputs\":{\"items\":{\"properties\":{\"author_confidence\":{\"title\":\"Author Confidence\",\"type\":\"number\"},\"directionality\":{\"additionalProperties\":true,\"title\":\"Directionality\",\"type\":\"object\"},\"post_type\":{\"additionalProperties\":true,\"title\":\"Post Type\",\"type\":\"object\"},\"quality\":{\"additionalProperties\":true,\"title\":\"Quality\",\"type\":\"object\"},\"relevance_score\":{\"title\":\"Relevance Score\",\"type\":\"number\"},\"sarcasm\":{\"title\":\"Sarcasm\",\"type\":\"boolean\"},\"sentiment\":{\"additionalProperties\":true,\"title\":\"Sentiment\",\"type\":\"object\"}},\"required\":[\"sentiment\",\"quality\",\"directionality\",\"post_type\",\"relevance_score\",\"author_confidence\",\"sarcasm\"],\"title\":\"ClassificationOutput\",\"type\":\"object\"},\"title\":\"Outputs\",\"type\":\"array\"},\"request_id\":{\"title\":\"Request Id\",\"type\":\"string\"}},\"required\":[\"model_version\",\"request_id\",\"credits_charged\",\"endpoint_type\",\"endpoint_name\",\"outputs\"],\"title\":\"ClassifyResponse\",\"type\":\"object\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"ctx\":{\"title\":\"Context\",\"type\":\"object\"},\"input\":{\"title\":\"Input\"},\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v1/classify", "segments": [{ "lit": "v1" }, { "lit": "classify" }], "select": { "exist": ["x_api_key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_api_key", "orig": "x_api_key", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /v1/classify/batch", "json": "{\"operationId\":\"classify_batch_v1_classify_batch_post\",\"parameters\":[{\"in\":\"header\",\"name\":\"X-API-Key\",\"required\":true,\"schema\":{\"title\":\"X-Api-Key\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"body\":{\"default\":\"\",\"maxLength\":40000,\"title\":\"Body\",\"type\":\"string\"},\"company_name\":{\"default\":\"\",\"maxLength\":200,\"title\":\"Company Name\",\"type\":\"string\"},\"ticker\":{\"default\":\"\",\"maxLength\":20,\"title\":\"Ticker\",\"type\":\"string\"},\"title\":{\"default\":\"\",\"maxLength\":1000,\"title\":\"Title\",\"type\":\"string\"}},\"title\":\"RedditPostInput\",\"type\":\"object\"},\"title\":\"Items\",\"type\":\"array\"}},\"required\":[\"items\"],\"title\":\"BatchClassifyRequest\",\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"credits_charged\":{\"title\":\"Credits Charged\",\"type\":\"number\"},\"endpoint_name\":{\"title\":\"Endpoint Name\",\"type\":\"string\"},\"endpoint_type\":{\"title\":\"Endpoint Type\",\"type\":\"string\"},\"model_version\":{\"title\":\"Model Version\",\"type\":\"string\"},\"outputs\":{\"items\":{\"properties\":{\"author_confidence\":{\"title\":\"Author Confidence\",\"type\":\"number\"},\"directionality\":{\"additionalProperties\":true,\"title\":\"Directionality\",\"type\":\"object\"},\"post_type\":{\"additionalProperties\":true,\"title\":\"Post Type\",\"type\":\"object\"},\"quality\":{\"additionalProperties\":true,\"title\":\"Quality\",\"type\":\"object\"},\"relevance_score\":{\"title\":\"Relevance Score\",\"type\":\"number\"},\"sarcasm\":{\"title\":\"Sarcasm\",\"type\":\"boolean\"},\"sentiment\":{\"additionalProperties\":true,\"title\":\"Sentiment\",\"type\":\"object\"}},\"required\":[\"sentiment\",\"quality\",\"directionality\",\"post_type\",\"relevance_score\",\"author_confidence\",\"sarcasm\"],\"title\":\"ClassificationOutput\",\"type\":\"object\"},\"title\":\"Outputs\",\"type\":\"array\"},\"request_id\":{\"title\":\"Request Id\",\"type\":\"string\"}},\"required\":[\"model_version\",\"request_id\",\"credits_charged\",\"endpoint_type\",\"endpoint_name\",\"outputs\"],\"title\":\"ClassifyResponse\",\"type\":\"object\"}}},\"description\":\"Successful Response\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"detail\":{\"items\":{\"properties\":{\"ctx\":{\"title\":\"Context\",\"type\":\"object\"},\"input\":{\"title\":\"Input\"},\"loc\":{\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"title\":\"Location\",\"type\":\"array\"},\"msg\":{\"title\":\"Message\",\"type\":\"string\"},\"type\":{\"title\":\"Error Type\",\"type\":\"string\"}},\"required\":[\"loc\",\"msg\",\"type\"],\"title\":\"ValidationError\",\"type\":\"object\"},\"title\":\"Detail\",\"type\":\"array\"}},\"title\":\"HTTPValidationError\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v1/classify/batch", "segments": [{ "lit": "v1" }, { "lit": "classify" }, { "lit": "batch" }], "select": { "$action": "batch", "exist": ["x_api_key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "classify", "name__orig": "classify", "Name": "Classify", "name_": "classify", "name-": "classify", "NAME": "CLASSIFY", "index$": 0 }, { "active": true, "entity": "classify", "key$": "BasicClassifyFlow", "kind": "basic", "name": "BasicClassifyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "classify_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Classify');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const classify_ref01_ent = client.Classify();
        let classify_ref01_data = setup.data.new.classify['classify_ref01'];
        classify_ref01_data = (await classify_ref01_ent.create(classify_ref01_data)).data();
        (0, node_assert_1.default)(null != classify_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/classify/ClassifyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FinsignalsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['classify01', 'classify02', 'classify03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FINSIGNALS_TEST_CLASSIFY_ENTID': idmap,
        'FINSIGNALS_TEST_LIVE': 'FALSE',
        'FINSIGNALS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FINSIGNALS_TEST_CLASSIFY_ENTID'];
    const live = 'TRUE' === env.FINSIGNALS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FINSIGNALS_TEST_CLASSIFY_ENTID'];
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
//# sourceMappingURL=ClassifyEntity.test.js.map