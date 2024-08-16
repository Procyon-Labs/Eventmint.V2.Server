import React from 'react'
import { Typography } from '../typogrphy'
import { Button } from '../button'
import SmallPicture from '../svgs/smallPicture';
import Cancel from '../svgs/cancel';
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
        <div className='flex flex-col gap-[1rem]'>
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
              size="smaller"
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
            {/* <div className='rounded-[16px] bg-[rgba(100,61,255,0.2)] p-[16px] items-start'>
               <div className='flex justify-between items-center self-stretch'>
                    <div className='flex items-center gap-[8px]'>
                        <div>
                            <SmallPicture/>
                        </div>
                        <div className='flex flex-col gap-[8px] items-start'>
                            <Typography customClassName='text-body-xxss font-open-sans text-[#B8A6FF]'>
                            Uploading
                            </Typography>
                            <Typography customClassName='text-small font-open-sans text-[#D0D5DD]'>
                            Ticket-img.jpg 4.5 MB
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Cancel/>
                    </div>
               </div>
               <div></div>
            </div> */}
        </div>
  )
}
