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
    <div className="px-[56px] py-[48px] max-w-[1440px] mx-auto rounded-custom border-custom-rgba bg-custom-radial-reverse backdrop-blur-custom">
    <div className="flex items-center gap-4">
    <div className='w-[612px] h-[316px] relative'>
    <Image className={` absolute ${customClass ? customClass:""}`} src={image} alt="interactive_chat" width={width} height={height}/>
  </div>
    <div className="max-w-[536px] w-full h-full flex flex-col gap-8">
    <Typography color="fontBodyWhiteishColor" font="Ubuntu" variant="h3" customClassName="font-Ubuntu">
    {header}
    </Typography>
    <Typography color="fontBodyPurpishColor" variant="body-l" customClassName="font-Ubuntu">
        {body}
    </Typography>
  </div>
    </div>
</div>

  )
}
