import React from 'react'

const Target = ({img,title,info,}) => {
  return (
    <div className=' block text-center border border-transparent rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] p-5 mx-3 mt-16 desktop:flex desktop:justify-between desktop:pl-28 animate-jump-out animate-thrice animate-duration-[900ms] animate-ease-in-out animate-alternate-reverse animate-fill-both  '>

       <div className='hidden desktop:block text-start font-open text-neutral-300 w-[500px] py-32'>
        <h1 className='hidden desktop:block desktop:font-poppins desktop:text-2xl desktop:text-neutral-200 desktop:mb-5 '>
        {title}</h1>
       <p className='hidden desktop:block'>{info}</p></div>

       <img className='mb-16 my-5 desktop:w-96 desktop:mr-5'
       src={`public/images/illustration-${img}`}/>

       <h1 className='font-poppins text-2xl text-neutral-200 mb-5 desktop:hidden'>
        {title}</h1>
       <p className='font-open text-neutral-300 desktop:hidden'>{info}</p>
       
    </div>
  )
}

export default Target