import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black mt-8'>
        <div className='p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center text-[#cdcdcd] gap-4 sm:gap-6'>
            <p className='text-sm sm:text-base text-center sm:text-left'>
                ©{new Date().getFullYear()} Amit Singh. All rights reserved.
            </p>
            <p className='text-xl sm:text-2xl lg:text-3xl order-first sm:order-none'>
                That's all folks!
            </p>
            <p className='text-sm sm:text-base text-center sm:text-right'>
                Designed and Developed by Senpai
            </p>
        </div>
    </div>
  )
}

export default Footer