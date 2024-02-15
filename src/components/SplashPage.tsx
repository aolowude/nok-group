import Image from 'next/image'
import AnimatedLogo from './AnimatedLogo'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <AnimatedLogo />
    </div>
  )
}
