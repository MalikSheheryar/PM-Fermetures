'use client'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import { useFormContext, FieldError } from 'react-hook-form'
import {
  Image5a,
  Image5b,
  Image5c,
  Image5d,
  Image5e,
  Image5f,
} from '../Images/images'

const Step6 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const selectedDesign = watch('designPattern')

  const imageTitles = [
    'Grooved Wood Grain',
    'Smooth',
    'Cassettes',
    'Single Line',
    'Woodgrain Mono-line',
    'Wood Grain Microline',
  ]

  const imageSources = [Image5a, Image5b, Image5c, Image5d, Image5e, Image5f]

  const handleImageClick = (title: string) => {
    setValue('designPattern', title, { shouldValidate: true })
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
        Step <span>6 / 13</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
        Design Pattern
      </h2>

      {/* Paragraph Description */}
      <p className="text-sm text-gray-500 mb-4 sm:mb-10">
        Now Choose Your Garage Design
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8 mb-2">
        {imageTitles.map((title, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(title)}
            className={`cursor-pointer rounded-lg overflow-hidden mb-2 sm:mb-4 ${
              selectedDesign === title
                ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4 border-b-color1'
                : 'shadow-lg'
            } transition-transform duration-200 ease-in-out`}
          >
            <Image
              src={imageSources[index]}
              alt={`Design Pattern ${index + 1}`}
              className="object-cover m-auto"
              width={250}
              height={150}
            />
            <p className="text-center text-xs sm:text-sm text-gray-700 font-medium my-2">
              {title}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden input field for validation */}
      <input
        type="hidden"
        {...register('designPattern', {
          required: 'Please select a design pattern.',
        })}
      />

      {/* Display validation error if exists */}
      {errors.designPattern && (
        <span style={{ color: 'red' }} className="text-xs sm:text-sm">
          {getErrorMessage(errors.designPattern as FieldError)}
        </span>
      )}
    </div>
  )
}

export default Step6
