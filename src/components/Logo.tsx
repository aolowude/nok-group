import Image from 'next/image'
import nokLogoWhite from '@/images/logos/logoWhite.png'
import nokLogoBlack from '@/images/logos/logoBlack.png'
import nokGroupMark from '@/images/logos/mark/nokGroup.svg'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  return invert ? (
    <Image src={nokGroupMark} alt="NokLogo" width={50} />
  ) : (
    <Image src={nokGroupMark} alt="NokLogo" width={50} />
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
    <Image src={nokLogoWhite} alt="NokLogo" width={190} />
  ) : (
    <Image src={nokLogoBlack} alt="NokLogo" width={190} />
  )
}
