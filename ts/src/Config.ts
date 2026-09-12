
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Finsignals',
        slug: "finsignals",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.finsignals.ai",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      classify: {
      },

      health: {
      },

      internal: {
      },

      rotation: {
      },

      usage: {
      },

    }
  }


  entity = {
    "classify": {
      "fields": [
        {
          "name": "body",
          "type": "`$STRING`"
        },
        {
          "name": "company_name",
          "type": "`$STRING`"
        },
        {
          "name": "credits_charged",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "endpoint_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "endpoint_type",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "items",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "model_version",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "outputs",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "request_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "ticker",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "name": "classify",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v1/classify",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "classify"
                }
              ],
              "select": {
                "exist": [
                  "x_api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "classify"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v1/classify/batch",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "classify"
                },
                {
                  "lit": "batch"
                }
              ],
              "select": {
                "$action": "batch",
                "exist": [
                  "x_api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "classify",
                "batch"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "health": {
      "fields": [],
      "name": "health",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/health",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "health"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "health"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/v1/health",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "health"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "health"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "internal": {
      "fields": [],
      "name": "internal",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "example": "",
                    "kind": "header",
                    "name": "x_internal_token",
                    "orig": "x_internal_token",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/internal/rotation/trigger",
              "segments": [
                {
                  "lit": "internal"
                },
                {
                  "lit": "rotation"
                },
                {
                  "lit": "trigger"
                }
              ],
              "select": {
                "exist": [
                  "x_internal_token"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "internal",
                "rotation",
                "trigger"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rotation": {
      "fields": [
        {
          "name": "credits_charged",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "endpoint_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "endpoint_type",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "generated_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "model_version",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "outlook_1y",
          "req": true,
          "short": "Data for one analysis period (1y or 5y).",
          "type": "`$OBJECT`"
        },
        {
          "name": "outlook_5y",
          "req": true,
          "short": "Data for one analysis period (1y or 5y).",
          "type": "`$OBJECT`"
        },
        {
          "name": "request_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "trading_date",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "name": "rotation",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/sector-rotation",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "sector-rotation"
                }
              ],
              "select": {
                "exist": [
                  "x_api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "sector-rotation"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "usage": {
      "fields": [],
      "name": "usage",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/plan",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "plan"
                }
              ],
              "select": {
                "exist": [
                  "x_api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "plan"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/usage",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "usage"
                }
              ],
              "select": {
                "exist": [
                  "x_api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "usage"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

