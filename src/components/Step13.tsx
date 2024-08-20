// 'use client'

// import { Image12a, Image12b } from '@/Images/images'
// import Image from 'next/image'
// import { useFormContext, FieldError } from 'react-hook-form'

// const options = [
//   { name: 'Individual', src: Image12a },
//   { name: 'Company', src: Image12b },
// ]

// const Step12 = () => {
//   const {
//     register,
//     setValue,
//     watch,
//     formState: { errors },
//   } = useFormContext()

//   const selectedOption = watch('clientType')
//   const handleSelect = (index: number) => {
//     setValue('clientType', options[index].name, { shouldValidate: true })
//   }

//   const getErrorMessage = (error: FieldError | undefined): string | null => {
//     if (error && typeof error === 'object' && 'message' in error) {
//       return error.message || null
//     }
//     return null
//   }

//   return (
//     <div className="p-4 lg:p-8">
//       {/* Step Indicator */}
//       <p className="text-xs sm:text-sm text-gray-700 font-bold mb-2">
//         Step <span>12 / 13</span>
//       </p>

//       {/* Heading */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 mb-4">
//         Customer Type
//       </h2>

//       {/* Paragraph Description */}
//       <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-4">
//         Are you an Individual or a Company?
//       </p>

//       {/* Image Cards */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-20">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             onClick={() => handleSelect(index)}
//             className={`cursor-pointer rounded-lg overflow-hidden mb-4 transition-transform duration-200 ease-in-out ${
//               selectedOption === option.name
//                 ? 'shadow-[0_6px_12px_4px_rgba(120,120,120,0.5)] scale-105 border-b-4 border-color1'
//                 : 'shadow-lg'
//             } w-full sm:w-3/4 lg:w-1/2 xl:w-1/3`}
//           >
//             <div className="w-full h-auto max-w-[320px] max-h-[320px] mx-auto">
//               <Image
//                 src={option.src}
//                 alt={option.name}
//                 layout="responsive"
//                 width={320}
//                 height={320}
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 font-semibold my-2 bg-white p-2 rounded-lg">
//               {option.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Conditional Inputs */}
//       {selectedOption === 'Individual' && (
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">
//           <div className="mb-4 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               {...register('firstName', {
//                 required: 'First name is required.',
//               })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
//               placeholder="Enter your first name"
//             />
//             {errors.firstName && (
//               <span style={{ color: 'red' }} className="text-sm">
//                 {getErrorMessage(errors.firstName as FieldError)}
//               </span>
//             )}
//           </div>
//           <div className="mb-4 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               {...register('lastName', {
//                 required: 'Last name is required.',
//               })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
//               placeholder="Enter your last name"
//             />
//             {errors.lastName && (
//               <span style={{ color: 'red' }} className="text-sm">
//                 {getErrorMessage(errors.lastName as FieldError)}
//               </span>
//             )}
//           </div>
//         </div>
//       )}

//       {selectedOption === 'Company' && (
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">
//           <div className="mb-4 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               Company Name
//             </label>
//             <input
//               type="text"
//               {...register('companyName', {
//                 required: 'Company name is required.',
//               })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
//               placeholder="Enter your company name"
//             />
//             {errors.companyName && (
//               <span style={{ color: 'red' }} className="text-sm">
//                 {getErrorMessage(errors.companyName as FieldError)}
//               </span>
//             )}
//           </div>
//           <div className="mb-4 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-gray-700">
//               Retailer Name
//             </label>
//             <input
//               type="text"
//               {...register('retailerName', {
//                 required: 'Retailer name is required.',
//               })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:outline-none sm:text-sm"
//               placeholder="Enter the retailer name"
//             />
//             {errors.retailerName && (
//               <span style={{ color: 'red' }} className="text-sm">
//                 {getErrorMessage(errors.retailerName as FieldError)}
//               </span>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Hidden input field for validation */}
//       <input
//         type="hidden"
//         {...register('clientType', {
//           required: 'Please select an option.',
//         })}
//       />

//       {/* Display validation error if exists */}
//       {errors.clientType && (
//         <span
//           style={{ color: 'red' }}
//           className="text-xs sm:text-sm md:text-base"
//         >
//           {getErrorMessage(errors.clientType as FieldError)}
//         </span>
//       )}

//       {/* Note */}
//       <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-4">
//         Choose the option that best suits your needs.
//       </p>
//     </div>
//   )
// }

// export default Step12
