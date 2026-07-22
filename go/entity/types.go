// Typed models for the Finsignals SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Classify is the typed data model for the classify entity.
type Classify struct {
	Body *string `json:"body,omitempty"`
	CompanyName *string `json:"company_name,omitempty"`
	CreditsCharged float64 `json:"credits_charged"`
	EndpointName string `json:"endpoint_name"`
	EndpointType string `json:"endpoint_type"`
	Item []any `json:"item"`
	ModelVersion string `json:"model_version"`
	Output []any `json:"output"`
	RequestId string `json:"request_id"`
	Ticker *string `json:"ticker,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ClassifyCreateData is the typed request payload for Classify.CreateTyped.
type ClassifyCreateData struct {
	Body *string `json:"body,omitempty"`
	CompanyName *string `json:"company_name,omitempty"`
	CreditsCharged float64 `json:"credits_charged"`
	EndpointName string `json:"endpoint_name"`
	EndpointType string `json:"endpoint_type"`
	Item []any `json:"item"`
	ModelVersion string `json:"model_version"`
	Output []any `json:"output"`
	RequestId string `json:"request_id"`
	Ticker *string `json:"ticker,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Health is the typed data model for the health entity.
type Health struct {
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
}

// Internal is the typed data model for the internal entity.
type Internal struct {
}

// InternalCreateData is the typed request payload for Internal.CreateTyped.
type InternalCreateData struct {
}

// Rotation is the typed data model for the rotation entity.
type Rotation struct {
	CreditsCharged float64 `json:"credits_charged"`
	EndpointName string `json:"endpoint_name"`
	EndpointType string `json:"endpoint_type"`
	GeneratedAt string `json:"generated_at"`
	ModelVersion string `json:"model_version"`
	Outlook1y map[string]any `json:"outlook_1y"`
	Outlook5y map[string]any `json:"outlook_5y"`
	RequestId string `json:"request_id"`
	TradingDate string `json:"trading_date"`
}

// RotationLoadMatch is the typed request payload for Rotation.LoadTyped.
type RotationLoadMatch struct {
	CreditsCharged *float64 `json:"credits_charged,omitempty"`
	EndpointName *string `json:"endpoint_name,omitempty"`
	EndpointType *string `json:"endpoint_type,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	ModelVersion *string `json:"model_version,omitempty"`
	Outlook1y *map[string]any `json:"outlook_1y,omitempty"`
	Outlook5y *map[string]any `json:"outlook_5y,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
	TradingDate *string `json:"trading_date,omitempty"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
}

// UsageLoadMatch is the typed request payload for Usage.LoadTyped.
type UsageLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
