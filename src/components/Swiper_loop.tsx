import React, { FC, useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { iconImages } from '../data/images/icons/export'
import Divider from './Divider'

import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/bundle'

function Swiper_loop() {
  const [carousel1, setCarousel1] = useState(null as null | StaticImageData[])
  const [carousel2, setCarousel2] = useState(null as null | StaticImageData[])
  const [carousel3, setCarousel3] = useState(null as null | StaticImageData[])

  useEffect(() => {
    makeCarousels()
  }, [])

  const makeCarousels = () => {
    const slidesPerCarousel = iconImages.length / 3
    const carousel1 = iconImages.slice(0, slidesPerCarousel)
    const carousel2 = iconImages.slice(slidesPerCarousel, slidesPerCarousel * 2)
    const carousel3 = iconImages.slice(
      slidesPerCarousel * 2,
      slidesPerCarousel * 3,
    )
    setCarousel1(carousel1)
    setCarousel2(carousel2)
    setCarousel3(carousel3)
  }

  const renderCarousel = (carousel: StaticImageData[] | null) => {
    if (!carousel) return null

    return carousel.map((image, index) => (
      <SwiperSlide key={image.src}>
        <Image
          src={image.src}
          alt="Picture of the author"
          width={image.width / (image.height / 41)}
          height={41}
          blurDataURL={image.blurDataURL}
        />
      </SwiperSlide>
    ))
  }

  return (
    <div className="relative pb-[165px] pt-[0px] lg:pb-[250px] lg:pt-[100px]">
      <Divider />

      <div className="fade-x relative">
        <div className="mt-[80px] flex flex-col gap-[60px] lg:mt-[60px]">
          <Loop_Swiper_wrapper loop>
            {renderCarousel(carousel1 || null)}
          </Loop_Swiper_wrapper>
          <Loop_Swiper_wrapper loop>
            {renderCarousel(carousel2 || null)}
          </Loop_Swiper_wrapper>
          <Loop_Swiper_wrapper loop>
            {renderCarousel(carousel3 || null)}
          </Loop_Swiper_wrapper>
        </div>
      </div>
    </div>
  )
}

interface Loop_Swiper_wrapperPROPS {
  children: React.ReactNode
  name?: string
  loop?: boolean
}

export const Loop_Swiper_wrapper: FC<Loop_Swiper_wrapperPROPS> = ({
  children,
  name,
  loop,
}) => {
  if (!children) return null

  return (
    <div className={`swiper-wrapper-icons-${name || ''}`}>
      <Swiper
        spaceBetween={225}
        speed={10000}
        loop={loop}
        centeredSlides={true}
        autoplay={
          loop
            ? {
                delay: 0,
                disableOnInteraction: false,
                waitForTransition: false,
              }
            : false
        }
        // slidesPerView={'auto'}
        slidesPerView={3}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        className="loop-swiper"
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Swiper_loop
