import type React from 'react'
import { type FormError } from '@formspree/core'
interface Props {
  prefix?: string
  field?: string
  errors: FormError[]
  [x: string]: any
}
export declare const ValidationError: React.FC<Props>
