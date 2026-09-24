# Finsignals SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Finsignals",
            "slug": "finsignals",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.finsignals.ai",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "classify": {},
                "health": {},
                "internal": {},
                "rotation": {},
                "usage": {},
            },
        },
        "entity": {
      "classify": {
        "fields": [
          {
            "name": "body",
            "title": "Body",
            "type": "`$STRING`",
          },
          {
            "name": "company_name",
            "title": "Company Name",
            "type": "`$STRING`",
          },
          {
            "name": "credits_charged",
            "title": "Credits Charged",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "endpoint_name",
            "title": "Endpoint Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "endpoint_type",
            "title": "Endpoint Type",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "model_version",
            "title": "Model Version",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "request_id",
            "title": "Request Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "ticker",
            "title": "Ticker",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
          },
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
                    "lit": "v1",
                  },
                  {
                    "lit": "classify",
                  },
                ],
                "parts": [
                  "v1",
                  "classify",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/v1/classify/batch",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "classify",
                  },
                  {
                    "lit": "batch",
                  },
                ],
                "parts": [
                  "v1",
                  "classify",
                  "batch",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "batch",
                  "exist": [
                    "x_api_key",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                    "lit": "api",
                  },
                  {
                    "lit": "health",
                  },
                ],
                "parts": [
                  "api",
                  "health",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/v1/health",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "health",
                  },
                ],
                "parts": [
                  "v1",
                  "health",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                    "lit": "internal",
                  },
                  {
                    "lit": "rotation",
                  },
                  {
                    "lit": "trigger",
                  },
                ],
                "parts": [
                  "internal",
                  "rotation",
                  "trigger",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_internal_token",
                      "orig": "x_internal_token",
                      "type": "`$STRING`",
                      "kind": "header",
                      "example": "",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_internal_token",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rotation": {
        "fields": [
          {
            "name": "credits_charged",
            "title": "Credits Charged",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "endpoint_name",
            "title": "Endpoint Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "endpoint_type",
            "title": "Endpoint Type",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "generated_at",
            "title": "Generated At",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "model_version",
            "title": "Model Version",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "outlook_1y",
            "title": "Outlook 1y",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Data for one analysis period (1y or 5y).",
          },
          {
            "name": "outlook_5y",
            "title": "Outlook 5y",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Data for one analysis period (1y or 5y).",
          },
          {
            "name": "request_id",
            "title": "Request Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "trading_date",
            "title": "Trading Date",
            "type": "`$STRING`",
            "req": True,
          },
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
                    "lit": "v1",
                  },
                  {
                    "lit": "sector-rotation",
                  },
                ],
                "parts": [
                  "v1",
                  "sector-rotation",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                    "lit": "v1",
                  },
                  {
                    "lit": "plan",
                  },
                ],
                "parts": [
                  "v1",
                  "plan",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/v1/usage",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "usage",
                  },
                ],
                "parts": [
                  "v1",
                  "usage",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
