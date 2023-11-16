import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <header className=" h-[770px] pt-7 bg-slate-100 desktop:px-14 ">
      <div className="flex justify-between items-center mb-20">

       <div className="w-32 ml-4 desktop:w-52">
        <img src="../public/images/logo.svg" alt="logo" /></div> 
         <button className="text-sm border rounded-full px-7 py-1 mr-4 bg-white text-neutral-200 font-open font-bold shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] transition-all animate-bounce hover:text-neutral-300 hover:py-2 desktop:py-4 desktop:px-14 desktop:hover:py-5">
          Try It Free</button>
      </div>

<div className="flex flex-col text-center gap-2 desktop:flex-row desktop:text-start ">
  
  <div className='desktop:w-[750px] desktop:mr-10'>
  <h1 className="text-[26.5px] mx-10 mb-5 font-poppins text-neutral-200 desktop:text-[40px] desktop:mx-0 desktop:leading-normal desktop:mt-24 animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in-out animate-fill-both">
    Build The Community Your Fans Will Love</h1>

<p className="mx-[15px] mb-7 font-open text-md text-neutral-200 desktop:mx-0 animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in-out animate-fill-both">
Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
Create connections with your users as you engage in genuine discussion.</p>

<button className="border rounded-full py-4 px-11 mx-10 bg-primary text-neutral-100 font-open font-bold text-[16px] transition-all hover:bg-pink-300 hover:py-5 desktop:px-16 desktop:mx-0 animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in-out animate-fill-both">
  Get Started For Free</button>
  </div>

 <div className="mx-7 my-12 desktop:my-0">
  <img className='animate-spin animate-once animate-duration-[1700ms] animate-ease-in-out animate-alternate-reverse animate-fill-both' src="../public/images/illustration-mockups.svg"/></div> 

</div>
</header>
  )
}

export default Header