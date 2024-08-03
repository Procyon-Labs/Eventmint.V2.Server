import React from 'react'
import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import { Button } from '@/component/button'
import SecondHero from '../secondHero'
export default function FirstHero() {
  return (
    <div className="mx-auto w-full h-[848px] z-[0] relative">
    <Image
      className="z-[0]  absolute backdrop-blur-lg"
      src={"/firstBlurImagedone.png"}
      alt="first"
      fill
    />
    <div className=" mx-auto max-w-[740px] flex flex-col gap-8  relative mb-[32px]">
      <div>
        <Typography
          customClassName="text-white font-Ubuntu text-center"
          variant="h1"
          color="fontBodyWhiteishColor"
        >
          Events the way you
        </Typography>{" "}
        <Typography
          customClassName="text-gradient font-Ubuntu text-center"
          variant="h1"
        >
          Imagine
        </Typography>
      </div>
      <div>
        <Typography
          customClassName="text-white font-Ubuntu text-center"
          variant="body-m"
          color="fontBodyWhiteishColor"
        >
          Get early access to our platform and be the first to experience
          enhanced event interactions
        </Typography>
      </div>
      <div>
        <Button
          label="Get started"
          customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] mx-auto"
          size="moreMedium"
          fit
        />
      </div>
    </div>
    <div className='mx-auto text-white relative'>
      <SecondHero/>
    </div>
  </div>
  )
}
