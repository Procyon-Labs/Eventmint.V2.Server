import { Typography } from "@/component/typogrphy";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type AvatarGirlProps = {
  image: String | StaticImport;
  QRcode: String | StaticImport;
  largeHeader: string;
  smallHeader: string;
  body: string;
  firstHeader: string;
  firstBody: string;
  secondHeader: string;
  secondBody:string,
  thirdHeader: string;
  thirdBody: string;
  lastText: string;
};
export default function AvatarGirl(prop: AvatarGirlProps) {
  const {
    image,
    QRcode,
    largeHeader,
    secondHeader,
    smallHeader,
    body,
    firstBody,
    firstHeader,
    thirdHeader,
    lastText,
    thirdBody,
    secondBody
  } = prop;
  return (
    <div
      className="relative rounded-[24px] w-[316px] opacity-1 border flex flex-col gap-4"
      style={{
        // background:
        //   `url(${image}) lightgray 0% 0% / 100px 100px repeat`,
        // backgroundBlendMode: "overlay",
      }}
    >
      <div className="px-[16px] pt-[16px]">
        <Image
            className="rounded-t-[16px]"
          src={image}
          alt="avatar-girl"
          width={284}
          height={262}
        />
      </div>
      <div className="px-[16px] flex flex-col gap-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex flex-col">
            <Typography variant="body-r" fontWeight="medium" customClassName="font-open-sas text-[#D9D0FF] pb-[8px]">
                {largeHeader}
            </Typography>
            <div>
              <Typography variant="h9" customClassName="font-open-sas pb-[4px]" color="fontAvatarGreyishColor">
                {smallHeader}
              </Typography>
              <Typography variant="h8" customClassName="font-open-sas text-white">
                {body}
              </Typography>
            </div>
          </div>
          <div>
            <Image src={QRcode} alt="avatar-girl" width={72} height={72} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="h9" color="fontAvatarGreyishColor" customClassName="font-open-sas">{firstHeader}</Typography>
            <Typography variant="body-xs" color="fontBodyWhiteishColor" customClassName="font-open-sas">{firstBody}</Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="h9" color="fontAvatarGreyishColor" customClassName="font-open-sas">{secondHeader}</Typography>
            <Typography variant="body-xs" color="fontBodyWhiteishColor" customClassName="font-open-sas">{secondBody}</Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="h9" color="fontAvatarGreyishColor" customClassName="font-open-sas">{thirdHeader}</Typography>
            <Typography variant="body-xs" color="fontBodyWhiteishColor" customClassName="font-open-sas">{thirdBody}</Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-[4px] py-[10px]">
        <Typography variant="h10" color="fontAvatarGreyishColor" customClassName="font-open-sas">{lastText}</Typography>
      </div>
    </div>
  );
}
