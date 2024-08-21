'use client'
import { Image10a, Image10b, Image10c, Image10d } from '@/Images/images'
import Image from 'next/image'
import { useFormContext, FieldError } from 'react-hook-form'

const options = [
  { name: 'No Porthole', src: Image10a },
  { name: 'Single Porthole', src: Image10b },
  { name: 'Crossbar Porthole', src: Image10c },
  { name: 'Sunset Porthole', src: Image10d },
]

const Step10 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const selectedOption = watch('porthole') // Watch the selected porthole option
  const windowSize = watch('windowSize') // Watch the window size value

  const handleSelect = (index: number) => {
    setValue('porthole', options[index].name, { shouldValidate: true }) // Set the selected porthole option to the name instead of the index
    if (index === 0) {
      setValue('windowSize', '') // Clear window size input when "No Porthole" is selected
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('windowSize', e.target.value, { shouldValidate: true }) // Set the window size
  }

  // Function to extract error message safely
  const getErrorMessage = (error: FieldError | undefined): string | null => {
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message || null
    }
    return null
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>10 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-4">
        Porthole Window
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
        Want to Add Porthole to your Garage Door?
      </p>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-6 sm:gap-8 lg:gap-10 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 ease-in-out ${
              selectedOption === option.name
                ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
          >
            <div className="relative w-full h-40 sm:h-52 lg:h-60">
              <Image
                src={option.src}
                alt={option.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority // Ensure images load quickly and with higher quality
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Adjust sizes to provide appropriate hints
              />
            </div>
            <p className="text-center text-sm sm:text-base font-semibold text-gray-700 my-2">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      {/* Conditional Input Field */}
      {selectedOption && selectedOption !== 'No Porthole' && (
        <div className="mt-6 sm:mt-8">
          <label className="block text-sm sm:text-base text-gray-800 font-medium mb-2">
            Enter window size
          </label>
          <input
            type="text"
            value={windowSize}
            {...register('windowSize', {
              required:
                selectedOption !== 'No Porthole'
                  ? 'Please enter the window size.'
                  : false,
              pattern: {
                value: /^\d+$/,
                message: 'Please enter a valid size in millimeters.',
              },
            })}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
            style={{ fontSize: '16px' }} // Add this line to prevent zooming
            placeholder="In millimeters"
          />
          {/* Display validation error if exists */}
          {errors.windowSize && (
            <span style={{ color: 'red' }} className="text-sm">
              {getErrorMessage(errors.windowSize as FieldError)}
            </span>
          )}
        </div>
      )}

      {/* Hidden input field for porthole validation */}
      <input
        type="hidden"
        {...register('porthole', {
          required: 'Please select a porthole option.',
        })}
      />

      {/* Display validation error for porthole */}
      {errors.porthole && (
        <span style={{ color: 'red' }} className="text-sm">
          {getErrorMessage(errors.porthole as FieldError)}
        </span>
      )}

      {/* Note */}
      <p className="text-sm sm:text-base text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step10
