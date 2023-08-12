import React from 'react'

function Index({children}) {
  return (
    <div className='grid md:grid-cols-4 gap-10 md:gap-2'>
    {children}
    </div>
  )
}

export default Index