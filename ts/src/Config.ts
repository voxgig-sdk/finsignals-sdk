
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Body",
          "type": "`$STRING`"
        },
        {
          "name": "company_name",
          "title": "Company Name",
          "type": "`$STRING`"
        },
        {
          "name": "credits_charged",
          "title": "Credits Charged",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "endpoint_name",
          "title": "Endpoint Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "endpoint_type",
          "title": "Endpoint Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "model_version",
          "title": "Model Version",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "outputs",
          "title": "Outputs",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "request_id",
          "title": "Request Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "ticker",
          "title": "Ticker",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "title": "Title",
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
              "parts": [
                "v1",
                "classify"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "x_api_key"
                ]
              }
            },
            {
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
              "parts": [
                "v1",
                "classify",
                "batch"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "batch",
                "exist": [
                  "x_api_key"
                ]
              }
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
              "parts": [
                "api",
                "health"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
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
              "parts": [
                "v1",
                "health"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
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
              "parts": [
                "internal",
                "rotation",
                "trigger"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_internal_token",
                    "orig": "x_internal_token",
                    "type": "`$STRING`",
                    "kind": "header",
                    "example": ""
                  }
                ]
              },
              "select": {
                "exist": [
                  "x_internal_token"
                ]
              }
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
          "title": "Credits Charged",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "endpoint_name",
          "title": "Endpoint Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "endpoint_type",
          "title": "Endpoint Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "generated_at",
          "title": "Generated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "model_version",
          "title": "Model Version",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "outlook_1y",
          "title": "Outlook 1y",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Data for one analysis period (1y or 5y)."
        },
        {
          "name": "outlook_5y",
          "title": "Outlook 5y",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Data for one analysis period (1y or 5y)."
        },
        {
          "name": "request_id",
          "title": "Request Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "trading_date",
          "title": "Trading Date",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "rotation",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "v1",
                "sector-rotation"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "x_api_key"
                ]
              }
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
              "parts": [
                "v1",
                "plan"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "x_api_key"
                ]
              }
            },
            {
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
              "parts": [
                "v1",
                "usage"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "x_api_key",
                    "orig": "x_api_key",
                    "type": "`$STRING`",
                    "kind": "header",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "x_api_key"
                ]
              }
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

