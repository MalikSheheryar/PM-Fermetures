'use client'
import React, { createContext, useContext, ReactNode } from 'react'
import {
  useForm,
  FormProvider as RHFormProvider,
  UseFormReturn,
} from 'react-hook-form'

// Define the type for your FormContext
type FormContextType = UseFormReturn | null

// Create the context with the correct type
const FormContext = createContext<FormContextType>(null)

// Type the children prop
interface FormProviderProps {
  children: ReactNode
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const methods = useForm({
    mode: 'onTouched', // Validates on touch
  })

  return (
    <FormContext.Provider value={methods}>
      <RHFormProvider {...methods}>{children}</RHFormProvider>
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
