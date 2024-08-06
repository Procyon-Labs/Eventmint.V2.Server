import React from 'react'
import { Typography } from '@/component/typogrphy'
import Image from 'next/image'

type ReverseInteractionProps={
    header:string,
    body: string,
    image: string,
    height: number,
    width:number,
    customClass?:string,
}
export default function ReverseInteraction(prop:ReverseInteractionProps) {
    const {header, body, image, height, width,customClass} = prop
  return (
    <div className="px-[56px] mmd:px-[28px] py-[48px] mmd:py-[24px] max-w-[1440px]   mx-auto rounded-custom border-custom-rgba bg-custom-radial-reverse backdrop-blur-custom">
    <div className="flex items-center gap-4">
    <div className='w-[612px] h-[316px] mmd:h-[200px] relative mxl:max-w-[400px]'>
    <Image className={` absolute ${customClass ? customClass:""}`} src={image} alt="interactive_chat" width={width} height={height}/>
  </div>
    <div className="max-w-[536px] mxl:max-w-[400px] mmd:max-w-[300px]  w-full h-full flex flex-col gap-8">
    <Typography color="fontBodyWhiteishColor" font="Ubuntu" variant="h3" customClassName="font-Ubuntu  mmd:text-h-r">
    {header}
    </Typography>
    <Typography color="fontBodyPurpishColor" variant="body-l" customClassName="font-Ubuntu mmd:text-body-m">
        {body}
    </Typography>
  </div>
    </div>
</div>

  )
}
