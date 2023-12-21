import { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Image from 'next/image'
import Divider from './Divider'

export type ContentWithImageType = {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  images: {
    background: {
      img: StaticImageData
      loading: StaticImageData
      alt: string
    }
    illustration: {
      img: StaticImageData
      loading: StaticImageData
      alt: string
    }
  }
  tags?: string[]
  reverse?: boolean
  accentColor: string
}

interface Props {
  data: ContentWithImageType
}

const Content_with_image: FC<Props> = ({ data }) => {
  if (!data) return null

  return (
    <div
      className={`relative flex flex-col-reverse xl:flex xl:min-h-[800px] xl:items-center ${
        data.reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
      } mb-[100px] pt-[50px] xl:mb-[150px]`}
    >
      <Divider />
      <div className="relative xl:w-[60%]">
        <div className="absolute -left-[170%] -top-[30%] -z-10 w-[250%] translate-x-1/2 lg:-left-[130%] lg:top-0 lg:w-[200%]	">
          <Image
            className="image-container w-full object-cover"
            src={data.images.background.img.src}
            quality={10}
            width={1200}
            height={100}
            blurDataURL={data.images.background.loading.src}
            placeholder="blur"
            alt={data.images.background.alt}
          />
          <div className="gradient-cover" />
        </div>
        <div className="">
          <Image
            className="image-container mx-auto object-cover"
            src={data.images.illustration.img.src}
            quality={80}
            width={1000}
            height={800}
            blurDataURL={data.images.illustration.loading.src}
            placeholder="blur"
            alt={data.images.illustration.alt}
          />
        </div>
      </div>
      <div className="mx-auto mt-[40px] pb-[50px] text-left lg:max-w-[710px] lg:text-center xl:mt-0 xl:w-[40%] xl:max-w-[410px] xl:pb-0 xl:text-left">
        <div className="ml-0 w-[59px] lg:mx-auto xl:ml-0">{data.icon}</div>
        <h2 className="text-[50px] font-bold lg:text-[65px]">{data.title}</h2>
        <div className="text-sm text-[#999999] lg:text-base">
          {data.content}
        </div>
        {data.tags && (
          <div className="mx-auto mt-[25px] max-w-[400px] xl:ml-0 xl:max-w-full">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                style={{ color: data.accentColor }}
                className="mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 px-[10px] 
                  pb-[1px] pt-[2px]
                  text-xs leading-6"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Content_with_image
