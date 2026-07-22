# Finsignals SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FinsignalsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FinsignalsBaseFeature.new
    when "test"
      FinsignalsTestFeature.new
    else
      FinsignalsBaseFeature.new
    end
  end
end
