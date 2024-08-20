'use client'

import { useFormContext, FieldError } from 'react-hook-form'

const Step13 = () => {
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
    <div className="p-4 lg:p-8">
      {/* Step Indicator */}
      <p className="text-xs sm:text-sm text-gray-700 font-bold mb-2">
        Step <span>13 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Personal Information
      </h2>

      {/* Email Address */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'Email address is required.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address.',
            },
          })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm focus:border-2"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <span style={{ color: 'red' }} className="text-sm">
            {getErrorMessage(errors.email as FieldError)}
          </span>
        )}
      </div>

      {/* Phone Number and Address */}
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Phone number is required.',
              pattern: {
                value: /^\d{10,15}$/,
                message: 'Please enter a valid phone number.',
              },
            })}
            className="mt-1 block w-full p-2 border focus:border-2 border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <span style={{ color: 'red' }} className="text-sm">
              {getErrorMessage(errors.phone as FieldError)}
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register('address', {
              required: 'Address is required.',
            })}
            className="mt-1 block w-full p-2 border focus:border-2 border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
            placeholder="Enter your address"
          />
          {errors.address && (
            <span style={{ color: 'red' }} className="text-sm">
              {getErrorMessage(errors.address as FieldError)}
            </span>
          )}
        </div>
      </div>

      {/* City or Postal Code */}
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            {...register('city', {
              required: 'City is required.',
            })}
            className="mt-1 block w-full p-2 border focus:border-2 border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
            placeholder="Enter your city"
          />
          {errors.city && (
            <span style={{ color: 'red' }} className="text-sm">
              {getErrorMessage(errors.city as FieldError)}
            </span>
          )}
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            {...register('postalCode', {
              required: 'Postal code is required.',
              pattern: {
                value: /^\d{4,10}$/,
                message: 'Please enter a valid postal code.',
              },
            })}
            className="mt-1 block w-full p-2 border focus:border-2 border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
            placeholder="Enter your postal code"
          />
          {errors.postalCode && (
            <span style={{ color: 'red' }} className="text-sm">
              {getErrorMessage(errors.postalCode as FieldError)}
            </span>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          Any Additional Information
        </label>
        <textarea
          {...register('additionalInfo')}
          className="mt-1 block w-full p-2 border focus:border-2 border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
          placeholder="(Optional)"
        />
      </div>

      {/* Note */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-4">
        Please ensure your information is accurate before submitting.
      </p>
    </div>
  )
}

export default Step13
