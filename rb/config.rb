# Finsignals SDK configuration

module FinsignalsConfig
  def self.make_config
    {
      "main" => {
        "name" => "Finsignals",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.finsignals.ai",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "classify" => {},
          "health" => {},
          "internal" => {},
          "rotation" => {},
          "usage" => {},
        },
      },
      "entity" => {
        "classify" => {
          "fields" => [
            {
              "active" => true,
              "name" => "body",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "company_name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "credits_charged",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "endpoint_name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "endpoint_type",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "item",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "model_version",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "output",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "request_id",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "ticker",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "title",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
          ],
          "name" => "classify",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "x_api_key",
                        "orig" => "x_api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "POST",
                  "orig" => "/v1/classify",
                  "parts" => [
                    "v1",
                    "classify",
                  ],
                  "select" => {
                    "exist" => [
                      "x_api_key",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "x_api_key",
                        "orig" => "x_api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "POST",
                  "orig" => "/v1/classify/batch",
                  "parts" => [
                    "v1",
                    "classify",
                    "batch",
                  ],
                  "select" => {
                    "$action" => "batch",
                    "exist" => [
                      "x_api_key",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "create",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "health" => {
          "fields" => [],
          "name" => "health",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/api/health",
                  "parts" => [
                    "api",
                    "health",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/v1/health",
                  "parts" => [
                    "v1",
                    "health",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "internal" => {
          "fields" => [],
          "name" => "internal",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "example" => "",
                        "kind" => "header",
                        "name" => "x_internal_token",
                        "orig" => "x_internal_token",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "POST",
                  "orig" => "/internal/rotation/trigger",
                  "parts" => [
                    "internal",
                    "rotation",
                    "trigger",
                  ],
                  "select" => {
                    "exist" => [
                      "x_internal_token",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "create",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "rotation" => {
          "fields" => [
            {
              "active" => true,
              "name" => "credits_charged",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "endpoint_name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "endpoint_type",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "generated_at",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "model_version",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "outlook_1y",
              "req" => true,
              "type" => "`$OBJECT`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "outlook_5y",
              "req" => true,
              "type" => "`$OBJECT`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "request_id",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "trading_date",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 8,
            },
          ],
          "name" => "rotation",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "x_api_key",
                        "orig" => "x_api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/v1/sector-rotation",
                  "parts" => [
                    "v1",
                    "sector-rotation",
                  ],
                  "select" => {
                    "exist" => [
                      "x_api_key",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "usage" => {
          "fields" => [],
          "name" => "usage",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "x_api_key",
                        "orig" => "x_api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/v1/plan",
                  "parts" => [
                    "v1",
                    "plan",
                  ],
                  "select" => {
                    "exist" => [
                      "x_api_key",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "x_api_key",
                        "orig" => "x_api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/v1/usage",
                  "parts" => [
                    "v1",
                    "usage",
                  ],
                  "select" => {
                    "exist" => [
                      "x_api_key",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FinsignalsFeatures.make_feature(name)
  end
end
