# Finsignals TypeScript SDK Reference

Complete API reference for the Finsignals TypeScript SDK.


## FinsignalsSDK

### Constructor

```ts
new FinsignalsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FinsignalsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FinsignalsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FinsignalsSDK` instance in test mode.


### Instance Methods

#### `Classify(data?: object)`

Create a new `Classify` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassifyEntity` instance.

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `Internal(data?: object)`

Create a new `Internal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InternalEntity` instance.

#### `Rotation(data?: object)`

Create a new `Rotation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RotationEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FinsignalsSDK.test()`.

**Returns:** `FinsignalsSDK` instance in test mode.


---

## ClassifyEntity

```ts
const classify = client.Classify()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `company_name` | `string` | No |  |
| `credits_charged` | `number` | Yes |  |
| `endpoint_name` | `string` | Yes |  |
| `endpoint_type` | `string` | Yes |  |
| `items` | `any[]` | Yes |  |
| `model_version` | `string` | Yes |  |
| `outputs` | `any[]` | Yes |  |
| `request_id` | `string` | Yes |  |
| `ticker` | `string` | No |  |
| `title` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `batch` | `/v1/classify/batch` | `client.Classify().create({ $action: 'batch', ... })` |

An action returns that action's OWN response, which is not necessarily a
Classify record — check the API definition for its shape.

```ts
const result = await client.Classify().create({
  $action: 'batch',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Classify().create({
  credits_charged: 1,
  endpoint_name: 'example_endpoint_name',
  endpoint_type: 'example_endpoint_type',
  items: [],
  model_version: 'example_model_version',
  outputs: [],
  request_id: 'example_request_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassifyEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinsignalsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthEntity

```ts
const health = client.Health()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Health().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinsignalsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InternalEntity

```ts
const internal = client.Internal()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Internal().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InternalEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinsignalsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RotationEntity

```ts
const rotation = client.Rotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits_charged` | `number` | Yes |  |
| `endpoint_name` | `string` | Yes |  |
| `endpoint_type` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `model_version` | `string` | Yes |  |
| `outlook_1y` | `Record<string, any>` | Yes | Data for one analysis period (1y or 5y). |
| `outlook_5y` | `Record<string, any>` | Yes | Data for one analysis period (1y or 5y). |
| `request_id` | `string` | Yes |  |
| `trading_date` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rotation().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RotationEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinsignalsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Usage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `FinsignalsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FinsignalsSDK({
  feature: {
    test: { active: true },
  }
})
```

