package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Finsignals",
			"slug": "finsignals",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.finsignals.ai",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"classify": map[string]any{},
				"health": map[string]any{},
				"internal": map[string]any{},
				"rotation": map[string]any{},
				"usage": map[string]any{},
			},
		},
		"entity": map[string]any{
			"classify": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "credits_charged",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "endpoint_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model_version",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "outputs",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "request_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ticker",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"name": "classify",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_api_key",
											"orig": "x_api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/classify",
								"parts": []any{
									"v1",
									"classify",
								},
								"select": map[string]any{
									"exist": []any{
										"x_api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_api_key",
											"orig": "x_api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/classify/batch",
								"parts": []any{
									"v1",
									"classify",
									"batch",
								},
								"select": map[string]any{
									"$action": "batch",
									"exist": []any{
										"x_api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"health": map[string]any{
				"fields": []any{},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/health",
								"parts": []any{
									"api",
									"health",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/health",
								"parts": []any{
									"v1",
									"health",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"internal": map[string]any{
				"fields": []any{},
				"name": "internal",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "",
											"kind": "header",
											"name": "x_internal_token",
											"orig": "x_internal_token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/internal/rotation/trigger",
								"parts": []any{
									"internal",
									"rotation",
									"trigger",
								},
								"select": map[string]any{
									"exist": []any{
										"x_internal_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rotation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "credits_charged",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "endpoint_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "generated_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_version",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "outlook_1y",
						"req": true,
						"short": "Data for one analysis period (1y or 5y).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "outlook_5y",
						"req": true,
						"short": "Data for one analysis period (1y or 5y).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "request_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trading_date",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "rotation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_api_key",
											"orig": "x_api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/sector-rotation",
								"parts": []any{
									"v1",
									"sector-rotation",
								},
								"select": map[string]any{
									"exist": []any{
										"x_api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usage": map[string]any{
				"fields": []any{},
				"name": "usage",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_api_key",
											"orig": "x_api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/plan",
								"parts": []any{
									"v1",
									"plan",
								},
								"select": map[string]any{
									"exist": []any{
										"x_api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_api_key",
											"orig": "x_api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/usage",
								"parts": []any{
									"v1",
									"usage",
								},
								"select": map[string]any{
									"exist": []any{
										"x_api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
