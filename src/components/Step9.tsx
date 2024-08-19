'use client'

import { Image9a, Image9b } from '@/Images/images'
import Image from 'next/image'
import { useFormContext, FieldError } from 'react-hook-form'

const options = [
  { name: 'With Gate', src: Image9a },
  { name: 'Without Gate', src: Image9b },
]

const Step9 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  // Watch the selected option name
  const selectedOption = watch('gateOption')

  const handleSelect = (index: number) => {
    // Set the value to the option name instead of the index
    setValue('gateOption', options[index].name, { shouldValidate: true }) // Set the option name and trigger validation
  }

  // Function to extract error message safely
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
        Step <span>9 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Garage Gate
      </h2>

      {/* Paragraph Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-4">
        Want to Add a Door to the Gate?
      </p>

      {/* Image Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-20">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden mb-4 transition-transform duration-200 ease-in-out ${
              selectedOption === option.name
                ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            } w-full sm:w-3/4 lg:w-1/2`} // Responsive width
          >
            <div className="w-full h-auto w-full lg:max-h-[320px]">
              <Image
                src={option.src}
                alt={option.name}
                layout="responsive"
                width={320}
                height={320}
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 font-semibold my-2">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden input field for validation */}
      <input
        type="hidden"
        {...register('gateOption', {
          required: 'Please select a gate option.',
        })}
      />

      {/* Display validation error if exists */}
      {errors.gateOption && (
        <span
          style={{ color: 'red' }}
          className="text-xs sm:text-sm md:text-base"
        >
          {getErrorMessage(errors.gateOption as FieldError)}
        </span>
      )}

      {/* Note */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step9
