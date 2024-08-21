'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useFormContext, FieldError } from 'react-hook-form'
import {
  Image6a,
  Image6b,
  Image6c,
  Image6d,
  Image6e,
  Image6f,
  Image6g,
  Image6h,
  Image6i,
  Image6j,
  Image6k,
  Image6l,
} from '@/Images/images'

const colors = [
  { name: 'White (RAL 9016)', src: Image6a, colorCode: '#FFFFFF' },
  { name: 'White aluminium (RAL 9006)', src: Image6b, colorCode: '#A5A5A5' },
  { name: 'Grey aluminium (RAL 9007)', src: Image6c, colorCode: '#8F8F8F' },
  { name: 'Iron grey (RAL 7011)', src: Image6d, colorCode: '#4D4D4D' },
  { name: 'Sepia brown (RAL 8014)', src: Image6e, colorCode: '#4A3520' },
  { name: 'Light ivory (RAL 1015)', src: Image6f, colorCode: '#E1D7C6' },
  { name: 'Fire red (RAL 3000)', src: Image6g, colorCode: '#A52627' },
  { name: 'Gentian blue (RAL 5010)', src: Image6h, colorCode: '#1F4788' },
  { name: 'Moss green (RAL 6005)', src: Image6i, colorCode: '#2D4C2A' },
  { name: 'Light oak', src: Image6j, colorCode: '#BFA780' },
  { name: 'Anthracite grey (RAL 7016)', src: Image6k, colorCode: '#383E42' },
  { name: 'Other RAL', src: Image6l, colorCode: '#4A9A00' },
]

const Step7 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const selectedColor = watch('colorName')
  const [customColor, setCustomColor] = useState('')

  const handleSelect = (index: number) => {
    const color = colors[index]
    setValue('colorName', color.name, { shouldValidate: true })
    setValue('color', index)
    if (color.name !== 'Other RAL') {
      // Clear custom color if "Other RAL" is not selected
      setCustomColor('')
      setValue('customColor', '')
    }
  }

  const handleCustomColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomColor(event.target.value)
    setValue('customColor', event.target.value)
  }

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
        Step <span>7 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Color
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now Choose the Color of your Design
      </p>

      {/* Color Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-8 mb-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 ease-in-out mb-2 sm:mb-4 bg-white !sm:h-64 ${
              selectedColor === color.name
                ? `shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4`
                : 'shadow-lg'
            }`}
            style={{
              borderBottomColor:
                selectedColor === color.name ? color.colorCode : 'transparent',
            }}
          >
            <div
              className={`w-full h-36 sm:h-44 md:h-40 lg:h-48 xl:h-56 relative`}
            >
              <Image
                src={color.src}
                alt={color.name}
                layout="fill"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                {color.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Color Input */}
      {selectedColor === 'Other RAL' && (
        <div className="mt-4">
          <label
            htmlFor="customColor"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Custom Color
          </label>
          <input
            placeholder="Enter color"
            type="text"
            id="customColor"
            value={customColor}
            onChange={handleCustomColorChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-gray-700 focus:outline-none sm:text-sm p-2"
            style={{ fontSize: '16px' }} // Add this line to prevent zooming
          />
          {/* Display validation error for customColor if exists */}
          {errors.customColor && (
            <span style={{ color: 'red' }} className="text-xs sm:text-sm">
              {getErrorMessage(errors.customColor as FieldError)}
            </span>
          )}
        </div>
      )}

      {/* Hidden input field for validation */}
      <input
        type="hidden"
        {...register('colorName', {
          required: 'Please select a color.',
        })}
      />
      <input
        type="hidden"
        {...register('customColor', {
          validate: (value) =>
            selectedColor === 'Other RAL' && !value
              ? 'Please enter a custom color.'
              : true,
        })}
      />

      {/* Display validation error if exists */}
      {errors.colorName && (
        <span style={{ color: 'red' }} className="text-xs sm:text-sm">
          {getErrorMessage(errors.colorName as FieldError)}
        </span>
      )}

      {/* Note */}
      <p className="text-xs sm:text-sm text-gray-500 mt-4">
        Non-standard color with Mono-line Woodgrain pattern (charges apply)
      </p>
    </div>
  )
}

export default Step7
