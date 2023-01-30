import React, { useContext } from 'react'
import { type Client, getDefaultClient } from '@formspree/core'

export interface FromspreeContextType {
  client: Client
}

export interface FormspreeProviderProps {
  project?: string
  children: React.ReactNode
  stripePK?: string
}

const FormspreeContext = React.createContext<FromspreeContextType>({
  client: undefined
})

FormspreeContext.displayName = 'Formspree'

export function useFormspree () {
  const context = useContext(FormspreeContext)

  return context.client
    ? context
    : {
        client: getDefaultClient()
      }
}
