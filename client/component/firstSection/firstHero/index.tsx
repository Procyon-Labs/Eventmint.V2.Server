"use client";
import SecondHero from "../secondHero";
import React, { useState, useEffect } from "react";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";
import { Button } from "@/component/button";
import HeroSection from "@/component/svgs/NewImages/Desktop-Hero-Section-Blur.png";

type FirstHeroProps = {
  openModal: () => void;
};

const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
export default function FirstHero({ openModal }: FirstHeroProps) {
  const words: string[] = ["love", "dream", "imagine"];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-auto w-full h-[848px] z-[0]">
      <Image
        className=" z-[0] top-[-100px] left-[200px] mxl:w-[700px] mxl:left-[150px] 2xl:top-[-5%] 2xl:left-[32%] mmd:left-0 absolute backdrop-blur-lg"
        src={HeroSection}
        alt="first"
        width={884}
        height={884}
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
            <span>{capitalizeFirstLetter(words[currentWordIndex])}</span>
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
            onClick={openModal}
            fit
          />
        </div>
      </div>
      <div className="mx-auto text-white relative">
        <SecondHero />
      </div>
    </div>
  );
}
