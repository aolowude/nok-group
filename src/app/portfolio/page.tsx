import { type Metadata } from 'next'
import Image from 'next/image'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImageContain } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

import nokPayImage from '@/data/images/nokPay/nokpayImg.png'
import nokAcademyImage from '@/data/images/nokAcademy/nokAcademyImg.png'
import nokMediaImage from '@/data/images/nokMedia/nokMediaImg.png'
import nokTechImage from '@/data/images/nokTech/nokTechImg.png'

import nokPayLogo from '@/images/logos/mark/nokPay.svg'
import nokAcademyLogo from '@/images/logos/mark/nokAcademy.svg'
import nokMediaLogo from '@/images/logos/mark/nokMedia.svg'
import nokTechLogo from '@/images/logos/mark/nokTech.svg'

function Section({
  title,
  image,
  children,
  logo,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImageContain>
  children: React.ReactNode
  logo?: any
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <FadeInStagger className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImageContain
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </FadeInStagger>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            {/* <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            /> */}

            {logo && (
              <Image
                src={logo}
                alt="Nok Pay Logo"
                className="h-16 w-16 flex-none"
                unoptimized
              />
            )}
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function NokPay() {
  const tags = [
    'Customisable Banking',
    'Multiple Currencies',
    'FX',
    'Card Issuing',
    'Artificial Intelligence',
    'Digital Assets',
    'KYC',
  ]
  const accentColor = '#03EFE3'

  return (
    <Section title="NokPay" image={{ src: nokPayImage }} logo={nokPayLogo}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A state of the art{' '}
          <strong className="font-bold text-teal-500">
            Artificial Intelligence powered banking platform
          </strong>{' '}
          with unique customisable features and covering regulated fiat, crypto
          and card transaction services. Declutttering the banking experience
          and unifying fiat and crypto in a regulated, trustworthy environment.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Features
      </h3>
      {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: accentColor }}
              className={`mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-gray-950
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {/* {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: '#fff' }}
              className={` bg-[#03EFE3}] mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-[${accentColor}]
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6 text-white`}
            >
              {tag}
            </span>
          ))}
        </div>
      )} */}
      {/* <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function NokAcademy() {
  const tags = [
    'Incubation',
    'Acceleration ',
    'Launchpad',
    'ICO to IPO',
    'Network Integration',
    'Community',
    'Minting through XSM',
    ' Tokenisation',
  ]
  const accentColor = '#CC6927'

  return (
    <Section
      title="NokAcademy"
      image={{ src: nokAcademyImage, shape: 2 }}
      logo={nokAcademyLogo}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The incubation platform for African entrepreneurs, using blockchain
          technology and communities to access global funds. 3-month program
          leading to an enterprise accelerator, growing African wealth and
          development. Close links to share exchanges to provide a path from ICO
          to IPO.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Features
      </h3>
      {/* {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: accentColor }}
              className={`mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-gray-50
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6`}
            >
              {tag}
            </span>
          ))}
        </div>
      )} */}
      {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: '#fff' }}
              className={` mb-2 mr-2 inline-block rounded-full border border-[#CC6927]/50  bg-[${accentColor}]
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6 text-white`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Section>
  )
}

function NokMedia() {
  const tags = [
    'User Acquisition',
    'Publisher Relations',
    'African Communications Union',
    'Media & Production',
    'Distribution',
    'Content Creation',
  ]
  const accentColor = '#CCFF82'

  return (
    <Section
      title="NokMedia"
      image={{ src: nokMediaImage, shape: 2 }}
      logo={nokMediaLogo}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Creating a strong voice advocating for African economic opportunities,
          promoting our community of investors and changing investor
          perceptions. Building a pan-African identity and entrepreneur
          ecosystem and leveraging creators and influencers to promote the
          NokGroup brand.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Features
      </h3>
      {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: accentColor }}
              className={`mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-gray-950
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {/* {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: '#fff' }}
              className={` bg-[#03EFE3}] mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-[#CCFF82]
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6 text-white`}
            >
              {tag}
            </span>
          ))}
        </div>
      )} */}
    </Section>
  )
}

function NokTech() {
  const tags = [
    '$NOK Token',
    'Full Tech IP of NokPay',
    'NFT Exchange',
    'Crypto Exchange Wallet',
  ]
  const accentColor = '#5B40FF'

  return (
    <Section
      title="NokTech"
      image={{ src: nokTechImage, shape: 1 }}
      logo={nokTechLogo}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The basis for the future of African crypto, the $NOK token, with a
          bespoke wallet and rewards programme. An NFT platform using proven
          technology allowing entrepreneurs and artists to realise their true
          potential. The African development consultancy and agency for the
          NokGroup, building end-to-end platforms and blockchain solutions for
          African consumers.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Features
      </h3>
      {/* {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: accentColor }}
              className={`mb-2 mr-2 inline-block rounded-full border border-[#363D46]/50 bg-gray-50
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6`}
            >
              {tag}
            </span>
          ))}
        </div>
      )} */}
      {tags && (
        <div className="mx-auto mt-[25px] xl:ml-0 xl:max-w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ color: '#fff' }}
              className={` mb-2 mr-2 inline-block rounded-full border border-[#5B40FF]/50 bg-[${accentColor}]
                  px-[10px] pb-[1px]
                  pt-[2px] text-sm font-medium leading-6 text-white`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Technology"
        title="State of the Art utilisation of AI, LLMs and Blockchain"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while focusing on providing seamless experiences
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Each of our partnerships is aimed towards providing the best
            solutions for users with the highest assurance of quality.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on utilising tools and frameworks that are
            tailored to the problems they are solving.
          </GridListItem>
          <GridListItem title="Adaptable">
            Dynamic software platfroms and real life systems allow us our
            offerings be robust.
          </GridListItem>
          <GridListItem title="Secure">
            Transparency in all our processes and choices allow for a trust
            relationship to exist between us and end users.
          </GridListItem>
          <GridListItem title="Relatable">
            We are solving problems we are also facing, allowing us to see from
            various perspectives.
          </GridListItem>
          <GridListItem title="Innovative">
            Tech is always evolving and so are we as we are constantly learning
            and iteratively improving.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our Products" title="Nok Ecosystem">
        <p>
          Carefully curated offerings for the African market with a global
          mindset.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <NokPay />
        <hr />
        <NokAcademy />
        <hr />
        <NokMedia />
        <hr />
        <NokTech />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
