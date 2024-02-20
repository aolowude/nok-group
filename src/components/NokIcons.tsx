'use client'

import type { FC } from 'react'
import { Loop_Swiper_wrapper } from './Swiper_loop'
import {
  Icon_NokAcademy,
  Icon_NokFinance,
  Icon_NokLabs,
  Icon_NokMedia,
  Icon_NokPay,
  Icon_NokTech,
} from './Icons'
import { SwiperSlide } from 'swiper/react'

interface NokIconsProps {
  name?: string
  loop?: boolean
}

const NokIcons: FC<NokIconsProps> = ({ name, loop }) => {
  return (
    <Loop_Swiper_wrapper name={name ? name : 'icons'} loop={loop}>
      <SwiperSlide>
        <Icon_NokTech />
      </SwiperSlide>

      <SwiperSlide>
        <Icon_NokPay />
      </SwiperSlide>

      <SwiperSlide>
        <Icon_NokMedia />
      </SwiperSlide>

      <SwiperSlide>
        <Icon_NokAcademy />
      </SwiperSlide>
      <SwiperSlide>
        <Icon_NokLabs />
      </SwiperSlide>

      <SwiperSlide>
        <Icon_NokFinance />
      </SwiperSlide>
    </Loop_Swiper_wrapper>
  )
}
export default NokIcons
