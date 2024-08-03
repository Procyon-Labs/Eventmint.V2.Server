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
      lastText: 'EVENTMINT'
    },
    {
      image: '/avatarBubble2.svg',
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
      lastText: 'EVENTMINT'
    },
    {
      image: '/AvatarGuy2.svg',
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
      lastText: 'EVENTMINT'
    },
    {
        image: '/avatarBubble2.svg',
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
        lastText: 'EVENTMINT'
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
        lastText: 'EVENTMINT'
      },
      {
        image: '/avatarBubble2.svg',
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
        lastText: 'EVENTMINT'
      },
      {
        image: '/AvatarGuy2.svg',
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
        lastText: 'EVENTMINT'
      },
  ];

  return (
    <div className='relavatarBubble2.svgflex items-center justify-center overflow-hidden'>
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
        slidesPerView={4}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="swiper_container"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex-shrink-0 transition-transform duration-500 ease-in-out">
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
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
