<?php
declare(strict_types=1);

// Finsignals SDK configuration

class FinsignalsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Finsignals",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.finsignals.ai",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "classify" => [],
                    "health" => [],
                    "internal" => [],
                    "rotation" => [],
                    "usage" => [],
                ],
            ],
            "entity" => [
        'classify' => [
          'fields' => [
            [
              'name' => 'body',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'company_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'credits_charged',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'endpoint_name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoint_type',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'model_version',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'outputs',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'request_id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ticker',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'classify',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_api_key',
                        'orig' => 'x_api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/v1/classify',
                  'parts' => [
                    'v1',
                    'classify',
                  ],
                  'select' => [
                    'exist' => [
                      'x_api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_api_key',
                        'orig' => 'x_api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/v1/classify/batch',
                  'parts' => [
                    'v1',
                    'classify',
                    'batch',
                  ],
                  'select' => [
                    '$action' => 'batch',
                    'exist' => [
                      'x_api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'health' => [
          'fields' => [],
          'name' => 'health',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/health',
                  'parts' => [
                    'api',
                    'health',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/health',
                  'parts' => [
                    'v1',
                    'health',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'internal' => [
          'fields' => [],
          'name' => 'internal',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'example' => '',
                        'kind' => 'header',
                        'name' => 'x_internal_token',
                        'orig' => 'x_internal_token',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/internal/rotation/trigger',
                  'parts' => [
                    'internal',
                    'rotation',
                    'trigger',
                  ],
                  'select' => [
                    'exist' => [
                      'x_internal_token',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rotation' => [
          'fields' => [
            [
              'name' => 'credits_charged',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'endpoint_name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoint_type',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'generated_at',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'model_version',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'outlook_1y',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'outlook_5y',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'request_id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'trading_date',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'rotation',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_api_key',
                        'orig' => 'x_api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/sector-rotation',
                  'parts' => [
                    'v1',
                    'sector-rotation',
                  ],
                  'select' => [
                    'exist' => [
                      'x_api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'usage' => [
          'fields' => [],
          'name' => 'usage',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_api_key',
                        'orig' => 'x_api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/plan',
                  'parts' => [
                    'v1',
                    'plan',
                  ],
                  'select' => [
                    'exist' => [
                      'x_api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_api_key',
                        'orig' => 'x_api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/usage',
                  'parts' => [
                    'v1',
                    'usage',
                  ],
                  'select' => [
                    'exist' => [
                      'x_api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FinsignalsFeatures::make_feature($name);
    }
}
