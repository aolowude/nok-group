'use client'
import React, { useState, useEffect, useRef } from 'react'
import ScrollToTopIcon from '@/images/icons/ScrollToTopIcon.svg'
import Image from 'next/image'

const ScrollToTopButton = () => {
  const buttonRef = useRef(null)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100 // Update threshold if needed
      setIsScrolled(isScrolled)

      // Set opacity based on scrolled state
      if (buttonRef.current) {
        ;(buttonRef.current as HTMLElement).classList.remove(
          'opacity-0',
          'invisible',
        )
      } else if (buttonRef.current) {
        ;(buttonRef.current as HTMLElement).classList.add(
          'opacity-0',
          'invisible',
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)

  return (
    isScrolled && (
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="border-teal text-teal  duration-00 invisible fixed bottom-0 right-0 mb-8 mr-8 rounded-full bg-[#00ffc6] bg-opacity-90 p-4 opacity-0 shadow-md transition ease-in-out hover:scale-110 hover:bg-[#afffed]"
      >
        <Image src={ScrollToTopIcon} width={20} alt="Scroll To Top Button" />
      </button>
    )
  )
}

export default ScrollToTopButton
