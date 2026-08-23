# Finsignals PHP SDK



The PHP SDK for the Finsignals API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Classify()` — with named operations (`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/finsignals-sdk/releases](https://github.com/voxgig-sdk/finsignals-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'finsignals_sdk.php';

$client = new FinsignalsSDK();
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Classify record.
$created = $client->Classify()->create(["credits_charged" => 1, "endpoint_name" => "example_endpoint_name", "endpoint_type" => "example_endpoint_type", "items" => [], "model_version" => "example_model_version", "outputs" => [], "request_id" => "example_request_id"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $health = $client->Health()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = FinsignalsSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$health = $client->Health()->load();
print_r($health);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new FinsignalsSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
FINSIGNALS_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### FinsignalsSDK

```php
require_once 'finsignals_sdk.php';
$client = new FinsignalsSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = FinsignalsSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### FinsignalsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Classify` | `($data): ClassifyEntity` | Create a Classify entity instance. |
| `Health` | `($data): HealthEntity` | Create a Health entity instance. |
| `Internal` | `($data): InternalEntity` | Create an Internal entity instance. |
| `Rotation` | `($data): RotationEntity` | Create a Rotation entity instance. |
| `Usage` | `($data): UsageEntity` | Create an Usage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Classify

| Field | Description |
| --- | --- |
| `body` |  |
| `company_name` |  |
| `credits_charged` |  |
| `endpoint_name` |  |
| `endpoint_type` |  |
| `items` |  |
| `model_version` |  |
| `outputs` |  |
| `request_id` |  |
| `ticker` |  |
| `title` |  |

Operations: Create.

API path: `/v1/classify`

#### Health

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/health`

#### Internal

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/internal/rotation/trigger`

#### Rotation

| Field | Description |
| --- | --- |
| `credits_charged` |  |
| `endpoint_name` |  |
| `endpoint_type` |  |
| `generated_at` |  |
| `model_version` |  |
| `outlook_1y` | Data for one analysis period (1y or 5y). |
| `outlook_5y` | Data for one analysis period (1y or 5y). |
| `request_id` |  |
| `trading_date` |  |

Operations: Load.

API path: `/v1/sector-rotation`

#### Usage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v1/plan`



## Entities


### Classify

Create an instance: `$classify = $client->Classify();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `company_name` | `string` |  |
| `credits_charged` | `float` |  |
| `endpoint_name` | `string` |  |
| `endpoint_type` | `string` |  |
| `items` | `array` |  |
| `model_version` | `string` |  |
| `outputs` | `array` |  |
| `request_id` | `string` |  |
| `ticker` | `string` |  |
| `title` | `string` |  |

#### Example: Create

```php
$classify = $client->Classify()->create([
    "credits_charged" => null, // float
    "endpoint_name" => null, // string
    "endpoint_type" => null, // string
    "items" => null, // array
    "model_version" => null, // string
    "outputs" => null, // array
    "request_id" => null, // string
]);
```


### Health

Create an instance: `$health = $client->Health();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Health record (throws on error).
$health = $client->Health()->load();
```


### Internal

Create an instance: `$internal = $client->Internal();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$internal = $client->Internal()->create([
]);
```


### Rotation

Create an instance: `$rotation = $client->Rotation();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credits_charged` | `float` |  |
| `endpoint_name` | `string` |  |
| `endpoint_type` | `string` |  |
| `generated_at` | `string` |  |
| `model_version` | `string` |  |
| `outlook_1y` | `array` | Data for one analysis period (1y or 5y). |
| `outlook_5y` | `array` | Data for one analysis period (1y or 5y). |
| `request_id` | `string` |  |
| `trading_date` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Rotation record (throws on error).
$rotation = $client->Rotation()->load();
```


### Usage

Create an instance: `$usage = $client->Usage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Usage record (throws on error).
$usage = $client->Usage()->load();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── finsignals_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`finsignals_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$health = $client->Health();
$health->load();

// $health->data_get() now returns the health data from the last load
// $health->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
