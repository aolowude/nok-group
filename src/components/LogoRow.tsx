import Image from 'next/image'

import NokPayLogo from '@/images/logos/full/nokPay.svg'
import NokTechLogo from '@/images/logos/full/nokTech.svg'
import NokAcademyLogo from '@/images/logos/full/nokAcademy.svg'
import NokMediaLogo from '@/images/logos/full/nokMedia.svg'
import { FadeIn, FadeInStagger } from './FadeIn'

export default function LogoRow() {
  return (
    <FadeInStagger className="bg-transparent pt-10 sm:pt-20">
      <FadeIn className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto grid grid-cols-2 items-center gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:grid-cols-4">
          <Image
            className="w-[80%] object-contain lg:col-span-1"
            src={NokPayLogo}
            alt="Nok Pay"
            // width={158}
            // height={33}
          />

          <Image
            className="w-[80%] object-contain  lg:col-span-1"
            src={NokMediaLogo}
            alt="Nok Media"
            // width={158}
            // height={33}
          />
          <Image
            className="w-[80%] object-contain lg:col-span-1"
            src={NokTechLogo}
            alt="Nok Tech"
            // width={158}
            // height={33}
          />
          <Image
            className="w-[100%] object-contain lg:col-span-1"
            src={NokAcademyLogo}
            alt="Nok Academy"
            // width={158}
            // height={33}
          />
        </div>
      </FadeIn>
    </FadeInStagger>
  )
}
