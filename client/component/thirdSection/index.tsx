import React from "react";
import Image from "next/image";
import { Typography } from "../typogrphy";
import Reasons from "./Reasons";
import EnhancedEngage from "@/component/svgs/NewImages/Desktop-Benefits-Enhanced-Engagements-Blur.png";
import BudgetPlanning from "@/component/svgs/NewImages/Desktop-Benefits-Budget-Planning-Protocol-Blur.png";
import ExclusiveAward from "@/component/svgs/NewImages/Desktop-Benefits-Exclusive-Rewards-Blur.png";
import PersonalExperience from "@/component/svgs/NewImages/Desktop-Benefits-Personalized-Experience-Blur.png";
import SeamlessTicket from "@/component/svgs/NewImages/Desktop-Benefits-Seemless-Ticket-Blur.png";
import RealTime from "@/component/svgs/NewImages/Desktop-Benefits-Real-Time-Updates-Blur.png";
import smartFund from "@/component/svgs/NewImages/Desktop-Benefits-Smart-Fundraising-Blur.png";
import WhyChoose from "@/component/svgs/NewImages/Desktop-Why-Choose-Eventmint-Blur.png";

export default function ThirdSection() {
  return (
    <section className="relative w-full pb-[2rem] ">
      <div className="relative mx-auto w-fit">
        <Image
          className="absolute right-0 2xl:right-[-120px]"
          src={WhyChoose}
          alt="thirdBlurImage"
          width={400}
          height={400}
        />

        <div className="relative mx-auto text-white py-[40px] px-[64px]">
          <div className="mx-auto pb-[3rem]">
            <div className="mx-auto text-center">
              <h2 className="text-h-l font-Ubuntu mmd:text-h-ls mb-2">
                Why Choose <span className="text-[#A7FFA7]"> EventMint?</span>
              </h2>
            </div>
            <div className="mx-auto text-center">
              <Typography
                variant="body-l"
                font="Ubuntu"
                customClassName="font-Ubuntu text-center mmd:text-body-m"
                color="fontBodyMGreyishColor"
                className=" text-xl mb-2"
              >
                Here’s why EventMint is the Ideal choice for your event <br />
                planning needs.
              </Typography>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid-container">
              <div className="reasons">
                <Reasons
                  header="Seamless Ticket Purchase"
                  body="Easily buy tickets and receive them directly in your wallet"
                  image="/reason1.png"
                  Image2={SeamlessTicket}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Enhanced Engagement"
                  body="Participate in interactive activities and connect with other attendees and sponsors"
                  image="/reason2.png"
                  Image2={EnhancedEngage}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Exclusive Rewards"
                  body="Earn rewards for your interaction and active participation during events"
                  image="/reason3.png"
                  Image2={ExclusiveAward}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Real-Time Updates"
                  body="Stay informed with live updates and announcements from event organizers"
                  image="/reason4.png"
                  Image2={RealTime}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Personalized Experience"
                  body="Enjoy a tailored event experience based on your interests and activities"
                  image="/reason5.png"
                  Image2={PersonalExperience}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Smart Fundraising"
                  body="Utilize smart contract-based fundraising to secure transparent and secure event financing"
                  image="/reason6.png"
                  Image2={smartFund}
                />
              </div>
              <div className="reasons">
                <Reasons
                  header="Budget Planning Protocol"
                  body="Efficiently manage event budgets with our protocol, ensuring optimal allocation and utilization of funds"
                  image="/reason7.png"
                  Image2={BudgetPlanning}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
