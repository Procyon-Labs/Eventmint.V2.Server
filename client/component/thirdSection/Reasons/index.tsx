import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import React from 'react'
type ReasonsProps ={
    header:string,
    body:string,
    image:string,
}
export default function Reasons(prop:ReasonsProps) {
    const {header,body,image} = prop
  return (
        <div className='h-[286px]'>
             <div className=' relative w-full h-[226px] py-[64px] px-[24px] flex flex-col items-center gap-4  rounded-[24px] backdrop-blur-reason bg-custom-purple-transparent'>
        <Image className='absolute z-[-1] top-[-55px]' src={image} alt='reason_1' height={120} width={120}/>
        <Typography variant="h6" customClassName='font-Ubuntu text-center' color="fontgreenishColor">
            {header}
        </Typography>
        <Typography variant="body-r" customClassName='font-open-sans text-center' color="fontBodyRGreyishColor">
            {body}
        </Typography>
    </div>
        </div>
  )
}
