'use client'
import Subscribe from "@/component/fifthSection/subscribe";
import FirstHero from "@/component/firstSection/firstHero";
import Guide from "@/component/fourthSection/guide";
import NavBar from "@/component/navBar";
import ForwardInteraction from "@/component/secondSection/forwardInteraction";
import ReverseInteraction from "@/component/secondSection/reverseInteraction";
import Reasons from "@/component/thirdSection/Reasons";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";
import FooterSection from '@/component/svgs/NewImages/Desktop-Footer-Blur.png';
import HowItworks from "@/component/svgs/NewImages/Desktop-How-It-Works-Blur.png";
import WhyChoose from '@/component/svgs/NewImages/Desktop-Why-Choose-Eventmint-Blur.png';
import WeOffer from '@/component/svgs/NewImages/Desktop-What-We-Offer-Blur.png';
import EnhancedEngage from '@/component/svgs/NewImages/Desktop-Benefits-Enhanced-Engagements-Blur.png';
import BudgetPlanning from '@/component/svgs/NewImages/Desktop-Benefits-Budget-Planning-Protocol-Blur.png';
import ExclusiveAward from '@/component/svgs/NewImages/Desktop-Benefits-Exclusive-Rewards-Blur.png';
import PersonalExperience from '@/component/svgs/NewImages/Desktop-Benefits-Personalized-Experience-Blur.png'
import SeamlessTicket from '@/component/svgs/NewImages/Desktop-Benefits-Seemless-Ticket-Blur.png'
import RealTime from '@/component/svgs/NewImages/Desktop-Benefits-Real-Time-Updates-Blur.png';
import smartFund from '@/component/svgs/NewImages/Desktop-Benefits-Smart-Fundraising-Blur.png';
import { useState } from "react";
import MainModal from "@/component/Modal/MainModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHandler = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeHandler = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <main className="relative  bg-[var(--Shades-Black,#000)]">
         {isModalOpen && <MainModal closeModal={closeHandler} />}
      <section className="mx-auto h-full relative">
        <div className="py-[16px] relative">
          <NavBar openModal={openHandler} />
        </div>
        <div className="p-[64px]  mx-auto max-w-[1440px]">
          <FirstHero />
        </div>

      </section>
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
              >
                <p className="mb-2">
                  {" "}
                  Here are the numerous standout features of EventMint <br />{" "}
                  that set it apart from the competition
                </p>
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
      <section className="relative w-full pb-[2rem] ">
        <div className="relative mx-auto w-fit">
      <Image
          className="absolute right-0 2xl:right-[-120px]"
          src={WhyChoose}
          alt="thirdBlurImsge"
          width={400}
          height={400}
        />
       
       
        <div className="relative mx-auto text-white py-[40px] px-[64px]">
          <div className="mx-auto pb-[3rem]">
            <div className="mx-auto text-center">
              <h2 className="text-h-l font-Ubuntu mmd:text-h-ls">
                Why Choose <span className="text-[#A7FFA7]"> EventMint?</span>
              </h2>
            </div>
            <div className="mx-auto text-center">
              <Typography
                variant="body-l"
                font="Ubuntu"
                customClassName="font-Ubuntu text-center mmd:text-body-m"
                color="fontBodyMGreyishColor"
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
    </main>
  );
}



