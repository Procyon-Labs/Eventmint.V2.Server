import React from "react";
import Image from "next/image";
import { Typography } from "../typogrphy";
import ForwardInteraction from "./forwardInteraction";
import ReverseInteraction from "./reverseInteraction";
import WeOffer from "@/component/svgs/NewImages/Desktop-What-We-Offer-Blur.png";

export default function SecondSection() {
  return (
    <section className="w-full h-full pb-[2rem] mt-[40px]">
      <div className=" mx-auto relative text-white px-[64px] mmd:px-[32px] w-fit">
        <Image
          className="absolute top-[-100px] left-0 xl:left-[-100px] "
          src={WeOffer}
          alt="second_blur"
          width={588}
          height={688}
        />
        <div className="mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-h-l font-Ubuntu mb-4">
              What we<span className="text-[#A7FFA7]"> Offer</span>
            </h2>
          </div>
          <div className="mx-auto text-center">
            <Typography
              variant="body-l"
              font="Ubuntu"
              customClassName="font-Ubuntu text-center"
              color="fontBodyMGreyishColor"
              className="mb-2"
            >
              {" "}
              Here are the numerous standout features of EventMint <br /> that
              set it apart from the competition
            </Typography>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-8">
          <ForwardInteraction
            header="Interactive Group Chats"
            body="Connect with sponsors and fellow attendees in real-time through event-specific group chats."
            image="/Interactive Chats.png"
            height={316}
            width={612}
            customClass="mxl:max-w-[350px]"
          />
          <ReverseInteraction
            header="Reward System"
            body="Earn points and rewards for participating in activities and engaging sponsors."
            image="/Trophy.png"
            height={360}
            width={360}
            customClass="top-[-120px] mxl:max-w-[350px]"
          />
          <ForwardInteraction
            header="Live Q&A Sessions"
            body="Get your questions answered by speakers and organizers during live events."
            image="/Mic.png"
            height={360}
            width={360}
            customClass="top-[-100px] left-[50px] mxl:max-w-[350px]"
          />
          <ReverseInteraction
            header="Event Analytics"
            body="Gain insights into your event partcipation and engagement"
            image="/chart-dynamic-color.png"
            height={360}
            width={360}
            customClass="top-[-60px] mxl:max-w-[300px]"
          />
          <ForwardInteraction
            header="Budget Planning Protocol"
            body="Streamline event budgeting with our protocol, ensuring transparent and efficient fund allocation"
            image="/Protocol.png"
            height={360}
            width={360}
            customClass="top-[-100px] left-[50px] mxl:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
