'use client'
import { useState } from "react";
import MainModal from "@/component/Modal/MainModal";
import FirstSection from "@/component/firstSection";
import SecondSection from "@/component/secondSection";
import ThirdSection from "@/component/thirdSection";
import FourthSection from "@/component/fourthSection";
import FifthSection from "@/component/fifthSection";

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
        <FirstSection openHandler={openHandler}/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>  
    </main>
  );
}




