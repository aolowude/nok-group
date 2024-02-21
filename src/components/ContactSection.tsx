import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-between">
            <h2 className="font-display text-xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Get in touch with us
            </h2>
            <div className="">
              <Button href="/contact" invert>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Our offices
            </h3>
            <div className="">
              <Offices
                invert
                className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
