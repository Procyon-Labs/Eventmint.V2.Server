"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { createProfile } from "../../component/features/profile/profileslice";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../mainStore/store";
import { Button } from "@/component/button";
import { useRouter } from "next/navigation";
import { headers } from "next/headers";
import axios from "axios";

const Page: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const { publicKey } = useWallet();
  const status = useSelector((state: RootState) => state.profile.status);
  const router = useRouter();
  const [profilePicturePreview, setProfilePicturePreview] = useState<
    string | ArrayBuffer | null
  >(null);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  useEffect(() => {
    if (status === "succeeded") {
      router.push("/dashboard");
    } else if (status === "failed") {
      // const timer = setTimeout((): void => {
      //   router.push("/");
      // }, 3000);
      // return (): void => clearTimeout(timer);
    }
    // Reset loading state after status update
    setLoading(false);
  }, [status, router]);

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://eventmint.onrender.com/api/v1/user/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.imageUrl;
    } catch (error) {
      console.error("image upload failed", error);
      toast.error("failed to upload image");
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey) {
      toast.error("Please connect your wallet");

      return;
    }
    setLoading(true);
    try {
      let imageUrl = "";
      if (profilePicture) {
        imageUrl = await uploadImage(profilePicture);
        if (!imageUrl) {
          setLoading(false);
          return;
        }
      }

      const _id = publicKey.toString();
      const image = profilePicture;
        console.log(image,"profileImage")
      // const profileData = { _id, firstName, lastName, email, bio, image };

      const profileData: any = {
        _id,
        firstName,
        lastName,
        email,
        bio,
        image: imageUrl,
      };
      dispatch(createProfile({ profileData, publicKey: publicKey.toString() }));

      console.log(publicKey);
    } catch (error) {
      toast.error("An error occurred while creating the profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    setProfilePicture(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePicturePreview(null);
    }
  };

  return (
    <section className="flex h-screen">
      {/* Left Side: Image */}
      <div className="w-1/2 bg-gray-200">
        <Image
          width={500}
          height={500}
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
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="bg-black/10 text-white mt-1 p-3 block w-full border border-[#4B5768] rounded-lg shadow-sm focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
            />
            {profilePicturePreview && (
              <div className="mt-4">
                <Image
                  width={500}
                  height={500}
                  src={profilePicturePreview as string}
                  alt="Profile Preview"
                  className="w-32 h-32 object-cover rounded-full border border-[#4B5768]"
                />
              </div>
            )}
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
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
