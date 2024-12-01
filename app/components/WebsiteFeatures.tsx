import React from 'react'
import GradientButton from './GradientButton'
import ChooseUsCard from './ChooseUsCard'

const WebsiteFeatures = () => {
  return (
    <div className='overflow-hidden pt-[10vh] bg-[#F3F2FF]'>
      <div className='overflow-hidden bg-[#F3F2FF] h-[20vh] rounded-[50%] absolute w-[-webkit-fill-available] mt-[-10vh]'></div>
        <div className='pt-[16vh] flex flex-col lg:flex-row lg:justify-between p-10' style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>
            <div className='flex flex-col w-full justify-start gap-4 basis-[40%] p-2 text-white'>
                <h1 className='font-semibold text-4xl'>Our Bespoke Website Includes The Following</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</p>
                <GradientButton propClass=' w-[50%] z-3 2xl:scale-150' gradientStyle="linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)" buttonText="GET A PROPOSAL"/>
            </div>
            <div className="cards flex flex-col gap-2 basis-[40%]">
              <ChooseUsCard propClass='flex-col'></ChooseUsCard>
              <ChooseUsCard propClass='flex-col'></ChooseUsCard>
              <ChooseUsCard propClass='flex-col'></ChooseUsCard>
            </div>
        </div>
    </div>
  )
}

export default WebsiteFeatures