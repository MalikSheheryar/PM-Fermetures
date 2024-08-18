'use client'
import { Image10a, Image10b, Image10c, Image10d } from '@/Images/images'
import Image from 'next/image'
import { useState } from 'react'

const options = [
  { name: 'No Porthole', src: Image10a },
  { name: 'Single Porthole', src: Image10b },
  { name: 'Crossbar Porthole', src: Image10c },
  { name: 'Sunset Porthole', src: Image10d },
]

const Step10 = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [windowSize, setWindowSize] = useState<string>('')

  const handleSelect = (index: number) => {
    setSelectedOption(index)
    if (index === 0) {
      setWindowSize('') // Clear window size input when "No Porthole" is selected
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWindowSize(e.target.value)
  }

  return (
    <div>
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>10 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">
        Porthole Window
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Want to Add Porthole to your Garage Door?
      </p>

      {/* Image Cards */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-10 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg rounded-t-2xl overflow-hidden ${
              selectedOption === index
                ? 'shadow-[0_6px_12px_4px_rgba(100,149,237,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
          >
            <div className="relative w-full h-52">
              <Image
                src={option.src}
                alt={option.name}
                layout="fill"
                objectFit="fill"
                className="rounded-t-lg"
                priority // Ensure images load quickly and with higher quality
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Adjust sizes to provide appropriate hints
              />
            </div>
            <p className="text-center text-gray-700 font-semibold my-2">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      {/* Conditional Input Field */}
      {selectedOption !== null && selectedOption !== 0 && (
        <div className="mt-8">
          <label className="block text-sm text-gray-800 font-medium mb-2 mt-2">
            Enter window size
          </label>
          <input
            type="text"
            value={windowSize}
            onChange={handleInputChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-gray-700 focus:outline-none sm:text-sm"
            placeholder="In millimeters"
          />
        </div>
      )}

      {/* Note */}
      <p className="text-sm text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step10
