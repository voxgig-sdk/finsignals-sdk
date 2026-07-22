<?php
declare(strict_types=1);

// Finsignals SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FinsignalsMakeContext
{
    public static function call(array $ctxmap, ?FinsignalsContext $basectx): FinsignalsContext
    {
        return new FinsignalsContext($ctxmap, $basectx);
    }
}
