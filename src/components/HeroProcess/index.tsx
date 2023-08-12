import React from 'react'


//components
import Wrapper from "@/components/Wrapper"
import ProcessWrapper from "./ProcessWrapper"
import Process from "./Process"
const processes=[
  {
    video:"/videos/product-definition.mp4",
    title:"Product definition"
  },
  {
    video:"/videos/designing.mp4",
    title:"UI/UX, graphics design"
  },
  {
    video:"/videos/development.mp4",
    title:"Software development"
  },
  {
    video:"/videos/bug-fixing.mp4",
    title:"QA and bug fixing"
  }
]
function Index() {
  return (
    <div className='md:mt-10 mt-8 py-8 md:py-10 bg-emerald-50'>
       <Wrapper>
         
         <div className='grid gap-8 md:gap-10 text-slate-900'>
        {/* upper section */}
        <div className='text-center grid gap-1'>
          <h2 className=' font-semibold text-lg'>Website development life cycle</h2>
          <h4 className='mx-auto text-xs md:text-sm opacity-70 max-w-[36ch] md:max-w-[48ch]'>At Smart Inc, we strive to keep developers innovating and and  our code bases healthy</h4>
        </div>
        {/* middle section */}
          <ProcessWrapper>
            {
              processes.map((process, key)=>(<Process key={key} {...process} />))
            }
          </ProcessWrapper>
        {/* lower section */}

        <div className='text-center'>
          <p className='max-w-[36ch] md:max-w-[48ch] mx-auto text-sm opacity-80'>Utilizing an 
            <span className='text-emerald-600'>Agile Software development approach</span>
            , we build quality software fast,without <br></br> compromising ingenuity
          </p>
        </div>
         </div>

       </Wrapper>


    </div>
  )
}

export default Index