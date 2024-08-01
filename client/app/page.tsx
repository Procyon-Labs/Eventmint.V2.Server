import { Button } from "@/component/button";
import FirstHero from "@/component/firstSection/firstHero";
import SecondHero from "@/component/firstSection/secondHero";
import NavBar from "@/component/navBar";
import { Typography } from "@/component/typogrphy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative  bg-[var(--Shades-Black,#000)]">
      <section className=" h-[912px] relative">
        <div className=" py-[16px] ">
          <NavBar />
        </div>
          <div>
            <FirstHero/>
          </div>
          <div>
            <SecondHero/>
          </div>
      </section>
      <section className="border relative text-white w-full h-[900px] ">
        <Image className="absolute top-0 left-0" src={'/secondBlurImagedone.png'} alt="second_blur" width={688} height={688}/> 
        <div className="relative px-[64px]">
          <div className="mx-auto">
            <div className="mx-auto text-center">
              <h2 className="text-h-l font-Ubuntu">What we<span className="text-[#A7FFA7]"> Offer</span></h2>
            </div>
            <div className="mx-auto text-center">
              <Typography variant="body-l" font="Ubuntu" customClassName="font-Ubuntu text-center" color="fontBodyMGreyishColor">
              Here are the numerous standout features of EventMint <br/> that set it apart from the competition
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-500">section 3</section>
      <section>section 4</section>
      <section>section 5</section>
    </main>
  );
}
