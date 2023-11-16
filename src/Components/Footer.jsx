import React from 'react'

export const Footer = () => {
  return (
    <footer className="relative z-0 bg-cyan-900 text-white mt-[-65px] pt-32 px-5 desktop:flex desktop:justify-around desktop:pb-20">

      <div className="w-80">
      <img className="w-[200px]" src="../public/images/logo.svg" alt="logo" />

       <div className="flex place-items-start mt-5">
        <img className="h-[18px] mt-[6px] mr-5" src="../public/images/icon-location.svg"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
       incididunt ut labore et dolore magna aliqua</p></div>

       <div className="flex place-items-start mt-5">
        <img className="h-[18px] mt-[6px] mr-5" src="../public/images/icon-phone.svg"/>+1-543-123-4567</div>

       <div className="flex place-items-start mt-5">
        <img className="h-[18px] mt-[6px] mr-5" src="../public/images/icon-email.svg"/> example@huddle.com</div>
      </div>

      <div className="grid grid-rows-1 mt-12 gap-3">
      <a href="/">About Us</a>
      <a href="/">What We Do</a>
      <a href="/">FAQ</a>
      <a href="/">Career</a>
      <a href="/">Blog</a>
      <a href="/">Contact Us</a>
      </div>

      <div className="flex gap-6 justify-center mt-11">
        <img className="border border-white rounded-full px-3 desktop:h-10 desktop:py-2"  src="/public/images/facebook-f.svg"  />
        <img className="border border-white rounded-full px-2 desktop:h-10 desktop:p-2"  src="/public/images/twitter.svg" />
        <img className="border border-white rounded-full p-2 px-2.5 desktop:h-10" src="/public/images/instagram.svg"/>
      </div>

      <p className="text-xs text-center mt-6 desktop:hidden">&copy; Copyright 2018 Huddle. All rights reserved.</p>

     <div className='desktop:hidden'>
      <p className="text-sm text-center mt-6">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="/">Jaaziel Polanco</a>.
      </p>
      </div>
    </footer>
  )
}
