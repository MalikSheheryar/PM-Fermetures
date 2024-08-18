'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  Image5a,
  Image5b,
  Image5c,
  Image5d,
  Image5e,
  Image5f,
} from '../Images/images' // Ensure this path is correct

const Step6 = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const imageTitles = [
    'Grooved Wood Grain',
    'Smooth',
    'Cassettes',
    'Single Line',
    'Woodgrain Mono-line',
    'Wood Grain Microline',
  ]

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  return (
    <div>
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>6 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">
        Design Pattern
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now Choose Your Garage Design
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-6 mt-8 mb-2">
        {[Image5a, Image5b, Image5c, Image5d, Image5e, Image5f].map(
          (imgSrc, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`cursor-pointer rounded-lg overflow-hidden mb-4 ${
                selectedImage === index
                  ? 'shadow-[0_6px_12px_4px_rgba(100,149,237,0.5)] scale-105 border-b-4 border-b-color1'
                  : 'shadow-lg'
              }`}
            >
              <Image
                src={imgSrc}
                alt={`Design Pattern ${index + 1}`}
                className="object-cover"
                width={250}
                height={150}
              />
              {/* Title below each image */}
              <p className="text-center text-gray-700 font-medium my-2">
                {imageTitles[index]}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Step6
