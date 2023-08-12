import React from 'react'


interface IService{
    type:string,
    list:string[]
}

function Index(props:IService) {
  return (
    <div className='grid gap-2'>
        <h3 className='font-semibold '>{props.type}</h3>
        <ul className='font-[200] text-sm grid gap-1'>
            {
                props.list.map((service,id)=>(<li key={id}>{service}</li>))
            }
        </ul>
    </div>
  )
}

export default Index