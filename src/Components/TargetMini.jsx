import React from 'react'

const TargetMini = () => {
  return (
    <div className='desktop:flex justify-center'>
    <div className=" bg-white relative z-10 border rounded-xl mx-3 text-center mt-36 pb-11 shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] animate-bounce desktop:w-[600px] desktop:py-10">
      <h1 className='font-poppins text-[18px] text-neutral-200 my-5 mx-1 desktop:text-[27px] '>
        Ready To Build Your Community?</h1>
        <button className="border rounded-full py-2 px-12 mx-10 bg-primary text-neutral-100 font-open font-bold text-[13px] shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] transition-all hover:bg-pink-300 hover:py-3 desktop:py-4 desktop:hover:py-5 desktop:px-20">
        Get Started For Free</button>
    </div>
    </div>
  )
}

export default TargetMini