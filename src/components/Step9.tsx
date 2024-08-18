'use client'
import { Image9a, Image9b } from '@/Images/images'
import Image from 'next/image'
import { useState } from 'react'

const options = [
  { name: 'With Gate', src: Image9a },
  { name: 'Without Gate', src: Image9b },
]

const Step9 = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelectedOption(index)
  }

  return (
    <div>
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>9 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">
        Garage Gate
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Want to Add a Door to the Gate?
      </p>

      {/* Image Cards */}
      <div className="flex justify-center gap-20">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden mb-4 ${
              selectedOption === index
                ? 'shadow-[0_6px_12px_4px_rgba(100,149,237,0.5)] scale-105 border-b-4 border-color1'
                : 'shadow-lg'
            }`}
          >
            <div className="w-full h-auto">
              <Image
                src={option.src}
                alt={option.name}
                layout="responsive"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-700 font-semibold my-2">
              {option.name}
            </p>
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

export default Step9
