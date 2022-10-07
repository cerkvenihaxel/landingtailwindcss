import React from 'react';
export const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-8.5rem]'>
            <h2 className='text-5xl mt-12 font-medium'>{heading}</h2>
            <p className='py-9 text-base font-thin'>{message}</p>
            <button className='px-8 py-2 flex rounded justify-center items-center  border hover:bg-white hover:bg-opacity-80 hover:text-gray-600 hover:ease-in hover:duration-200 hover:translate-x-2'>Leer mas → </button>
        </div>
        <div class="custom-shape-divider-bottom-1665108543">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    
  )
}

export default Hero;