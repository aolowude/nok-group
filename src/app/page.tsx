import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage, StylizedImageContain } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import africaMapNok from '@/images/icons/africaMapNok.svg'
import nokTech from '@/data/images/nokTech/nokTech.png'
import { Logomark } from '@/components/Logo'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import NokIcons from '@/components/NokIcons'

import Swiper_loop from '../components/Swiper_loop'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Partners() {
  return (
    // <div className="max-w-8xl mx-auto mt-24 px-6 sm:mt-32 lg:mt-40 lg:px-8">
    <div className="containerPartners mt-24 rounded-4xl bg-black py-5 sm:mt-32 lg:mt-40">
      <Container>
        <FadeInStagger faster>
          <FadeIn>
            <div className="fade-x relative bg-black py-8 ">
              <NokIcons name="header-icons" loop={true} />
            </div>
          </FadeIn>
        </FadeInStagger>

        <FadeIn>
          <div className="flex items-center gap-x-8 py-2">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Our subsidiaries and partners
            </h2>

            <div className="h-px flex-auto bg-neutral-600" />
          </div>
          <Swiper_loop />
        </FadeIn>
      </Container>
    </div>
    // </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <div className="mx-auto mt-16 flex max-w-7xl px-6 lg:px-8">
        <SectionIntro
          title="Simplifying banking and education with technology"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            We are a team of global experts building an all encompassing
            ecosystem comprising of payment infrastructure, business empowerment
            and multimedia delivery
          </p>
        </SectionIntro>
        {/* <Image src={africaMapNok} alt="Africa Map Nok" width={400} /> */}
      </div>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl bg-gray-50 p-6 ring-1 ring-neutral-950/5 transition hover:bg-teal-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>

                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}

                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Ecosystem"
        title="Nok"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Each pillar of Nok serves to complement all and fosters collaboration
          and tech adoption.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="lg:flex lg:items-center lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  src={africaMapNok}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[40rem] lg:pl-4">
              <ListItem title="NokTech ($NOK)" color="green">
                {`We possess ownership over cutting-edge technology, smart contracts, and the distribution of the world's pioneering decentralized stabilized basket token. Crafted by leading experts in tokenomics and blockchain technology, NokTech ($NOK) spearheads the advancement of innovative financial instruments.`}
              </ListItem>
              <ListItem title="NokPay" color="black">
                {`NokPay presents a comprehensive retail and B2B banking platform empowered by fully owned proprietary technology. Our robust infrastructure integrates multiple banking licenses, KYC/AML compliance, On/Off Ramp facilities, multi-jurisdictional account opening, digital asset wallet creation, P2P payments, staking, yielding, rewards programs, and card issuing capabilities. We've augmented this platform with custom-built Artificial Intelligence and Blockchain technology for enhanced efficiency and security.`}
              </ListItem>
              <ListItem title="NokMedia" color="indigo">
                {`We hold exclusive rights to establish and operate co-branded digital, radio, and TV media publications in collaboration with global media owners. These partnerships enable us to distribute content across Africa, leveraging full marketing expertise to effectively launch, expand, and strengthen our product portfolio.`}
              </ListItem>
              <ListItem title="NokAcademy" color="orange">
                {`In partnership with Pan African Associations, NokAcademy is primed for a full-fledged launch. This initiative aims to identify, develop, and tokenize African-based businesses. NokAcademy stands as an owned and operated portfolio business unit committed to fostering business growth and innovation.`}
              </ListItem>
            </List>
          </div>
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description: 'Revolutionary Pan African transformative digital ecosystem.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-10 lg:mt-20">
        <FadeInStagger className="mt-10 flex">
          <div className="mt-10 lg:mt-20 lg:w-2/3">
            <FadeIn className="mt-10">
              <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                Revolutionary Pan African transformative digital ecosystem.
              </h1>
              <p
                className="mt-6
               text-xl text-neutral-600"
              >
                Bridging the technology gaps using Artificial Intelligence,
                Web3.0 and blockchain.
              </p>
            </FadeIn>
          </div>
          <FadeIn className="hidden lg:block lg:w-1/2">
            <Image src={nokTech} alt="NokTech" />
          </FadeIn>
        </FadeInStagger>
      </Container>

      <Partners />
      <CaseStudies caseStudies={caseStudies} />

      <FadeInStagger>
        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: 'Phobia', logo: logoPhobiaDark }}
        >
          Here at the NokGroup our vision is of an all-inclusive ecosystem that
          removes the divide between traditional fiat currency and the
          decentralised financial economy, aiding in the digitalisation of the
          African continent.
          <span className="align-center flex justify-center pt-10">
            <Logomark />
          </span>
        </Testimonial>
      </FadeInStagger>

      <ContactSection />
    </>
  )
}
