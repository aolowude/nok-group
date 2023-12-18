import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import imageLogo from '@/images/logoFull.png'
import nokLogoWhite from '@/images/logoWhite.png'
import nokLogoBlack from '@/images/logoBlack.png'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  // let id = useId()

  return invert ? (
    <Image src={nokLogoWhite} alt="NokLogo" width={100} height={50} />
  ) : (
    <Image src={nokLogoBlack} alt="NokLogo" width={100} height={50} />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return invert ? (
    <Image src={nokLogoWhite} alt="NokLogo" width={200} height={50} />
  ) : (
    <Image src={nokLogoBlack} alt="NokLogo" width={200} height={50} />
  )
}
