'use client'
import { Image11a, Image11b, Image11c } from '@/Images/images'
import Image from 'next/image'
import { useFormContext, FieldError } from 'react-hook-form'

const options = [
  { name: 'Less than a Month', src: Image11a },
  { name: 'Less than Three Months', src: Image11b },
  { name: 'Undetermined', src: Image11c },
]

const Step11 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const selectedOption = watch('deliveryDate') // Watch the selected delivery date option

  const handleSelect = (index: number) => {
    setValue('deliveryDate', options[index].name, { shouldValidate: true }) // Set the selected delivery date option
  }

  // Function to extract error message safely
  const getErrorMessage = (error: FieldError | undefined): string | null => {
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message || null
    }
    return null
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>11 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">
        Delivery Date
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        When do you want your Garage Door to be delivered?
      </p>

      {/* Image Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-md overflow-hidden my-2 p-2 transition-transform duration-300 ease-in-out ${
              selectedOption === option.name
                ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] transform scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
            style={{ width: 'calc(100% - 1rem)', maxWidth: '20rem' }} // Responsive width
          >
            <div className="relative w-full h-32 md:h-48">
              <Image
                src={option.src}
                alt={option.name}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-center text-gray-700 mt-2 text-sm md:text-base font-semibold">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden input field for deliveryDate validation */}
      <input
        type="hidden"
        {...register('deliveryDate', {
          required: 'Please select a delivery date option.',
        })}
      />

      {/* Display validation error for deliveryDate */}
      {errors.deliveryDate && (
        <span style={{ color: 'red' }} className="text-sm">
          {getErrorMessage(errors.deliveryDate as FieldError)}
        </span>
      )}

      {/* Note */}
      <p className="text-sm text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step11
