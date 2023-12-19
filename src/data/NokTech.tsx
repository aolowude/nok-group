import React from "react"
import Content_with_image, { ContentWithImageType } from "../components/Content_with_image"
import { Icon_NokTech_logo } from "../Icons"
import img_nokTech from "./images/nokTech/nokTech.png"
import img_nokTech_loading from "./images/nokTech/noktech_loading.png"
import img_nokTech_background from "./images/nokTech/noktech_backround.png"
import img_nokTech_background_loading from "./images/nokTech/noktech_backround_loading.png"

function NokTech() {
  const data: ContentWithImageType = {
    icon: <Icon_NokTech_logo />,
    title: "NokTech",
    images: {
      background: {
        img: img_nokTech_background,
        loading: img_nokTech_background_loading,
        alt: "nokTech background",
      },
      illustration: {
        img: img_nokTech,
        loading: img_nokTech_loading,
        alt: "nokTech illustration",
      },
    },
    content: (
      <>
        <p>
          The basis for the future of African crypto, the $NOK token, with a bespoke wallet and rewards programme. An NFT platform using
          proven technology allowing entrepreneurs and artists to realise their true potential. The African development consultancy and
          agency for the NokGroup, building end-to-end platforms and blockchain solutions for African consumers.
        </p>
      </>
    ),
    tags: ["$NOK Token", "Full Tech IP of NokPay", "NFT Exchange", "Crypto Exchange Wallet", "UI/UX"],
    accentColor: "#5B40FF",
  }

  return (
    <section id="nok-tech">
      <Content_with_image data={data} />
    </section>
  )
}

export default NokTech
