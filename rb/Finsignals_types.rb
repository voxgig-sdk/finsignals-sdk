# frozen_string_literal: true

# Typed models for the Finsignals SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Classify entity data model.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] company_name
#   @return [String, nil]
#
# @!attribute [rw] credits_charged
#   @return [Float]
#
# @!attribute [rw] endpoint_name
#   @return [String]
#
# @!attribute [rw] endpoint_type
#   @return [String]
#
# @!attribute [rw] model_version
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Array]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Classify = Struct.new(
  :body,
  :company_name,
  :credits_charged,
  :endpoint_name,
  :endpoint_type,
  :model_version,
  :outputs,
  :request_id,
  :ticker,
  :title,
  keyword_init: true
)

# Request payload for Classify#create.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] company_name
#   @return [String, nil]
#
# @!attribute [rw] credits_charged
#   @return [Float]
#
# @!attribute [rw] endpoint_name
#   @return [String]
#
# @!attribute [rw] endpoint_type
#   @return [String]
#
# @!attribute [rw] model_version
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Array]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ClassifyCreateData = Struct.new(
  :body,
  :company_name,
  :credits_charged,
  :endpoint_name,
  :endpoint_type,
  :model_version,
  :outputs,
  :request_id,
  :ticker,
  :title,
  keyword_init: true
)

# Health entity data model.
class Health
end

# Request payload for Health#load.
class HealthLoadMatch
end

# Internal entity data model.
class Internal
end

# Request payload for Internal#create.
class InternalCreateData
end

# Rotation entity data model.
#
# @!attribute [rw] credits_charged
#   @return [Float]
#
# @!attribute [rw] endpoint_name
#   @return [String]
#
# @!attribute [rw] endpoint_type
#   @return [String]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] model_version
#   @return [String]
#
# @!attribute [rw] outlook_1y
#   @return [Hash]
#
# @!attribute [rw] outlook_5y
#   @return [Hash]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] trading_date
#   @return [String]
Rotation = Struct.new(
  :credits_charged,
  :endpoint_name,
  :endpoint_type,
  :generated_at,
  :model_version,
  :outlook_1y,
  :outlook_5y,
  :request_id,
  :trading_date,
  keyword_init: true
)

# Request payload for Rotation#load.
#
# @!attribute [rw] credits_charged
#   @return [Float, nil]
#
# @!attribute [rw] endpoint_name
#   @return [String, nil]
#
# @!attribute [rw] endpoint_type
#   @return [String, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] model_version
#   @return [String, nil]
#
# @!attribute [rw] outlook_1y
#   @return [Hash, nil]
#
# @!attribute [rw] outlook_5y
#   @return [Hash, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] trading_date
#   @return [String, nil]
RotationLoadMatch = Struct.new(
  :credits_charged,
  :endpoint_name,
  :endpoint_type,
  :generated_at,
  :model_version,
  :outlook_1y,
  :outlook_5y,
  :request_id,
  :trading_date,
  keyword_init: true
)

# Usage entity data model.
class Usage
end

# Request payload for Usage#load.
class UsageLoadMatch
end

