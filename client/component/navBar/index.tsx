import Image from "next/image";
import React from "react";
import { Button } from "../button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="max-w-[1440px] h-[64px] px-[64px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <Link className="text-[#A7FFA7] text-h-xxxs font-open-sans" href={"#"}>
              Home
            </Link>
            <Link className="text-[#4B5768] text-h-xxxs font-open-sans" href={"#"}>
              Features
            </Link>
            <Link className="text-[#4B5768] text-h-xxxs font-open-sans" href={"#"}>
              Benefits
            </Link>
            <Link className="text-[#4B5768] text-h-xxxs font-open-sans" href={"#"}>
              How It Works
            </Link>
          </div>
          <div>
            <Button
              label="Get started"
              customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px]"
              size="moreMedium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
