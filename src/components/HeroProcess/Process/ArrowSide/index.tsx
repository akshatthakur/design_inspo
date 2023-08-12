import React from 'react'

//icon
import {GoArrowRight} from "react-icons/go"

function Index() {
  return (
    <div className='p-1 hover:shadow-md hover:bg-emerald-600 hover:text-lg hover:cursor-pointer transition bg-emerald-400 h-[48px] text-slate-50 w-[48px] shadow-sm flex rounded-full items-center justify-center absolute top-[90%] left-[45%]'>
        <GoArrowRight />
    </div>
  )
}

export default Index