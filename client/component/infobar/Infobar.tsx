import React from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import Image from "next/image";

interface InfoBarProps {
  room: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ room }) => (
  <div className="flex items-center justify-between custom-card rounded-t h-15 w-full">
    <div className="flex-1/2 flex items-center ml-5 text-white">
      <Image className="mr-5" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="flex-1/2 flex justify-end mr-5">
      <a href="/">
        <Image src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
