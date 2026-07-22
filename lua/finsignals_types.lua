-- Typed models for the Finsignals SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Classify
---@field body? string
---@field company_name? string
---@field credits_charged number
---@field endpoint_name string
---@field endpoint_type string
---@field item table
---@field model_version string
---@field output table
---@field request_id string
---@field ticker? string
---@field title? string

---@class ClassifyCreateData
---@field body? string
---@field company_name? string
---@field credits_charged number
---@field endpoint_name string
---@field endpoint_type string
---@field item table
---@field model_version string
---@field output table
---@field request_id string
---@field ticker? string
---@field title? string

---@class Health

---@class HealthLoadMatch

---@class Internal

---@class InternalCreateData

---@class Rotation
---@field credits_charged number
---@field endpoint_name string
---@field endpoint_type string
---@field generated_at string
---@field model_version string
---@field outlook_1y table
---@field outlook_5y table
---@field request_id string
---@field trading_date string

---@class RotationLoadMatch
---@field credits_charged? number
---@field endpoint_name? string
---@field endpoint_type? string
---@field generated_at? string
---@field model_version? string
---@field outlook_1y? table
---@field outlook_5y? table
---@field request_id? string
---@field trading_date? string

---@class Usage

---@class UsageLoadMatch

local M = {}

return M
