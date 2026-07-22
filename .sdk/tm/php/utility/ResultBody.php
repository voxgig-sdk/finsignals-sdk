<?php
declare(strict_types=1);

// Finsignals SDK utility: result_body

class FinsignalsResultBody
{
    public static function call(FinsignalsContext $ctx): ?FinsignalsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
