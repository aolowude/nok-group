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

//NokImages
import imageGregCussell from '@/data/images/team/gregCussell.jpeg'
import imageChuOkadigbo from '@/data/images/team/chineduOkadigbo.jpeg'
import imageTimOBrien from '@/data/images/team/timOBrien.jpeg'
import imageAndrewOlowude from '@/data/images/team/andrewOlowude.jpeg'
import imageLindenLeadbetter from '@/data/images/team/lindenLeadbetter.jpg'
import imageStylianosKampakis from '@/data/images/team/stylianosKampakis.jpg'
import imageMarkWalsh from '@/data/images/team/markWalsh.jpeg'
import imageToisnAshafa from '@/data/images/team/toisnAshafa.jpg'
import imageAdamChorley from '@/data/images/team/adamChorley.jpg'
import imageGregBeitchman from '@/data/images/team/gregBeitchman.jpg'
import imageTomObafemi from '@/data/images/team/tomObafemi.jpg'
// import imageRyan from '@/data/images/team/'

import { loadArticles } from '@/lib/mdx'
import Link from 'next/link'

import LogoRow from '@/components/LogoRow'

function Culture() {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-16 sm:mt-10 lg:mt-36 lg:py-20">
      <SectionIntro
        eyebrow="Our Goal"
        title="Customisable and accessible banking"
        invert
      >
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
    role: 'Co-Founder',
    image: { src: imageChuOkadigbo },
    url: 'https://www.linkedin.com/in/chinedu-okadigbo-361198121/',
  },
  {
    name: "Tim O'Brien",
    role: 'Co-Founder',
    image: { src: imageTimOBrien },
    url: 'https://www.linkedin.com/in/t1mob',
  },
  {
    name: 'Andrew Olowude',
    role: 'Co-Founder',
    image: { src: imageAndrewOlowude },
    url: 'https://www.linkedin.com/in/andrewolowude',
  },
  {
    name: 'Dr. Linden Leadbetter',
    role: '',
    image: { src: imageLindenLeadbetter },
    url: 'https://www.linkedin.com/in/linden-leadbetter-59820a/',
  },
  {
    name: 'Dr. Stylianos Kampakis',
    role: '',
    image: { src: imageStylianosKampakis },
    url: 'https://www.linkedin.com/in/andrewolowude',
  },
  {
    name: 'Mark Walsh',
    role: '',
    image: { src: imageMarkWalsh },
    url: 'https://www.linkedin.com/in/andrewolowude',
  },

  {
    name: 'Adam Chorley',
    role: '',
    image: { src: imageAdamChorley },
    url: 'https://www.linkedin.com/in/adam-chorley-b848761a/',
  },
  {
    name: 'Tosin Ashafa',
    role: '',
    image: { src: imageToisnAshafa },
    url: 'https://www.linkedin.com/in/basheertosinashafa/',
  },

  {
    name: 'Greg BeitchMann',
    role: '',
    image: { src: imageGregBeitchman },
    url: 'https://www.linkedin.com/in/greg-beitchman-56a2942/',
  },

  {
    name: 'Tom Obafemi',
    role: '',
    image: { src: imageTomObafemi },
    url: 'https://www.linkedin.com/in/tom-obafemi-7671ab14/',
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
                className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
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
      <PageIntro eyebrow="About Us" title="Extensive expertise and vision">
        <p>Nok was started to simplify banking for all.</p>
        <p>We are leveraging AI to make products more accessible and secure.</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base"></div>
      </PageIntro>

      {/* Icons */}
      <LogoRow />

      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="partners" />
          <StatListItem value="3" label="subsidiaries" />
          <StatListItem value="$500K+" label="raised" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Nok Blog"
        intro="We have a lot of research and ideas in active discussion"
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
