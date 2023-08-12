import React from 'react'

//components
import Wrapper from "@/components/Wrapper"

function Index() {
  return (
    <div className='md:mt-10 mt-8 py-8 md:py-10'>
     <Wrapper>
        {/* content here */}
        <div className='grid gap-8 md:gap-10 text-slate-900 text-center'>
            {/* upper */}
            <div >
                <h2 className=' font-semibold text-lg'>Are you ready to work with us?</h2>
                <p className='mx-auto text-xs md:text-sm opacity-70 max-w-[36ch] md:max-w-[48ch]'>Let's get to know you and your project</p>
            </div>
            <div>
                <button className='px-6 transition hover:shadow-md shadow-sm py-2 text-emerald-400 bg-slate-50 border-emerald-400 border hover:border-0 hover:bg-emerald-400 hover:text-slate-100 text-sm rounded-md'>Request a qoute</button>
            </div>
        </div>
     </Wrapper>

    </div>
  )
}

export default Index