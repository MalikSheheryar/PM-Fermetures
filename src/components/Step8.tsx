'use client'
import Image from 'next/image'
import { useFormContext, FieldError } from 'react-hook-form'
import { Image8a, Image8b } from '@/Images/images'

const options = [
  { name: 'Manual', src: Image8a },
  { name: 'Motorized', src: Image8b },
]

const Step8 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  // Watch the selected operation name
  const selectedOption = watch('operationName')

  const handleSelect = (index: number) => {
    // Set only the operation name in the form state
    setValue('operationName', options[index].name, { shouldValidate: true })
  }

  // Function to extract error message safely
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
        Step <span>8 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Motorization
      </h2>

      {/* Paragraph Description */}
      <p className="text-xs md:text-sm text-gray-500 mb-10">
        Now Choose the operation of your Garage Door
      </p>

      {/* Image Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden mb-4 transition-transform duration-200 ease-in-out ${
              selectedOption === option.name
                ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
            style={{
              width: '80%', // Adjust card width for medium devices
              maxWidth: '280px', // Set a max width
              height: 'auto', // Adjust height accordingly
            }}
          >
            <div className="w-full h-auto">
              <Image
                src={option.src}
                alt={option.name}
                layout="responsive"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm md:text-base text-gray-700 font-semibold my-2">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden input field for validation */}
      <input
        type="hidden"
        {...register('operationName', {
          required: 'Please select an operation type.',
        })}
      />

      {/* Display validation error if exists */}
      {errors.operationName && (
        <span style={{ color: 'red' }} className="text-xs md:text-sm">
          {getErrorMessage(errors.operationName as FieldError)}
        </span>
      )}

      {/* Note */}
      <p className="text-xs md:text-sm text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step8
