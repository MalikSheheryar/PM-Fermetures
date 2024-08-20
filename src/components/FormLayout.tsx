'use client'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Step10 from './Step10'
import Step11 from './Step11'
import Step12 from './Step12'
// import Step13 from './Step13'

const steps = [
  'Bay Width',
  'Bay Height',
  'Lintel Drop',
  'Left Spandrel',
  'Right Spandrel',
  'Design Pattern',
  'Color',
  'Motorization',
  'Pedestrian Door',
  'Window',
  'Delivery Time',
  'Customer Type',
  // 'Personal Information',
]

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { trigger, getValues } = useFormContext()

  const onSubmit = async () => {
    const data = getValues()
  }

  const handleNext = async () => {
    const valid = await trigger() // Validate current step
    if (valid) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1))
      console.log('Current Step Data:', getValues()) // Log data on successful validation
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Step4 />
      case 4:
        return <Step5 />
      case 5:
        return <Step6 />
      case 6:
        return <Step7 />
      case 7:
        return <Step8 />
      case 8:
        return <Step9 />
      case 9:
        return <Step10 />
      case 10:
        return <Step11 />
      case 11:
        return <Step12 />

      // case 12:
      //   return <Step13 />
      default:
        return <Step1 />
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* Step Navigation - Visible on Large Screens */}
      <div className="hidden md:block w-[23%] py-2">
        <div className="relative inset-y-0 left-1/2 transform -translate-x-2 ml-20 md:ml-12 xl:ml-20">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-6 flex items-center">
              {/* Text to the left of the step */}
              <div className="absolute -left-52 w-48 text-right">
                <p
                  className={`text-md font-medium transition-colors duration-300 ${
                    index === currentStep
                      ? 'text-gray-800 font-semibold'
                      : 'text-gray-800'
                  }`}
                >
                  {step}
                </p>
              </div>
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  index === currentStep
                    ? 'border-color1 bg-color1 text-white shadow-lg glow-effect'
                    : index < currentStep
                    ? 'border-color1 bg-color1 text-white'
                    : 'border-gray-300 bg-white text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-px h-8 transition-all duration-300 ${
                    index < currentStep ? 'bg-color1' : 'bg-gray-300'
                  } absolute top-10 left-5 transform -translate-x-1/2`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="relative border-r border-gray-300 mx-4"></div>

      {/* Step Content - Visible on All Screens */}
      <div className="w-full md:w-3/4 flex flex-col">
        {/* Removed Step Text Only for Small Screens */}
        {/* Step Component */}
        <div>{renderStepComponent()}</div>

        {/* Navigation Buttons - Visible on All Screens */}
        <div className="flex justify-end items-center mt-4">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="text-gray-700 px-6 py-2 rounded-full font-semibold"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="flex items-center bg-color1 text-white px-8 text-sm py-4 rounded-full font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm
