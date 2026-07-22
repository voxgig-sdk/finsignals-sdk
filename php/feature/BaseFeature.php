<?php
declare(strict_types=1);

// Finsignals SDK base feature

class FinsignalsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FinsignalsContext $ctx, array $options): void {}
    public function PostConstruct(FinsignalsContext $ctx): void {}
    public function PostConstructEntity(FinsignalsContext $ctx): void {}
    public function SetData(FinsignalsContext $ctx): void {}
    public function GetData(FinsignalsContext $ctx): void {}
    public function GetMatch(FinsignalsContext $ctx): void {}
    public function SetMatch(FinsignalsContext $ctx): void {}
    public function PrePoint(FinsignalsContext $ctx): void {}
    public function PreSpec(FinsignalsContext $ctx): void {}
    public function PreRequest(FinsignalsContext $ctx): void {}
    public function PreResponse(FinsignalsContext $ctx): void {}
    public function PreResult(FinsignalsContext $ctx): void {}
    public function PreDone(FinsignalsContext $ctx): void {}
    public function PreUnexpected(FinsignalsContext $ctx): void {}
}
