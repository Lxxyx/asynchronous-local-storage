import type { AsynchronousLocalStorage } from './lib/als-types'
import * as AsyncHooks from 'async_hooks'

export type { AsynchronousLocalStorage } from './lib/als-types'

export const als: AsynchronousLocalStorage = AsyncHooks.AsyncLocalStorage
  ? require('./lib/als').als
  : require('./lib/cls-fallback').cls

export default als
