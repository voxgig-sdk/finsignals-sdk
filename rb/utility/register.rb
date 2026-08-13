# Finsignals SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FinsignalsUtility.registrar = ->(u) {
  u.clean = FinsignalsUtilities::Clean
  u.done = FinsignalsUtilities::Done
  u.make_error = FinsignalsUtilities::MakeError
  u.feature_add = FinsignalsUtilities::FeatureAdd
  u.feature_hook = FinsignalsUtilities::FeatureHook
  u.feature_init = FinsignalsUtilities::FeatureInit
  u.fetcher = FinsignalsUtilities::Fetcher
  u.make_fetch_def = FinsignalsUtilities::MakeFetchDef
  u.make_context = FinsignalsUtilities::MakeContext
  u.make_options = FinsignalsUtilities::MakeOptions
  u.make_request = FinsignalsUtilities::MakeRequest
  u.make_response = FinsignalsUtilities::MakeResponse
  u.make_result = FinsignalsUtilities::MakeResult
  u.make_point = FinsignalsUtilities::MakePoint
  u.make_spec = FinsignalsUtilities::MakeSpec
  u.make_url = FinsignalsUtilities::MakeUrl
  u.param = FinsignalsUtilities::Param
  u.prepare_auth = FinsignalsUtilities::PrepareAuth
  u.prepare_body = FinsignalsUtilities::PrepareBody
  u.prepare_headers = FinsignalsUtilities::PrepareHeaders
  u.prepare_method = FinsignalsUtilities::PrepareMethod
  u.prepare_params = FinsignalsUtilities::PrepareParams
  u.prepare_path = FinsignalsUtilities::PreparePath
  u.prepare_query = FinsignalsUtilities::PrepareQuery
  u.graphql_body = FinsignalsUtilities::GraphqlBody
  u.graphql_errors = FinsignalsUtilities::GraphqlErrors
  u.result_basic = FinsignalsUtilities::ResultBasic
  u.result_body = FinsignalsUtilities::ResultBody
  u.result_headers = FinsignalsUtilities::ResultHeaders
  u.transform_request = FinsignalsUtilities::TransformRequest
  u.transform_response = FinsignalsUtilities::TransformResponse
}
