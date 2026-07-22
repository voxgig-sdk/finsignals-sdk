<?php
declare(strict_types=1);

// Finsignals SDK exists test

require_once __DIR__ . '/../finsignals_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FinsignalsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
