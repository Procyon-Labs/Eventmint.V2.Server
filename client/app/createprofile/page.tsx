"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { createProfile } from "../../component/features/profile/profileslice";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../mainStore/store";
import { Button } from "@/component/button";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const { publicKey } = useWallet();
  const router = useRouter();

  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey) {
      toast.error("Please connect your wallet");

      return;
    }
    try {
      const _id = publicKey;

      const profileData = { _id, firstName, lastName, email, bio };
      dispatch(createProfile({ profileData, publicKey: publicKey.toString() }));
      router.push("/dashboard");
      console.log(publicKey);
    } catch (error) {
      toast.error("An error occurred while creating the profile.");
    }
  };

  return (
    <section className="flex h-screen">
      {/* Left Side: Image */}
      <div className="w-1/2 bg-gray-200">
        <img
          src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1723983495/Container_orb6ks.png"
          alt="Profile"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Side: Form */}

      <div className="w-1/2 flex items-center justify-center p-10 bg-[#191D23]">
        <div className="w-full max-w-md">
          <div className="mb-4">
            <h2 className="text-white text-3xl font-Ubuntu font-semibold mb-1">
              Create Profile
            </h2>
            <p className="text-[#A0ABBB] text-sm">
              Showcase Your Story, Connect with Events
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="bg-black/10 text-white mt-1 p-3 block w-full border border-[#4B5768]  rounded-lg shadow-sm focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-black/10 text-white mt-1 p-3 block w-full border border-[#4B5768]  rounded-lg shadow-sm focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="luke.skywalker@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/10 text-white mt-1 p-3 block w-full border border-[#4B5768] rounded-lg shadow-sm focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
                required
              />
            </div>

            <div>
              <textarea
                id="bio"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="bg-black/10 text-white mt-1 p-3 block w-full border border-[#4B5768] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={4}
              />
            </div>

            <div className="w-full">
              <Button
                type="submit"
                label="Create Profile"
                customClassName="w-full text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] mx-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                size="moreMedium"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
