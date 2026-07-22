# Finsignals SDK exists test

require "minitest/autorun"
require_relative "../Finsignals_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FinsignalsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
