import React from 'react'
import { Typography } from '@/component/typogrphy'
import Image from 'next/image'
import { Button } from '@/component/button'
export default function FirstHero() {
  return (
    <div className=" mx-auto w-[844px] h-[780px]  z-[0] relative">
          <Image
            className="z-[0] absolute backdrop-blur-lg"
            src={"/firstBlurImagedone.png"}
            alt="first"
            // placeholder="blur"
            fill
          />
          <div className="flex flex-col gap-8  absolute z-1 top-[64px]">
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
        </div>
  )
}
