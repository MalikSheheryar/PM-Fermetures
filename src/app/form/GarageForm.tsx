'use client'
import React, { useState } from 'react'
import MultiStepForm from '../../components/FormLayout'
import Image from 'next/image'
import { Logo } from '../../Images/images'
import { FormProvider } from '../../contexts/FormContext'
import FinalComponent from '../../components/LastStep'

const GarageDoorFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <FormProvider>
      <div className="container mx-auto p-4">
        <div className="flex justify-start mb-2">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={80}
            className="mb-2"
          />
        </div>
        <div className="w-full border-b-2 border-color1 mb-6 rounded-lg"></div>

        {/* Conditionally render the "Creating a Quote" header and divider */}
        {!isSubmitted && (
          <>
            <div className="mb-6">
              <h1 className="text-4xl mb-2 text-gray-700 font-bold">
                Creating a Quote
              </h1>
              <p className="text-sm text-gray-600 font-semi-bold ml-1">
                Follow the Steps to Complete!
              </p>
            </div>
            <div className="border-b border-gray-300 mb-6"></div>
          </>
        )}

        {/* Conditionally render the form or the FinalComponent */}
        {!isSubmitted ? (
          <MultiStepForm setIsSubmitted={setIsSubmitted} />
        ) : (
          <FinalComponent />
        )}
      </div>
    </FormProvider>
  )
}

export default GarageDoorFormPage
