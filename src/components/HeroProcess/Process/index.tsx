import React from 'react'

//components
import ArrowRight from "./ArrowSide"

interface IProcess{
  video:string,
  title:string
}

function Index(props:IProcess) {
  return (
      <div className='relative '>
            <div className='max-w-[210px] mx-auto grid gap-2 bg-white pb-8 rounded-md overflow-hidden shadow-sm hover:shadow hover:cursor-pointer'>
      {/* video wrapper */}
      <div>
        <video src={props.video} autoPlay={true}>
        </video>
      </div>
       {/* description */}
       <div>
        <h4 className='text-sm text-center opacity-80 font-medium'>{props.title}</h4>
       </div>
       <ArrowRight />
    </div>
      </div>
  )
}

export default Index