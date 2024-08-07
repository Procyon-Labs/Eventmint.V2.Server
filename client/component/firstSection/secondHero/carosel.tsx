import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import AvatarGirl from '@/component/svgs/avatarGirl';
import Image from 'next/image';

const Carousel = () => {
  const items = [
    {
      image: 'originalAvatarGirl.svg',
      QRcode: 'QRcode.svg',
      largeHeader: 'WEB3 Watch Party',
      smallHeader: 'STARTS',
      body: '12:00 23 Jul 2024',
      firstHeader: 'ROW/SEAT',
      firstBody: 'A/12',
      secondHeader: 'GATE',
      secondBody: 'South',
      thirdHeader: 'VENUE',
      thirdBody: 'Main Hall',
      lastText: 'EVENTMINT',
      Noise:"/Noisepng.png"
    },
    {
      image: '/avatarBubble2.svg',
      QRcode: 'QRcode.svg',
      largeHeader: 'Talk about Crypto',
      smallHeader: 'STARTS',
      body: '12:00 23 Jul 2024',
      firstHeader: 'ROW/SEAT',
      firstBody: 'A/12',
      secondHeader: 'GATE',
      secondBody: 'South',
      thirdHeader: 'VENUE',
      thirdBody: 'Main Hall',
      lastText: 'EVENTMINT',
      Noise:"/Noisepng.png"
    },
    {
      image: '/AvatarGuy2.svg',
      QRcode: 'QRcode.svg',
      largeHeader: 'Joshua’s Space',
      smallHeader: 'STARTS',
      body: '01:00 23 Jul 2024',
      firstHeader: 'ROW/SEAT',
      firstBody: 'C/09',
      secondHeader: 'GATE',
      secondBody: 'North',
      thirdHeader: 'VENUE',
      thirdBody: 'Event Hall',
      lastText: 'EVENTMINT',
      Noise:"/Noisepng.png"
    },
    {
        image: '/avatarBubble2.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'Talk about Crypto',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: 'originalAvatarGirl.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'WEB3 Watch Party',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: '/avatarBubble2.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'Talk about Crypto',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: '/AvatarGuy2.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'Joshua’s Space',
        smallHeader: 'STARTS',
        body: '01:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'C/09',
        secondHeader: 'GATE',
        secondBody: 'North',
        thirdHeader: 'VENUE',
        thirdBody: 'Event Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: 'originalAvatarGirl.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'WEB3 Watch Party',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: '/avatarBubble2.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'Talk about Crypto',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: '/AvatarGuy2.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'Joshua’s Space',
        smallHeader: 'STARTS',
        body: '01:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'C/09',
        secondHeader: 'GATE',
        secondBody: 'North',
        thirdHeader: 'VENUE',
        thirdBody: 'Event Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
      {
        image: 'originalAvatarGirl.svg',
        QRcode: 'QRcode.svg',
        largeHeader: 'WEB3 Watch Party',
        smallHeader: 'STARTS',
        body: '12:00 23 Jul 2024',
        firstHeader: 'ROW/SEAT',
        firstBody: 'A/12',
        secondHeader: 'GATE',
        secondBody: 'South',
        thirdHeader: 'VENUE',
        thirdBody: 'Main Hall',
        lastText: 'EVENTMINT',
        Noise:"/Noisepng.png"
      },
  ];

  return (
    <div className='flex items-center justify-center overflow-hidden'>
      <Image
        className='absolute left-0 transform -translate-y-1/2'
        src={'/avatarBlur.png'}
        alt='firstAvatar'
        height={375}
        width={375}
        style={{ top: '50%' }}
      />
      <Image
        className='absolute transform -translate-x-1/2 -translate-y-1/2'
        src={"/thirdAvatarImagedone.png"}
        alt='thirdAvatar'
        height={292.77}
        width={292.77}
        style={{ top: '50%', left: '50%' }}
      />
      <Image
        className='absolute right-0 transform -translate-y-1/2'
        src={"/secondAvatarImage.png"}
        alt='secondAvatar'
        height={353.22}
        width={353.22}
        style={{ top: '50%' }}
      />

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // breakpoints={
        //             {
        //     1350:{
        //         slidesPerView:5,
        //         centeredSlides:true,
        //         coverflowEffect: {
        //             stretch: -20,
        //         },
        //         },
        //     1200: {
        //       slidesPerView:5,
        //       spaceBetween:30,
        //       centeredSlides:true,
        //       coverflowEffect: {
        //         stretch: -20,
        //       },
        //     },
           
        //     668: {
        //       slidesPerView:3,
        //       spaceBetween:30,
        //       centeredSlides:true,
        //       coverflowEffect: {
        //         stretch: -20,
        //       },
        //     },
            
        //     0: {
        //       slidesPerView: 5,
        //       coverflowEffect: {
        //         stretch: 0,
        //       },
        //     },
        //   }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="flex justify-center items-center"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="w-full bg-center bg-cover min-w-[300px]">
            <div className="flex-shrink-0 w-full transition-transform duration-500 ease-in-out">
              <AvatarGirl
                image={item.image}
                QRcode={item.QRcode}
                largeHeader={item.largeHeader}
                smallHeader={item.smallHeader}
                body={item.body}
                firstHeader={item.firstHeader}
                firstBody={item.firstBody}
                secondHeader={item.secondHeader}
                secondBody={item.secondBody}
                thirdHeader={item.thirdHeader}
                thirdBody={item.thirdBody}
                lastText={item.lastText}
                Noise={item.Noise}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
