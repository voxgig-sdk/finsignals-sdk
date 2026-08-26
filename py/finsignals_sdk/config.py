# Finsignals SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "type": "`$STRING`",
          },
          {
            "name": "company_name",
            "type": "`$STRING`",
          },
          {
            "name": "credits_charged",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "endpoint_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "endpoint_type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "items",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "model_version",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "outputs",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "request_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ticker",
            "type": "`$STRING`",
          },
          {
            "name": "title",
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
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/v1/classify",
                "parts": [
                  "v1",
                  "classify",
                ],
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/v1/classify/batch",
                "parts": [
                  "v1",
                  "classify",
                  "batch",
                ],
                "select": {
                  "$action": "batch",
                  "exist": [
                    "x_api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/health",
                "parts": [
                  "api",
                  "health",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/health",
                "parts": [
                  "v1",
                  "health",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "args": {
                  "header": [
                    {
                      "example": "",
                      "kind": "header",
                      "name": "x_internal_token",
                      "orig": "x_internal_token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/internal/rotation/trigger",
                "parts": [
                  "internal",
                  "rotation",
                  "trigger",
                ],
                "select": {
                  "exist": [
                    "x_internal_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "endpoint_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "endpoint_type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "generated_at",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "model_version",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "outlook_1y",
            "req": True,
            "short": "Data for one analysis period (1y or 5y).",
            "type": "`$OBJECT`",
          },
          {
            "name": "outlook_5y",
            "req": True,
            "short": "Data for one analysis period (1y or 5y).",
            "type": "`$OBJECT`",
          },
          {
            "name": "request_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "trading_date",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/sector-rotation",
                "parts": [
                  "v1",
                  "sector-rotation",
                ],
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/plan",
                "parts": [
                  "v1",
                  "plan",
                ],
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "x_api_key",
                      "orig": "x_api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/usage",
                "parts": [
                  "v1",
                  "usage",
                ],
                "select": {
                  "exist": [
                    "x_api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
