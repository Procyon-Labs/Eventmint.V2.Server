import Image from "next/image";
import React, { useEffect } from "react";
import smiley from "@/component/svgs/NewImages/smiling-face-with-smiling-eyes.png";
import SecondModal from "@/component/svgs/NewImages/secongModal.png";
import { Button } from "../button";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "../typogrphy";

type MainModalProps = {
  closeModal: () => void;
};
export default function MainModal({ closeModal }: MainModalProps) {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      toast.success("Wallet Connected Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    }
  }, [connected, router]);

  return (
    <div className="backdrop" onClick={closeModal}>
      <div className="modal-content">
        <div className="relative">
          <Image
            className=""
            src={SecondModal}
            alt="Modal"
            width={415}
            height={140}
          />
        </div>
        <div className=" px-[32px] py-[24px] flex flex-col gap-[24px] items-center justify-center bg-white-opacity-20 backdrop-blur-75 rounded-r-[12px]">
          <div className="flex justify-center">
            <Image src={smiley} alt="smiley" width={120} height={120} />
          </div>
          <div className="text-center mt-4 text-white flex flex-col gap-4">
            <Typography customClassName="font-Ubuntu text-modal-head text-[#150069] text-center">
              Hey there! We’ve been waiting for you.
            </Typography>
            <Typography customClassName="font-open-sas text-body-xs text-[#191D23] text-center">
              Step into a realm of limitless opportunities, connect your wallet
              and let’s get started.
            </Typography>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <WalletMultiButton className="bg-[#c2c2cccb] hover:bg-black transition-all duration-200 rounded-lg  " />

            <Link href="/event">
              <Button
                label="In-event"
                customClassName="text-body-xxs font-open-sans bg-custom-purple-gradient rounded-[12px]"
                size="moreMedium"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}