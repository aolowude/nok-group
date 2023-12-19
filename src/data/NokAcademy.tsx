import React from "react"
import Content_with_image, { ContentWithImageType } from "../components/Content_with_image"
import { Icon_NokAcademy_logo } from "../Icons"
import img_academy from "./images/nokAcademy/academy.png"
import img_academy_loading from "./images/nokAcademy/academy_loading.png"
import img_academy_background from "./images/nokAcademy/academy_backround.png"
import img_academy_background_loading from "./images/nokAcademy/academy_backround_loading.png"

function NokAcademy() {
  const data: ContentWithImageType = {
    icon: <Icon_NokAcademy_logo />,
    title: "NokAcademy",
    images: {
      background: {
        img: img_academy_background,
        loading: img_academy_background_loading,
        alt: "academy background",
      },
      illustration: {
        img: img_academy,
        loading: img_academy_loading,
        alt: "academy illustration",
      },
    },
    content: (
      <>
        <p>
          The incubation platform for African entrepreneurs, using blockchain technology and communities to access global funds. 3-month
          program leading to an enterprise accelerator, growing African wealth and development. Close links to share exchanges to provide a
          path from ICO to IPO.
        </p>
      </>
    ),
    tags: [
      "Incubation",
      "Acceleration ",
      "Launchpad",
      "ICO to IPO",
      "Network Integration",
      "Community",
      "Minting through XSM",
      " Tokenisation",
    ],
    accentColor: "#F0AD66",
    reverse: true,
  }

  return (
    <section id="nok-academy">
      <Content_with_image data={data} />
    </section>
  )
}

export default NokAcademy
