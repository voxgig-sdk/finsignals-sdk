<?php
declare(strict_types=1);

// Finsignals SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FinsignalsUtility::setRegistrar(function (FinsignalsUtility $u): void {
    $u->clean = [FinsignalsClean::class, 'call'];
    $u->done = [FinsignalsDone::class, 'call'];
    $u->make_error = [FinsignalsMakeError::class, 'call'];
    $u->feature_add = [FinsignalsFeatureAdd::class, 'call'];
    $u->feature_hook = [FinsignalsFeatureHook::class, 'call'];
    $u->feature_init = [FinsignalsFeatureInit::class, 'call'];
    $u->fetcher = [FinsignalsFetcher::class, 'call'];
    $u->make_fetch_def = [FinsignalsMakeFetchDef::class, 'call'];
    $u->make_context = [FinsignalsMakeContext::class, 'call'];
    $u->make_options = [FinsignalsMakeOptions::class, 'call'];
    $u->make_request = [FinsignalsMakeRequest::class, 'call'];
    $u->make_response = [FinsignalsMakeResponse::class, 'call'];
    $u->make_result = [FinsignalsMakeResult::class, 'call'];
    $u->make_point = [FinsignalsMakePoint::class, 'call'];
    $u->make_spec = [FinsignalsMakeSpec::class, 'call'];
    $u->make_url = [FinsignalsMakeUrl::class, 'call'];
    $u->param = [FinsignalsParam::class, 'call'];
    $u->prepare_auth = [FinsignalsPrepareAuth::class, 'call'];
    $u->prepare_body = [FinsignalsPrepareBody::class, 'call'];
    $u->prepare_headers = [FinsignalsPrepareHeaders::class, 'call'];
    $u->prepare_method = [FinsignalsPrepareMethod::class, 'call'];
    $u->prepare_params = [FinsignalsPrepareParams::class, 'call'];
    $u->prepare_path = [FinsignalsPreparePath::class, 'call'];
    $u->prepare_query = [FinsignalsPrepareQuery::class, 'call'];
    $u->result_basic = [FinsignalsResultBasic::class, 'call'];
    $u->result_body = [FinsignalsResultBody::class, 'call'];
    $u->result_headers = [FinsignalsResultHeaders::class, 'call'];
    $u->transform_request = [FinsignalsTransformRequest::class, 'call'];
    $u->transform_response = [FinsignalsTransformResponse::class, 'call'];
});
