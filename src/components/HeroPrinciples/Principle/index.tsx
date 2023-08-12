import React from 'react'
import { IconType } from 'react-icons'

interface IPrinciple{
  content:string,
  Icon:IconType
}

function Index(props:IPrinciple) {
  const content =props.content.split(" ")

    return (
    <div className='flex rounded-md overflow-hidden shadow-md hover:shadow-lg hover:cursor-pointer'>
      {/* left */}
      <div className='flex p-4 items-center text-4xl bg-emerald-500 text-slate-50 justify-center'>
        <props.Icon />
      </div>
      {/* right */}
      <div className='flex p-4 items-center text-sm '>
        <h4 className=" text-emerald-500">
          {
            content.slice(0,2).join(" ")+" "
          }
          <span className='text-slate-700'>
            {
            content.slice(2).join(" ")
            }
          </span>
        </h4>
      </div>
    </div>
  )
}

export default Index