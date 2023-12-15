import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { useMediaQuery } from "react-responsive";
import { Autoplay } from "swiper/modules";
import { desktopImages, mobileImages } from "../data/data";
import Image from "./Image";

export default function App() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                lazyPreloadPrevNext={true}
                
                className="mySwiper w-full h-[calc(100dvh-4.7rem)] overflow-hidden"
            >
                {!isMobile
                    ? desktopImages.map((images) => (
                          <SwiperSlide
                              key={images.img}
                              className="w-full h-screen "
                          >
                              <Image src={images.img} alt={images.alt} />
                          </SwiperSlide>
                      ))
                    : mobileImages.map((images) => (
                          <SwiperSlide
                              key={images.img}
                              className="w-full h-screen"
                          >
                              <Image src={images.img} alt={images.alt} />
                          </SwiperSlide>
                      ))}
            </Swiper>
        </>
    );
}
