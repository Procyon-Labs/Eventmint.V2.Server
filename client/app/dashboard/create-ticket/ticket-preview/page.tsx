import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="px-[32px] w-full flex gap-[48px]">
      <div className='w-1/2 flex flex-col items-start gap-[24px] py-[16px] flex-[1_0_0%] rounded-[16px] bg-[#191D23]
 '>
       <div className='flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]
'>
        <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B]'>
        Ticket Name
        </Typography>
              <Typography customClassName='text-body-s font-open-sans text-[#E7EAEE]'>
        Web3 Fundraising Event
        </Typography>
       </div>
       <div  className='flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]
'>
       <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B] '>
       Ticket Description
        </Typography>
        <Typography  customClassName='text-body-s font-open-sans text-[#E7EAEE]'>
        Come join the next big thing in the Web3 space. 
        </Typography>
       </div>
       <div  className='flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]
'>
       <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B] '>
       Category
        </Typography>
        <Typography  customClassName='text-body-s font-open-sans text-[#E7EAEE]'>
        Fundraiser
        </Typography>
       </div>
       <div  className='flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] border-b border-[#323A46]
'>
       <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B] '>
       Amount
        </Typography>
        <Typography  customClassName='text-body-s font-open-sans text-[#E7EAEE]'>
        20 SOL
        </Typography>
       </div>
       <div  className='flex flex-col items-start gap-[16px] self-stretch px-[16px] pb-[16px] 
'>
       <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B]'>
       Amount
        </Typography>
        <Typography  customClassName='text-body-s font-open-sans text-[#E7EAEE]'>
        100
        </Typography>
       </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4 items-start">
      <div>
      <Typography customClassName='text-body-xxsx font-open-sans text-[#64748B]'>
        Ticket Name
        </Typography>
      </div>
  <div className="relative max-w-[400px] group max-h-[400px]">
    <Image
      className="relative rounded-[16px]"
      src={'/AvatarGuy2.svg'}
      alt="avatar-guy"
      width={400}
      height={400}
    />
    <div
      className="absolute bottom-0 rounded-b-[16px] w-full h-[56px] px-[16px] py-[8px] justify-end items-center gap-[4px] flex flex-1 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <Typography customClassName="text-body-xxsx font-open-sans text-[#E7EAEE]">
        Ticket-file.jpg
      </Typography>
    </div>
  </div>
</div>

     </div>
  )
}
