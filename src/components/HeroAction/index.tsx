import React from 'react'
import Image from 'next/image'



//components
import Wrapper from "@/components/Wrapper"
import ArrowDown from "@/components/Arrow"


function Index() {
  return (
    <div className='pt-10 md:pt-16 relative'>
      <Wrapper>
        {/* container  */}
        <div className='grid md:grid-cols-2'>
            {/* left */}
            <div className='flex flex-col justify-center gap-6 md:gap-8' >
                <div className='grid gap-1 '>
                    <h1 className='font-bold text-2xl md:text-4xl text-slate-800'>How we Work?</h1>
                    <h2 className='font-medium opacity-60 md:opacity-80 text-xs text-slate-600'>{"Pushing Boundaries of What's possible"}</h2>
                </div>
                <div>
                    <p className='font-medium opacity-70 text-xs md:text-sm max-w-[36ch] md:max-w-[48ch] text-slate-600'>
                        Whether you want to design and test a prototype, rapidly bring your software to life or optimize the performance of your current product
                    </p>
                </div>

                <div>
                <button className='px-6 transition hover:shadow-md shadow-sm py-2 text-emerald-400 bg-slate-50 border-emerald-400 border hover:border-0 hover:bg-emerald-400 hover:text-slate-100 text-sm rounded-md'>Request a quote</button>
                </div>

            </div>
            {/* right */}
            <div>
            <Image src='/images/Strategic consulting-pana.png' width='400' height='360' alt='banner-showing-website-negotiation'/>
            </div>
        </div>
      </Wrapper>
      <ArrowDown />
    </div>
  )
}

export default Index