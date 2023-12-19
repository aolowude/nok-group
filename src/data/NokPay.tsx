import React from "react"
import Content_with_image, { ContentWithImageType } from "../components/Content_with_image"
import { Icon_NokPay_logo } from "../Icons"
import img_nokPay from "./images/nokPay/nokpay.png"
import img_nokPay_loading from "./images/nokPay/nokpay_loading.png"
import img_nokpay_background from "./images/nokPay/nokpay_backround.png"
import img_nokpay_background_loading from "./images/nokPay/nokpay_backround_loading.png"

function NokPay() {
  const data: ContentWithImageType = {
    icon: <Icon_NokPay_logo />,
    title: "NokPay",
    images: {
      background: {
        img: img_nokpay_background,
        loading: img_nokpay_background_loading,
        alt: "nokpay background",
      },
      illustration: {
        img: img_nokPay,
        loading: img_nokPay_loading,
        alt: "nokpay illustration",
      },
    },
    content: (
      <>
        <p>
          A best-in-class financial technology digital platform and intuitive user interface covering regulated fiat, crypto and card
          transaction services. Using exciting marketing and branding to create a strong Banking-as-a-Service identity. Spanning the gap
          between fiat and crypto in a regulated, trustworthy environment.
        </p>
      </>
    ),
    tags: ["Banking As A Service", "Banking Licenses", "KYC/AML", "Card Issuing", "Services Centre's", "Core Branding", "UI/UX"],
    accentColor: "#03EFE3",
  }

  return (
    <section id="nok-pay">
      <Content_with_image data={data} />
    </section>
  )
}

export default NokPay
