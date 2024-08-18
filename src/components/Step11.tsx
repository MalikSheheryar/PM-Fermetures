'use client'
import { Image11a, Image11b, Image11c } from '@/Images/images'
import Image from 'next/image'
import { useState } from 'react'

const options = [
  { name: 'Less than a Month', src: Image11a },
  { name: 'Less than Three Months', src: Image11b },
  { name: 'Undetermined', src: Image11c },
]

const Step11 = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelectedOption(index)
  }

  return (
    <div>
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
        When you want your Garage Door to be Delivered?
      </p>

      {/* Image Cards */}
      <div className="flex justify-between">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-md  overflow-hidden my-4 ${
              selectedOption === index
                ? 'shadow-[0_6px_12px_4px_rgba(100,149,237,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
          >
            <div className="w-56 h-32 relative">
              {/* Increased width to w-48 */}
              <Image
                src={option.src}
                alt={option.name}
                fill
                className="object-cover rounded-md ml-1"
              />
            </div>
            <p className="text-center text-gray-700 mt-2">{option.name}</p>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-sm text-gray-500 mt-4">
        Choose the option that best suits your needs.
      </p>
    </div>
  )
}

export default Step11
