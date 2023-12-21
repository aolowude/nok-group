import React from 'react'
import Content_with_image, {
  ContentWithImageType,
} from '../components/Content_with_image'
import img_nokMedia from './images/nokMedia/nokMedia.png'
import img_nokMedia_loading from './images/nokMedia/nokMedia_loading.png'
import img_nokMedia_background from './images/nokMedia/nokMedia_backround.png'
import img_nokMedia_background_loading from './images/nokMedia/nokMedia_backround_loading.png'
import { Icon_NokMedia_logo } from '../components/Icons'

function NokMedia() {
  const data: ContentWithImageType = {
    icon: <Icon_NokMedia_logo />,
    title: 'NokMedia',
    images: {
      background: {
        img: img_nokMedia_background,
        loading: img_nokMedia_background_loading,
        alt: 'nokMedia background',
      },
      illustration: {
        img: img_nokMedia,
        loading: img_nokMedia_loading,
        alt: 'nokMedia illustration',
      },
    },
    content: (
      <>
        <p>
          Creating a strong voice advocating for African economic opportunities,
          promoting our community of investors and changing investor
          perceptions. Building a pan-African identity and entrepreneur
          ecosystem and leveraging creators and influencers to promote the
          NokGroup brand.
        </p>
      </>
    ),
    tags: [
      'User Acquisition',
      'Publisher Relations',
      'African Communications Union',
      'Media & Production',
      'Distribution',
      'Content Creation',
    ],
    reverse: true,
    accentColor: '#CCFF82',
  }

  return (
    <section id="nok-media">
      <Content_with_image data={data} />
    </section>
  )
}

export default NokMedia
