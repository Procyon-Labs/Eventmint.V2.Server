import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import React from 'react'
type ReasonsProps ={
    header:string,
    body:string,
    image:string,
    Image2?:string | any,
}
export default function Reasons(prop:ReasonsProps) {
    const {header,body,image, Image2} = prop
  return (
        <div className='h-[286px]'>
             <div className='relative w-full h-[226px] py-[64px] px-[24px] flex flex-col items-center gap-4  rounded-[24px] backdrop-blur-reason bg-custom-purple-transparent'>
        <Image className='absolute z-[-1] top-[-55px]' src={image} alt='reason_1' height={120} width={120}/>
        <Image className='absolute top-[-120px] mmd:top-[-80px]' src={Image2} alt={Image2} width={600} height={226}/>
        <Typography variant="h6" customClassName='font-Ubuntu text-center mmd:text-h-xxs' color="fontgreenishColor">
            {header}
        </Typography>
        <Typography variant="body-r" customClassName='font-open-sans text-center mmd:text-body-xxxs' color="fontBodyRGreyishColor">
            {body}
        </Typography>
    </div>
        </div>
  )
}
