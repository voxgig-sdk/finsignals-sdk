<?php
declare(strict_types=1);

// Finsignals SDK utility: prepare_body

class FinsignalsPrepareBody
{
    public static function call(FinsignalsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
