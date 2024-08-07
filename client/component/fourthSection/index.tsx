import React from 'react'
import Image from 'next/image'
import { Typography } from '../typogrphy'
import Guide from './guide'
import HowItworks from "@/component/svgs/NewImages/Desktop-How-It-Works-Blur.png";

export default function FourthSection() {
  return (
    <section className="text-white relative h-full w-full pt-[40px] pb-[4rem]">
        <Image
          className="absolute mx-auto z-[0]"
          src={HowItworks}
          alt="fourthImage"
          fill
        />
        <div className="px-[64px] mx-auto max-w-[1440px]">
          <div className="mx-auto pb-[3rem]">
            <div className="mx-auto text-center">
              <h2 className="text-h-l font-Ubuntu mmd:text-h-ls">
                How it<span className="text-[#A7FFA7]"> Works</span>
              </h2>
            </div>
            <div className="mx-auto text-center">
              <Typography
                variant="body-l"
                font="Ubuntu"
                customClassName="font-Ubuntu text-center mmd:text-body-m "
                color="fontBodyMGreyishColor"
              >
                Here’s is a detailed explanation of how EventMint works,
                <br />
                with a detailed guide to its processes and functionalities
                <br />
                for seamless event planning
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-3">
            <Guide header="Sign Up" icon="/signUp.svg" body="Participate in event activities, join group chats, and interact with sponsors" number="1" />
            <Guide header="Browse Events" icon="/browseEvent.svg" body="Explore upcoming events and select the ones you’re interested in." number="2" /> 
            <Guide header="Puchase Tickets" icon="/purchaseTickets.svg" body="Buy your tickets with ease and have them sent to your wallet." number="3" />
            <Guide header="Engage & Interact" icon="/engage.svg" body="Participate in event activities, join group chats, and interact with sponsors" number="4" />
            <Guide header="Earn Rewards" icon="/earn.svg" body="Collect points and rewards for your engagement and activities" number="5" />
            <Guide header="Plan Budgets" icon="/planBudget.svg" body="Use our budget planning protocol to efficiently manage and allocate event funds" number="6" />
          </div>
        </div>
      </section>

  )
}
