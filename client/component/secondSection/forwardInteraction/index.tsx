import React from 'react'
import { Typography } from '@/component/typogrphy'
import Image from 'next/image'

type ForwardInteractionProps={
    header:string,
    body: string,
    image: string,
    height: number,
    width:number,
    customClass?:string,
}
export default function ForwardInteraction(prop:ForwardInteractionProps) {
    const {header, body, image, height, width,customClass} = prop
  return (
    <div className="px-[56px] mmd:px-[28px] py-[48px] mmd:py-[24px] max-w-[1440px]  mmd:w-full mx-auto rounded-custom  border-custom-rgba bg-custom-radial backdrop-blur-custom">
    <div className="flex items-center gap-4">
    <div className="mxl:max-w-[400px] lg:max-w-[536px] mmd:max-w-[300px] w-full h-full flex flex-col gap-8">
    <Typography color="fontBodyWhiteishColor" font="Ubuntu" variant="h3" customClassName="font-Ubuntu mmd:text-h-r">
    {header}
    </Typography>
    <Typography color="fontBodyPurpishColor" variant="body-l" customClassName="font-Ubuntu mmd:text-body-m">
        {body}
    </Typography>
  </div>
  <div className='mxl:max-w-[400px] lg:w-[612px]  h-[316px] mmd:h-[200px] relative'>
    <Image className={` absolute  ${customClass ? customClass:""}`}src={image} alt="interactive_chat" width={width} height={height}/>
  </div>
    </div>
</div>

  )
}
