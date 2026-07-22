
import { Context } from './Context'


class FinsignalsError extends Error {

  isFinsignalsError = true

  sdk = 'Finsignals'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FinsignalsError
}

