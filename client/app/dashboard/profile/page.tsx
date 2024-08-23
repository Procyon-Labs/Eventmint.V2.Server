"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/component/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSelector } from "react-redux";
import { RootState } from "@/mainStore/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const notify = () => toast("Coming Soon");
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <section className="flex gap-4 mt-2">
      <div className="flex flex-col p-6 w-2/6 items-center gap-1 rounded-[24px] justify-center bg-[rgba(25,29,35,0.5)]">
        <Image
          alt="profile-picture"
          src={
            profile.image
              ? profile.image
              : `https://res.cloudinary.com/dtfvdjvyr/image/upload/v1724090383/Profile_Picture_dykec6.png`
          }
          width={320}
          height={320}
        />

        <Button
          onClick={notify}
          type="submit"
          label="Change Profile Photo"
          customClassName="w-full mt-4 text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] mx-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          size="moreMedium"
        />
      </div>
      <div className="flex flex-col w-4/6 items-start gap-4 p-2 px-4 self-stretch justify-center rounded-[24px] bg-[rgba(25,29,35,0.5)]">
        <div>
          <h2 className="text-[#E7EAEE]">{profile.id || `#019900`}</h2>
          <p className="text-[#64748B]">User ID</p>
        </div>
        <div>
          <h2 className="text-[#E7EAEE]">{profile.firstName || `Luke`}</h2>
          <p className="text-[#64748B]">First Name</p>
        </div>
        <div>
          <h2 className="text-[#E7EAEE]">{profile.lastName || `Skywalker`}</h2>
          <p className="text-[#64748B]">Last Name</p>
        </div>
        <div>
          <h2 className="text-[#E7EAEE]">
            {profile.email || `luke.skywalker@mail.com`}
          </h2>
          <p className="text-[#64748B]">Email address</p>
        </div>
        <div>
          <h2 className="text-[#E7EAEE]">
            {profile.bio ||
              `Keeping the universe safe from Darth Vader is a personal hobby 😁☺️`}
          </h2>
          <p className="text-[#64748B]">Bio</p>
        </div>
        <Button
          onClick={notify}
          type="submit"
          label="Edit Profile"
          customClassName="mt-4 text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] mx-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          size="moreMedium"
        />
      </div>
    </section>
  );
};

export default Page;
