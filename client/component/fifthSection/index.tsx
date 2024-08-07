import React from 'react'
import Image from 'next/image'
import { Typography } from '../typogrphy'
import Subscribe from './subscribe'
import FooterSection from '@/component/svgs/NewImages/Desktop-Footer-Blur.png';

export default function FifthSection() {
  return (
    <section className="relative h-full w-full pb-[72px]">
        <Image
          className="absolute left-[35%]"
          src={FooterSection}
          alt="fifthBlurImage"
          width={400}
          height={400}
        />
        <div className="px-[64px] w-full flex items-center gap-[3rem] mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-[48px]  w-1/2">
            <div className="flex flex-col gap-4">
              <Image src={"/logo.png"} alt="logo" width={50} height={50} />
              <div className="flex items-center gap-4">
                <Image
                  src={"/Instagram.svg"}
                  alt="logo"
                  width={56}
                  height={56}
                />
                <Image src={"/twitter.svg"} alt="logo" width={56} height={56} />
                <Image src={"/Github.svg"} alt="logo" width={56} height={56} />
                <Image
                  src={"/Linkedin.svg"}
                  alt="logo"
                  width={56}
                  height={56}
                />
              </div>
            </div>
            <div className="flex justify-between  w-full">
              <div className="flex flex-col gap-4">
                <Typography
                  variant="h6"
                  color="fontBodyWhiteishColor"
                  customClassName="font-Ubuntu mmd:text-h-xxs"
                >
                  Quick Links
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Home
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Features
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Benefits
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Events
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Typography
                  variant="h6"
                  color="fontBodyWhiteishColor"
                  customClassName="font-Ubuntu mmd:text-h-xxs"
                >
                  Legal
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Terms of Use
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Privacy Policy
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <Typography
                  variant="h6"
                  color="fontBodyWhiteishColor"
                  customClassName="font-Ubuntu mmd:text-h-xxs"
                >
                  Need Help?
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sas mmd:text-eventMint"
                >
                  Contact Support
                </Typography>
                <Typography
                  variant="body-s"
                  color="fontAvatarGreyishColor"
                  customClassName="font-open-sa mmd:text-eventMint"
                >
                  Help Center
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Subscribe />
          </div>
        </div>
      </section>
  )
}
