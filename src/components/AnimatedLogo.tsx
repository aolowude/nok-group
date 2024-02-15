'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nokLogoWhite from '@/images/logos/logoWhite.png'

export default function AnimatedLogo() {
  return (
    <motion.div
      className="place-items-cente relative flex "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        type: 'spring',
        stiffness: 100,
        damping: 100,
        // repeat: Infinity,
        // repeatType: 'reverse',
      }}
    >
      <Image
        src={nokLogoWhite}
        alt="NokGroup Logo"
        width={250}
        height={37}
        priority
      />
    </motion.div>
  )
}
