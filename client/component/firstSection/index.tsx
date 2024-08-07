import React from 'react'
import NavBar from '../navBar';
import FirstHero from './firstHero';

type OpenHandlerProps ={
    openHandler : ()=> void;
}

export default function FirstSection({openHandler}:OpenHandlerProps) {
  return (
    <section className="mx-auto h-full relative">
        <div className="py-[16px] relative">
          <NavBar openModal={openHandler} />
        </div>
        <div className="p-[64px] mx-auto max-w-[1440px]">
          <FirstHero openModal={openHandler} />
        </div>

      </section>
  )
}
