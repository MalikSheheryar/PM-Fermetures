'use client'
import Image from 'next/image'
import { Image1 } from '../Images/images'
import { useFormContext, FieldError } from 'react-hook-form'

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const getErrorMessage = (error: FieldError | undefined): string | null => {
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message || null
    }
    return null
  }

  return (
    <div>
      {/* Step Indicator */}
      <p className="text-xs md:text-sm text-gray-700 font-bold mb-2">
        Step <span>1 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Bay Width
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now, can you give me the width of your bay in millimeters?
      </p>

      {/* Centered Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-[75%] h-48 sm:max-w-xs sm:h-32 md:max-w-lg md:h-40 lg:h-48 xl:h-64 2xl:h-80 shadow-lg">
          <Image
            src={Image1}
            alt="Bay width example"
            fill
            className="object-contain"
            objectFit="fill"
          />
        </div>
      </div>

      {/* Divider Below Image */}
      <hr className="border-t border-gray-300 my-6 md:my-8" />

      {/* Bay Width Input */}
      <div className="mb-4">
        <label className="block text-xs md:text-sm text-gray-800 font-medium">
          Enter bay width
        </label>
        <input
          placeholder="In millimeters"
          className={`mt-1 block w-full p-2 md:p-2 border ${
            errors.bayWidth ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:border-2 focus:border-gray-700 focus:outline-none text-sm md:text-base`}
          style={{ fontSize: '16px' }} // Set font size to 16px
          {...register('bayWidth', {
            required: 'Bay Width is required',
            pattern: {
              value: /^[0-9]*\.?[0-9]+$/,
              message: 'Please enter a valid number',
            },
          })}
        />
        {errors.bayWidth && (
          <span style={{ color: 'red' }} className="text-sm md:text-base">
            {getErrorMessage(errors.bayWidth as FieldError)}
          </span>
        )}
      </div>
    </div>
  )
}

export default Step1
