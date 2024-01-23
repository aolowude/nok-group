import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
//NokImages
import imageGregCussell from '@/data/images/team/gregCussell.jpeg'
import imageChuOkadigbo from '@/data/images/team/chineduOkadigbo.jpeg'
import imageTimOBrien from '@/data/images/team/timOBrien.jpeg'
import imageAndrewOlowude from '@/data/images/team/andrewOlowude.jpeg'

import { loadArticles } from '@/lib/mdx'
import Link from 'next/link'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Our culture" title="Bank the Unbanked" invert>
        <p>
          We are a group of like-minded people who share the same core values
          and goals.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Speed" invert>
            Building for Africa means we ensure our platforms work in low data
            scenarios.
          </GridListItem>
          <GridListItem title="Efficiency" invert>
            Comprising of renown partners means we create produts you can trust.
          </GridListItem>
          <GridListItem title="Localisation" invert>
            Building to support multiple languages and accessibility options.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    name: 'Greg Cussell',
    role: 'Co-Founder / CEO',
    image: { src: imageGregCussell },
    url: 'https://www.linkedin.com/in/greg-cussell-7b650415/',
  },
  {
    name: 'Chuba Okadigbo',
    role: 'COO',
    image: { src: imageChuOkadigbo },
    url: 'https://www.linkedin.com/in/chinedu-okadigbo-361198121/',
  },
  {
    name: "Tim O'Brien",
    role: 'CSO',
    image: { src: imageTimOBrien },
    url: 'https://www.linkedin.com/in/t1mob',
  },
  {
    name: 'Andrew Olowude',
    role: 'CTO',
    image: { src: imageAndrewOlowude },
    url: 'https://www.linkedin.com/in/andrewolowude',
  },
  // {
  //   name: 'Chelsea Hagon',
  //   role: 'Senior Developer',
  //   image: { src: imageChelseaHagon },
  // },
  // {
  //   name: 'Emma Dorsey',
  //   role: 'Senior Designer',
  //   image: { src: imageEmmaDorsey },
  // },
  // {
  //   name: 'Leonard Krasner',
  //   role: 'VP, User Experience',
  //   image: { src: imageLeonardKrasner },
  // },
  // {
  //   name: 'Blake Reid',
  //   role: 'Junior Copywriter',
  //   image: { src: imageBlakeReid },
  // },
  // {
  //   name: 'Kathryn Murphy',
  //   role: 'VP, Human Resources',
  //   image: { src: imageKathrynMurphy },
  // },
  // {
  //   name: 'Whitney Francis',
  //   role: 'Content Specialist',
  //   image: { src: imageWhitneyFrancis },
  // },
  // {
  //   name: 'Jeffrey Webb',
  //   role: 'Account Coordinator',
  //   image: { src: imageJeffreyWebb },
  // },
  // {
  //   name: 'Benjamin Russel',
  //   role: 'Senior Developer',
  //   image: { src: imageBenjaminRussel },
  // },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        <FadeInStagger>
          <Border as={FadeIn} />
          <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-1 xl:gap-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Team
              </h2>
            </FadeIn>
            <div className="lg:col-span-3">
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
              >
                {team.map((person) => (
                  <li key={person.name.replaceAll(' ', '')}>
                    <FadeIn>
                      <Link href={person.url} target="_blank">
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            // height={100}
                            // width={100}
                            className=" w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Our strength is in our extensive expertise and vision"
      >
        <p>Nok was started to simplify banking for all.</p>
        <p>
          We are leveraging blockchain and ai to make banking more accessible.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base"></div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="partners" />
          <StatListItem value="52" label="currencies" />
          <StatListItem value="$750K+" label="raised" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Nok Blog"
        intro="We have a lot of research and ideas in active discussion"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
