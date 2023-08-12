import React from 'react'

//icons
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {SiKasasmart} from 'react-icons/si'

//components
import Wrapper from "@/components/Wrapper"
import Service from './Service'

//utils
import { date } from '@/utils/date'

const services =[
    {
        type:"mobile development",
        list:[
            'Native apps- iOS, Android',
            "Hybrid mobile apps",
            "cross platform mobile apps"
        ]
    },
    {
        type:"Creative design",
        list:[
            'website design',
            'App design',
            'Print design',
            'Logo design and branding'
        ]
    },
    {
        type:'Digital Marketing',
        list:[
            'SEO',
            'SMM',
            'PPC',
            'Reputation Management'
        ]
    },
    {
        type:'Software testing',
        list:[
            'product video',
            'Rich media banner',
            'corporate video'
        ]
    },
    {
        type:'Video production',
        list:[
            'mobile app testing',
            'web application testing',
            'desktop applications testing'
        ]
    }
]

function Index() {
  return (
    <>
    <div  className='md:mt-10 mt-8 py-8 md:py-10 text-slate-50  bg-slate-900'>
        <Wrapper>
            <div >
               {/* upper footer section */}
               <div className='grid gap-4 md:gap-2 md:grid-cols-3 lg:grid-cols-6'>
                  {/* logo and company name */}
                  <div className='flex gap-2 '>
                  <div className='text-emerald-500 mt-1'><SiKasasmart /></div>
                    <h2 className='font-semibold text-lg'>Smart Inc</h2>
                  </div>
                  {
                    services.map((service, id)=>(<Service key={id} type={service.type} list={service.list}/>))
                  }
               </div>
               {/* lower footer section */}
               <div className='flex justify-between items-center mt-2'>
                        {/* time section */}
                        <div>
                            <small>
                                {
                                date.toUTCString().split(" ").slice(0,4).join(" ")
                                }
                            </small>
                        </div>
                        {/* social icons */}
                        <div className='flex gap-2 text-lg' >
                        <a className='hover:text-emerald-300 transition-all'> <BsTwitter /></a>
                        <a className='hover:text-emerald-300 transition-all'>   <FaFacebookF/> </a>
                        <a className='hover:text-emerald-300 transition-all'> <FaLinkedinIn/></a>
                        <a className='hover:text-emerald-300 transition-all'> <AiOutlineGooglePlus /></a>                         
                                                               
                        </div>
               </div>

               {/* copy rights information */}
               
            </div>
        </Wrapper>
    </div>
    <div className='py-2 bg-slate-600 text-slate-50 text-sm'>
        <Wrapper>
            <div className='flex justify-center'>
                <p>&#169; {date.getFullYear()} Smart Inc &#8482;. All rights reserved</p>
            </div>
        </Wrapper>
    </div>
    </>
  )
}

export default Index