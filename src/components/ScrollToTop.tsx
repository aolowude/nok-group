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
      if (isScrolled && buttonRef.current) {
        buttonRef.current.classList.remove('opacity-0', 'invisible')
      } else if (buttonRef.current) {
        buttonRef.current.classList.add('opacity-0', 'invisible')
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
        className="border-teal text-teal fixed bottom-0 right-0 mb-20 mr-20 rounded-full border bg-white p-4 shadow-md transition duration-150 ease-in-out hover:bg-opacity-90"
      >
        <Image src={ScrollToTopIcon} width={20} alt="Scroll To Top Button" />
      </button>
    )
  )
}

export default ScrollToTopButton
