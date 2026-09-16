-- Finsignals SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Finsignals",
      slug = "finsignals",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.finsignals.ai",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["classify"] = {},
        ["health"] = {},
        ["internal"] = {},
        ["rotation"] = {},
        ["usage"] = {},
      },
    },
    entity = {
      ["classify"] = {
        ["fields"] = {
          {
            ["name"] = "body",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "company_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "credits_charged",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "endpoint_name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "endpoint_type",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "model_version",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "outputs",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "request_id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ticker",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "classify",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["kind"] = "header",
                      ["name"] = "x_api_key",
                      ["orig"] = "x_api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/classify",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "classify",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "x_api_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "classify",
                },
              },
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["kind"] = "header",
                      ["name"] = "x_api_key",
                      ["orig"] = "x_api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/classify/batch",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "classify",
                  },
                  {
                    ["lit"] = "batch",
                  },
                },
                ["select"] = {
                  ["$action"] = "batch",
                  ["exist"] = {
                    "x_api_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "classify",
                  "batch",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["health"] = {
        ["fields"] = {},
        ["name"] = "health",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/health",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "health",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "health",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/health",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "health",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "health",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["internal"] = {
        ["fields"] = {},
        ["name"] = "internal",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["example"] = "",
                      ["kind"] = "header",
                      ["name"] = "x_internal_token",
                      ["orig"] = "x_internal_token",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/internal/rotation/trigger",
                ["segments"] = {
                  {
                    ["lit"] = "internal",
                  },
                  {
                    ["lit"] = "rotation",
                  },
                  {
                    ["lit"] = "trigger",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "x_internal_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "internal",
                  "rotation",
                  "trigger",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rotation"] = {
        ["fields"] = {
          {
            ["name"] = "credits_charged",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "endpoint_name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "endpoint_type",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "generated_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "model_version",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "outlook_1y",
            ["req"] = true,
            ["short"] = "Data for one analysis period (1y or 5y).",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "outlook_5y",
            ["req"] = true,
            ["short"] = "Data for one analysis period (1y or 5y).",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "request_id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trading_date",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "rotation",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["kind"] = "header",
                      ["name"] = "x_api_key",
                      ["orig"] = "x_api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/sector-rotation",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "sector-rotation",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "x_api_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "sector-rotation",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["usage"] = {
        ["fields"] = {},
        ["name"] = "usage",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["kind"] = "header",
                      ["name"] = "x_api_key",
                      ["orig"] = "x_api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/plan",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "plan",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "x_api_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "plan",
                },
              },
              {
                ["args"] = {
                  ["header"] = {
                    {
                      ["kind"] = "header",
                      ["name"] = "x_api_key",
                      ["orig"] = "x_api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/usage",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "usage",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "x_api_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "usage",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
