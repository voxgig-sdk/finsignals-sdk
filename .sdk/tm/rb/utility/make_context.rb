# Finsignals SDK utility: make_context
require_relative '../core/context'
module FinsignalsUtilities
  MakeContext = ->(ctxmap, basectx) {
    FinsignalsContext.new(ctxmap, basectx)
  }
end
