// Typed models for the Finsignals SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Classify {
  body?: string
  company_name?: string
  credits_charged: number
  endpoint_name: string
  endpoint_type: string
  item: any[]
  model_version: string
  output: any[]
  request_id: string
  ticker?: string
  title?: string
}

export interface ClassifyCreateData {
  body?: string
  company_name?: string
  credits_charged: number
  endpoint_name: string
  endpoint_type: string
  item: any[]
  model_version: string
  output: any[]
  request_id: string
  ticker?: string
  title?: string
}

export interface Health {
}

export interface HealthLoadMatch {
}

export interface Internal {
}

export interface InternalCreateData {
}

export interface Rotation {
  credits_charged: number
  endpoint_name: string
  endpoint_type: string
  generated_at: string
  model_version: string
  outlook_1y: Record<string, any>
  outlook_5y: Record<string, any>
  request_id: string
  trading_date: string
}

export interface RotationLoadMatch {
  credits_charged?: number
  endpoint_name?: string
  endpoint_type?: string
  generated_at?: string
  model_version?: string
  outlook_1y?: Record<string, any>
  outlook_5y?: Record<string, any>
  request_id?: string
  trading_date?: string
}

export interface Usage {
}

export interface UsageLoadMatch {
}

