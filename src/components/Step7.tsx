'use client'
import Image from 'next/image'
import { useState } from 'react'
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
  const [selectedColor, setSelectedColor] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelectedColor(index)
  }

  return (
    <div>
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>7 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">Color</h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now Choose the Color of your Design
      </p>

      {/* Color Cards */}
      <div className="grid grid-cols-4 gap-6 mt-8 mb-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-lg overflow-hidden mb-4 ${
              selectedColor === index
                ? `shadow-[0_6px_12px_4px_rgba(100,149,237,0.5)] scale-105 border-b-4`
                : 'shadow-lg'
            }`}
            style={{
              borderBottomColor:
                selectedColor === index ? color.colorCode : 'transparent',
            }}
          >
            <div className="w-full h-auto">
              <Image
                src={color.src}
                alt={color.name}
                layout="responsive"
                width={180}
                height={135}
                className="object-cover"
              />
            </div>
            <p className="text-center text-gray-700 font-medium my-2">
              {color.name}
            </p>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-sm text-gray-500 mt-4">
        Non-standard color with Mono-line Woodgrain pattern (charges apply)
      </p>
    </div>
  )
}

export default Step7
