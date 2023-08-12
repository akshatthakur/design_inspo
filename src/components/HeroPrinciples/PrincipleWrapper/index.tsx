import React from 'react'



function Index({children}) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {children}
    </div>
  )
}

export default Index