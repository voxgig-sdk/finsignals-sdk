-- Finsignals SDK error

local FinsignalsError = {}
FinsignalsError.__index = FinsignalsError


function FinsignalsError.new(code, msg, ctx)
  local self = setmetatable({}, FinsignalsError)
  self.is_sdk_error = true
  self.sdk = "Finsignals"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FinsignalsError:error()
  return self.msg
end


function FinsignalsError:__tostring()
  return self.msg
end


return FinsignalsError
