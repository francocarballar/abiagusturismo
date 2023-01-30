import type * as Forms from '@formspree/core'

export type FormError = Forms.Client
export type FieldError = Forms.Client

/**
 * ExtraData values can be strings or functions that return a string, or a
 * promise that resolves to a string. Errors should be handled internally.
 * Functions can return undefined to skip this ExtraData value.
 */
export type ExtraDataValue =
  | undefined
  | string
  | (() => string)
  | (() => Promise<string>)
  | (() => undefined)
  | (() => Promise<undefined>)

export type ExtraData = Record<string, ExtraDataValue>

// @deprecated
// Will be removed in next major version
export type ErrorPayload = Forms.Client
