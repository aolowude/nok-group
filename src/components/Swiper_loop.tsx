'use client'

import React, { FC, useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { iconImages } from '../data/images/icons/export'
import Divider from './Divider'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/bundle'
import { useDeviceSize } from '@/lib/utils'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'

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
    <div className="relative pb-[20px] pt-[0px] lg:pb-[30px] lg:pt-[5px]">
      <div className="fade-x relative">
        <div className="mt-[40px] flex flex-col gap-[60px] lg:mt-[20px]">
          <Loop_Swiper_Partners__wrapper loop>
            {renderCarousel(carousel1 || null)}
          </Loop_Swiper_Partners__wrapper>
          <Loop_Swiper_Partners__wrapper loop>
            {renderCarousel(carousel2 || null)}
          </Loop_Swiper_Partners__wrapper>
          <Loop_Swiper_Partners__wrapper loop>
            {renderCarousel(carousel3 || null)}
          </Loop_Swiper_Partners__wrapper>
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
  const [width, height] = useDeviceSize()

  if (!children) return null

  const isSmallScreen = width < 800

  return (
    <div className={`swiper-wrapper-icons-${name || ''}`}>
      <Swiper
        spaceBetween={isSmallScreen ? 150 : 50}
        speed={10000 / 2}
        loop={true}
        // centeredSlides={true}
        autoplay={
          loop
            ? {
                delay: 0,
                disableOnInteraction: false,
                waitForTransition: true,
                reverseDirection: true,
              }
            : false
        }
        // slidesPerView={'auto'}
        slidesPerView={isSmallScreen ? 2 : 3}
        modules={[Autoplay]}
        className="loop-swiper"
        pagination={false}
      >
        {children}
      </Swiper>
    </div>
  )
}

export const Loop_Swiper_Partners__wrapper: FC<Loop_Swiper_wrapperPROPS> = ({
  children,
  name,
  loop,
}) => {
  const [width, height] = useDeviceSize()

  if (!children) return null

  const isSmallScreen = width < 800

  return (
    <div className={`swiper-wrapper-icons-${name || ''}`}>
      <Swiper
        spaceBetween={isSmallScreen ? 50 : 75}
        speed={10000}
        loop={true}
        // centeredSlides={true}
        autoplay={
          loop
            ? {
                delay: 0,
                disableOnInteraction: false,
                waitForTransition: true,
                reverseDirection: true,
              }
            : false
        }
        // slidesPerView={'auto'}
        slidesPerView={isSmallScreen ? 3 : 5}
        modules={[Autoplay]}
        className="loop-swiper"
        pagination={false}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Swiper_loop
