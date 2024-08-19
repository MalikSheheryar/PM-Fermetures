'use client'
import Image from 'next/image'
import { Image4 } from '../Images/images' // Assume Image4 is the correct image for Left Spandrel
import { useFormContext, FieldError } from 'react-hook-form'

const Step4 = () => {
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
        Step <span>4 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Left Spandrel
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now, can you provide the dimensions of the left spandrel in millimeters?
      </p>

      {/* Centered Image with Responsive Dimensions */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-[75%] h-48 sm:max-w-xs sm:h-32 md:max-w-lg md:h-40 lg:h-48 xl:h-64 2xl:h-80 shadow-lg">
          <Image
            src={Image4} // Ensure Image4 is the correct image for Left Spandrel
            alt="Left spandrel example"
            objectFit="fill"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Divider Below Image */}
      <hr className="border-t border-gray-300 my-6 md:my-8" />

      {/* Left Spandrel Input */}
      <div className="mb-4">
        <label className="block text-xs md:text-sm text-gray-800 font-medium">
          Enter left spandrel dimensions
        </label>
        <input
          placeholder="In millimeters"
          className={`mt-1 block w-full p-2 md:p-3 border ${
            errors.leftSpandrel ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:border-2 focus:border-gray-700 focus:outline-none text-xs md:text-sm`}
          {...register('leftSpandrel', {
            required: 'Left Spandrel dimensions are required',
            pattern: {
              value: /^[0-9]*\.?[0-9]+$/,
              message: 'Please enter a valid number',
            },
          })}
        />
        {errors.leftSpandrel && (
          <span style={{ color: 'red' }} className="text-xs md:text-sm">
            {getErrorMessage(errors.leftSpandrel as FieldError)}
          </span>
        )}
      </div>
    </div>
  )
}

export default Step4
