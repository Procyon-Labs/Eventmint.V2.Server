import React from 'react'
import { Typography } from '../typogrphy'
import { Button } from '../button'
type TicketCompProps = {
    first: string;
    second: string;
    third:string;
    fourth:string;
    labelButton:string;
    icon : React.ReactNode;

}
export default function TicketComponent(prop:TicketCompProps) {
    const {first,
        second,
        third,
        fourth,
        icon,
        labelButton
    } = prop;

  return (
    <div className='flex flex-col gap-y-[16px]'>
        <div className="">
        <Typography customClassName='text-body-xxsx font-open-sans ' color="fontBodyMGreyishColor">
        {first}
        </Typography>
        </div>
        <div className='mx-auto w-full px-[32px] py-[32px] flex flex-col gap-y-[16px] border text-center rounded-[16px] border border-dashed border-[#4B5768] bg-[rgba(0,0,0,0.10)]'>
           <div className="text-center mx-auto">
            {icon}
           </div>
           <div className="flex flex-col gap-[8px]">
            <Typography customClassName='text-body-xxs font-open-sans text-center' color="fontBodyRGreyishColor">
                {second}
            </Typography>
            <Typography customClassName='text-small font-open-sans text-center' color="fontBodyMGreyishColor">
                {third}
            </Typography>
           </div>
           <div className="mx-auto">
           <Button
              label={labelButton}
              customClassName="text-eventMint font-open-sans bg-gradient-to-b-custom rounded-[12px] text-center"
              size="small"
              fit
            />
           </div>
           <div>
            <Typography customClassName='text-eventMint font-open-sans text-center' color="fontBodyMGreyishColor">
                {fourth}
            </Typography>
           </div>
        </div>
    </div>
  )
}
