'use client'


import Carousel from './carosel'
import { MockItems } from './data'
export default function SecondHero() {
  return (
    <div className='text-white h-[480px] relative  flex items-center justify-center'>
    <Carousel items={MockItems}/>    
     </div>
  )
}
