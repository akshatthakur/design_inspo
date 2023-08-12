'use client'
import React, {useState, useRef, useEffect} from 'react'
import clsx from 'clsx'
//icon set
import {SiKasasmart} from "react-icons/si"
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'
//wrapper
import Wrapper from "@/components/Wrapper"

function Index() {
   
  const [isOpen, setIsOpen]= useState(false);
  const hamBurgerRef= useRef()
  const menuClasses= clsx(!isOpen && 'hidden',isOpen && 'flex' ,'bg-slate-800', 'flex-col', 'md:hidden', 'gap-6', 'absolute', 'top-12', 'min-h-screen', 'left-0', 'right-0', 'z-10', 'items-center', 'pt-10 transition')
  function openMenu(){
     setIsOpen(prevState=>!prevState)
  }
   

  return (
    <header className='py-4 md:py-4 shadow-sm'>
      <Wrapper>
        <div className='flex justify-between items-center '>
             {/*left  */}
             <div className='flex gap-2 items-end '>
              <div className='text-emerald-500 mb-1'><SiKasasmart /></div>
             <h2 className='font-semibold text-base text text-slate-600'>Smart <span className='text-emerald-600'> Inc. </span></h2>
             </div>
             {/* left */}
             <div className='hidden md:flex space-x-6 items-center'>
                <nav className='flex space-x-4 text-sm text-slate-700'>
                    <a href="#services" className='hover:text-emerald-800'>Our Services</a>
                    <a href="#work" className='hover:text-emerald-800'>Our Work</a>
                    <a href="#about" className='hover:text-emerald-800'>About Us</a>
                    <a href="/blog" className='hover:text-emerald-800'>Blog</a>
                    <a href="/contact" className='hover:text-emerald-800'>Contact Us</a>
                </nav>
                <button className='px-6 py-2 transition hover:border hover:shadow-md shadow-sm hover:bg-slate-50 hover:text-emerald-400 border-emerald-400 bg-emerald-400 text-slate-100 text-sm rounded-md'>Request a quote</button>
             </div>
             <div onClick={openMenu} className='md:hidden text-slate-700 font-semibold text-lg'>
               {
                isOpen ?
                (<RxCross2 color="rgb(51 65 85)" className='text-slate-700'/>):
                (<RxHamburgerMenu color="rgb(51 65 85)" className='text-slate-700'/>)
                }
              </div> 
              {/* smaller devices */}
              <div className={menuClasses}>
                <nav className='flex gap-6 items-start flex-col text-sm text-slate-100'>
                    <a href="#services" className='hover:text-emerald-800'>Our Services</a>
                    <a href="#work" className='hover:text-emerald-800'>Our Work</a>
                    <a href="#about" className='hover:text-emerald-800'>About Us</a>
                    <a href="/blog" className='hover:text-emerald-800'>Blog</a>
                    <a href="/contact" className='hover:text-emerald-800'>Contact Us</a>
                </nav>
                <button className='px-6 py-2 transition hover:border hover:shadow-md shadow-sm hover:bg-slate-50 hover:text-emerald-400 border-emerald-400 bg-emerald-400 text-slate-100 text-sm rounded-md'>Request a quote</button>
             </div>          
        </div>
      </Wrapper>
    </header>
  )
}

export default Index