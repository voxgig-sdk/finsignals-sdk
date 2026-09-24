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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "r": false, "t": "`$STRING`", "key$": "body", "index$": 0 }, "company_name": { "a": true, "h": "Company Name", "n": "company_name", "r": false, "t": "`$STRING`", "key$": "company_name", "index$": 1 }, "credits_charged": { "a": true, "h": "Credits Charged", "n": "credits_charged", "r": true, "t": "`$NUMBER`", "key$": "credits_charged", "index$": 2 }, "endpoint_name": { "a": true, "h": "Endpoint Name", "n": "endpoint_name", "r": true, "t": "`$STRING`", "key$": "endpoint_name", "index$": 3 }, "endpoint_type": { "a": true, "h": "Endpoint Type", "n": "endpoint_type", "r": true, "t": "`$STRING`", "key$": "endpoint_type", "index$": 4 }, "model_version": { "a": true, "h": "Model Version", "n": "model_version", "r": true, "t": "`$STRING`", "key$": "model_version", "index$": 5 }, "outputs": { "a": true, "h": "Outputs", "n": "outputs", "r": true, "t": "`$ARRAY`", "key$": "outputs", "index$": 6 }, "request_id": { "a": true, "h": "Request Id", "n": "request_id", "r": true, "t": "`$STRING`", "key$": "request_id", "index$": 7 }, "ticker": { "a": true, "h": "Ticker", "n": "ticker", "r": false, "t": "`$STRING`", "key$": "ticker", "index$": 8 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 9 } }, "name": "classify", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/classify", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_api_key", "or": "x_api_key", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/classify", "q": { "exist": ["x_api_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "classify" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/classify/batch", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_api_key", "or": "x_api_key", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/classify/batch", "q": { "$action": "batch", "exist": ["x_api_key"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "classify" }, { "lit": "batch" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "classify", "name__orig": "classify", "Name": "Classify", "name_": "classify", "name-": "classify", "NAME": "CLASSIFY", "index$": 0 }, { "active": true, "entity": "classify", "key$": "BasicClassifyFlow", "kind": "basic", "name": "BasicClassifyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "classify_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Classify', { "POST /v1/classify": { "protocol": "http", "operationId": "classify_single_v1_classify_post", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "ticker": { "type": "string", "maxLength": 20, "title": "Ticker", "default": "", "key$": "ticker" }, "company_name": { "type": "string", "maxLength": 200, "title": "Company Name", "default": "", "key$": "company_name" }, "title": { "type": "string", "maxLength": 1000, "title": "Title", "default": "", "key$": "title" }, "body": { "type": "string", "maxLength": 40000, "title": "Body", "default": "", "key$": "body" } }, "type": "object", "title": "SingleClassifyRequest", "x-ref": "#/components/schemas/SingleClassifyRequest", "index$": 1 } } } }, "responses": { "200": { "description": "Successful Response", "content": { "application/json": { "schema": { "properties": { "model_version": { "type": "string", "title": "Model Version", "key$": "model_version" }, "request_id": { "type": "string", "title": "Request Id", "key$": "request_id" }, "credits_charged": { "type": "number", "title": "Credits Charged", "key$": "credits_charged" }, "endpoint_type": { "type": "string", "title": "Endpoint Type", "key$": "endpoint_type" }, "endpoint_name": { "type": "string", "title": "Endpoint Name", "key$": "endpoint_name" }, "outputs": { "items": { "properties": { "sentiment": { "additionalProperties": true, "type": "object", "title": "Sentiment" }, "quality": { "additionalProperties": true, "type": "object", "title": "Quality" }, "directionality": { "additionalProperties": true, "type": "object", "title": "Directionality" }, "post_type": { "additionalProperties": true, "type": "object", "title": "Post Type" }, "relevance_score": { "type": "number", "title": "Relevance Score" }, "author_confidence": { "type": "number", "title": "Author Confidence" }, "sarcasm": { "type": "boolean", "title": "Sarcasm" } }, "type": "object", "required": ["sentiment", "quality", "directionality", "post_type", "relevance_score", "author_confidence", "sarcasm"], "title": "ClassificationOutput", "x-ref": "#/components/schemas/ClassificationOutput" }, "type": "array", "title": "Outputs", "key$": "outputs" } }, "type": "object", "required": ["model_version", "request_id", "credits_charged", "endpoint_type", "endpoint_name", "outputs"], "title": "ClassifyResponse", "x-ref": "#/components/schemas/ClassifyResponse", "index$": 0 } } } }, "422": { "description": "Validation Error", "content": { "application/json": { "schema": { "properties": { "detail": { "items": { "properties": { "loc": { "items": { "anyOf": [{ "type": "string" }, { "type": "integer" }] }, "type": "array", "title": "Location" }, "msg": { "type": "string", "title": "Message" }, "type": { "type": "string", "title": "Error Type" }, "input": { "title": "Input" }, "ctx": { "type": "object", "title": "Context" } }, "type": "object", "required": ["loc", "msg", "type"], "title": "ValidationError", "x-ref": "#/components/schemas/ValidationError" }, "type": "array", "title": "Detail" } }, "type": "object", "title": "HTTPValidationError", "x-ref": "#/components/schemas/HTTPValidationError" } } } } }, "parameters": [{ "name": "X-API-Key", "in": "header", "required": true, "schema": { "type": "string", "title": "X-Api-Key" }, "index$": 0 }], "securitySource": "unspecified" }, "POST /v1/classify/batch": { "protocol": "http", "operationId": "classify_batch_v1_classify_batch_post", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "items": { "items": { "properties": { "ticker": { "type": "string", "maxLength": 20, "title": "Ticker", "default": "" }, "company_name": { "type": "string", "maxLength": 200, "title": "Company Name", "default": "" }, "title": { "type": "string", "maxLength": 1000, "title": "Title", "default": "" }, "body": { "type": "string", "maxLength": 40000, "title": "Body", "default": "" } }, "type": "object", "title": "RedditPostInput", "x-ref": "#/components/schemas/RedditPostInput" }, "type": "array", "title": "Items" } }, "type": "object", "required": ["items"], "title": "BatchClassifyRequest", "x-ref": "#/components/schemas/BatchClassifyRequest" } } } }, "responses": { "200": { "description": "Successful Response", "content": { "application/json": { "schema": { "properties": { "model_version": { "type": "string", "title": "Model Version", "key$": "model_version" }, "request_id": { "type": "string", "title": "Request Id", "key$": "request_id" }, "credits_charged": { "type": "number", "title": "Credits Charged", "key$": "credits_charged" }, "endpoint_type": { "type": "string", "title": "Endpoint Type", "key$": "endpoint_type" }, "endpoint_name": { "type": "string", "title": "Endpoint Name", "key$": "endpoint_name" }, "outputs": { "items": { "properties": { "sentiment": { "additionalProperties": true, "type": "object", "title": "Sentiment" }, "quality": { "additionalProperties": true, "type": "object", "title": "Quality" }, "directionality": { "additionalProperties": true, "type": "object", "title": "Directionality" }, "post_type": { "additionalProperties": true, "type": "object", "title": "Post Type" }, "relevance_score": { "type": "number", "title": "Relevance Score" }, "author_confidence": { "type": "number", "title": "Author Confidence" }, "sarcasm": { "type": "boolean", "title": "Sarcasm" } }, "type": "object", "required": ["sentiment", "quality", "directionality", "post_type", "relevance_score", "author_confidence", "sarcasm"], "title": "ClassificationOutput", "x-ref": "#/components/schemas/ClassificationOutput" }, "type": "array", "title": "Outputs", "key$": "outputs" } }, "type": "object", "required": ["model_version", "request_id", "credits_charged", "endpoint_type", "endpoint_name", "outputs"], "title": "ClassifyResponse", "x-ref": "#/components/schemas/ClassifyResponse" } } } }, "422": { "description": "Validation Error", "content": { "application/json": { "schema": { "properties": { "detail": { "items": { "properties": { "loc": { "items": { "anyOf": [{ "type": "string" }, { "type": "integer" }] }, "type": "array", "title": "Location" }, "msg": { "type": "string", "title": "Message" }, "type": { "type": "string", "title": "Error Type" }, "input": { "title": "Input" }, "ctx": { "type": "object", "title": "Context" } }, "type": "object", "required": ["loc", "msg", "type"], "title": "ValidationError", "x-ref": "#/components/schemas/ValidationError" }, "type": "array", "title": "Detail" } }, "type": "object", "title": "HTTPValidationError", "x-ref": "#/components/schemas/HTTPValidationError" } } } } }, "parameters": [{ "name": "X-API-Key", "in": "header", "required": true, "schema": { "type": "string", "title": "X-Api-Key" }, "index$": 0 }], "securitySource": "unspecified" } });
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