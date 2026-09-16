# Finsignals SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FinsignalsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FinsignalsBaseFeature.new
    when "ratelimit"
      FinsignalsRatelimitFeature.new
    when "retry"
      FinsignalsRetryFeature.new
    when "test"
      FinsignalsTestFeature.new
    when "timeout"
      FinsignalsTimeoutFeature.new
    else
      FinsignalsBaseFeature.new
    end
  end
end
