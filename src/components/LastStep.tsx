'use client'

import Image from 'next/image'
import { Image14a } from '@/Images/images'

const LastStep = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 lg:px-12 lg:py-16 h-screen gap-4">
      {/* Thank You Message */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 mb-6 text-center">
        Thank You!
      </h2>

      {/* Green Tick Image */}
      <div className="mb-6">
        <Image
          src={Image14a}
          alt="Green Tick"
          width={200} // Adjusted size
          height={150} // Adjusted size
        />
      </div>

      {/* Success Message */}
      <p className="text-xl sm:text-2xl text-gray-600 mb-6 text-center">
        Request Successfully Sent!
      </p>

      {/* Explore Section */}
      <p className="text-sm  text-gray-700 text-center">
        explore
        <a href="https://pmfermetures.fr/">
          <span className="text-black font-extrabold"> PM </span>
          <span className="text-color1 font-extrabold">Fermetures</span>
        </a>
      </p>
    </div>
  )
}

export default LastStep
