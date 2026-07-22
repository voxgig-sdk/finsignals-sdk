<?php
declare(strict_types=1);

// Typed models for the Finsignals SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Classify entity data model. */
class Classify
{
    public ?string $body = null;
    public ?string $company_name = null;
    public float $credits_charged;
    public string $endpoint_name;
    public string $endpoint_type;
    public array $item;
    public string $model_version;
    public array $output;
    public string $request_id;
    public ?string $ticker = null;
    public ?string $title = null;
}

/** Request payload for Classify#create. */
class ClassifyCreateData
{
    public ?string $body = null;
    public ?string $company_name = null;
    public float $credits_charged;
    public string $endpoint_name;
    public string $endpoint_type;
    public array $item;
    public string $model_version;
    public array $output;
    public string $request_id;
    public ?string $ticker = null;
    public ?string $title = null;
}

/** Health entity data model. */
class Health
{
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
}

/** Internal entity data model. */
class Internal
{
}

/** Request payload for Internal#create. */
class InternalCreateData
{
}

/** Rotation entity data model. */
class Rotation
{
    public float $credits_charged;
    public string $endpoint_name;
    public string $endpoint_type;
    public string $generated_at;
    public string $model_version;
    public array $outlook_1y;
    public array $outlook_5y;
    public string $request_id;
    public string $trading_date;
}

/** Request payload for Rotation#load. */
class RotationLoadMatch
{
    public ?float $credits_charged = null;
    public ?string $endpoint_name = null;
    public ?string $endpoint_type = null;
    public ?string $generated_at = null;
    public ?string $model_version = null;
    public ?array $outlook_1y = null;
    public ?array $outlook_5y = null;
    public ?string $request_id = null;
    public ?string $trading_date = null;
}

/** Usage entity data model. */
class Usage
{
}

/** Request payload for Usage#load. */
class UsageLoadMatch
{
}

