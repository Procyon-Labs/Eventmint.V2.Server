import Image from "next/image";
import React from "react";
import { Button } from "../button";
import Link from "next/link";

type NavBarProps = {
  openModal: () => void;
};

export default function NavBar(prop: NavBarProps) {
  const { openModal } = prop;
  return (
    <div className="max-w-[1440px] h-[64px] px-[64px] mmd:px-[32px] mx-auto relative z-10">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <Link
              className="text-[#A7FFA7] text-h-xxxs font-open-sans"
              href={"#"}
            >
              Home
            </Link>
            <Link
              className="text-[#4B5768] text-h-xxxs font-open-sans"
              href={"#"}
            >
              Features
            </Link>
            <Link
              className="text-[#4B5768] text-h-xxxs font-open-sans"
              href={"#"}
            >
              Benefits
            </Link>
            <Link
              className="text-[#4B5768] text-h-xxxs font-open-sans hover:text-[#A7FFA7]"
              href={
                "https://ajar-asphalt-fba.notion.site/Event-Mint-Litepaper-caa9b5d9829743c483fd2fd53599b026"
              }
            >
              Litepaper
            </Link>
          </div>
          <div>
            <Button
              label="Get started"
              customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px]"
              size="moreMedium"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
