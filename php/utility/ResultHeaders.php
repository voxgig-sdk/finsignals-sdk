<?php
declare(strict_types=1);

// Finsignals SDK utility: result_headers

class FinsignalsResultHeaders
{
    public static function call(FinsignalsContext $ctx): ?FinsignalsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
