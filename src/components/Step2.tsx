'use client'
import Image from 'next/image'
import { Image2 } from '../Images/images' // Ensure this path is correct

const Step2 = () => {
  return (
    <div>
      {/* Step Indicator */}
      <p className="text-sm text-gray-700 font-bold mb-2">
        Step <span>2 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-700 mb-4">Bay Height</h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4">
        Now, can you give me the height of your bay in millimeters?
      </p>

      {/* Centered Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 shadow-lg">
          <Image src={Image2} alt="Bay height example" fill />
        </div>
      </div>
      {/* Divider Below Image */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bay Height Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-800 font-medium">
          Enter bay height
        </label>
        <input
          placeholder="In millimeters"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-gray-700 focus:outline-none sm:text-sm"
        />
      </div>
    </div>
  )
}

export default Step2
