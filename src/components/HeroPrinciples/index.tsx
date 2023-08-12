import React from 'react'
//icons
import {TbDeviceDesktopCode, TbDeviceDesktopCog} from 'react-icons/tb'
import {FaHandsHelping} from 'react-icons/fa'
import {FaArrowsDownToPeople} from "react-icons/fa6"
import { GoGoal } from 'react-icons/go'
import {PiShootingStarThin} from 'react-icons/pi'
//components
import Wrapper from "@/components/Wrapper"
import PrincipleWrapper from './PrincipleWrapper'
import Principle from "./Principle"
const principles=[
  {
    content:"Continuous delivery of valuable software",
    Icon: TbDeviceDesktopCode
  },
  {
    content:"Technical excellence and intuitive design",
    Icon:TbDeviceDesktopCog 
  },
  {
    content:"Constant communication with a customer",
    Icon:FaArrowsDownToPeople 
  },
  {
    content:"Shorter sprints to deliver working software frequently",
    Icon:GoGoal 
  },
  {
    content:"Simplicity is essential",
    Icon:PiShootingStarThin
  },
  {
    content:"Motivated developers for 100% customer satisfaction",
    Icon:FaHandsHelping 
  }
]

function Index() {
  return (
    <div className='md:mt-10 mt-8 py-8 md:py-10'>
        <Wrapper>
            {/* content */}
            <div className='grid gap-8 md:gap-10 text-slate-900'>
                {/* title  */}
                <h2 className='text-center font-semibold text-lg'>Our Principles of development Process</h2>
                {/* principles */}
                <PrincipleWrapper>
                  {
                    principles.map((principle, key)=><Principle key={key} {...principle}/>)
                  }
                </PrincipleWrapper>
                {/* conclusion */}
                <div className='flex justify-center items-center opacity-80'>
                <p className='text-center max-w-[48ch] text-xs md:text-sm'>
                  With transparent delivery process, excellent communication and flexible approach we deliver custom software projects for all types of businesses, from startups to enterprises
                </p>
                </div>
                
            </div>
        </Wrapper>
    </div>
  )
}

export default Index