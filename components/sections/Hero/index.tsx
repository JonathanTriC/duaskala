'use client'

import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/lib/gsap'
import Image from 'next/image'
import CTAButton from '@/components/animated/CTAButton'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      tl.fromTo(
        '.hero-title',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.0 },
      )
        .fromTo(
          '.hero-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3',
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3',
        )
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      className="hero-section relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden px-6 pt-20"
    >
      {/* Big display title */}
      <div className="flex w-full max-w-7xl flex-row justify-center pt-46 text-center sm:pt-32 md:pt-24">
        <h1 className="hero-title font-antonio text-[100px] leading-[0.9] font-black tracking-tighter text-neutral-500 uppercase opacity-0 md:text-[160px] lg:text-[260px]">
          DUASKALA
        </h1>
        {/* Arrow pointing to the circle */}
        <Image
          src="/decoration/arrow-top-right-handrawn.svg"
          alt=""
          width={48}
          height={48}
          className="full pointer-events-none absolute top-20 right-30 hidden h-12 w-12 max-w-7xl md:block"
        />
      </div>

      {/* Subheading — Handwritten font */}
      <p className="hero-sub font-reenie mt-10 text-center text-[28px] tracking-wide text-neutral-500 opacity-0">
        A studio from Indonesia. We Design your product
      </p>

      {/* CTA button */}
      <div className="hero-cta mt-10 opacity-0">
        <CTAButton
          label="START A PROJECT"
          circleWidth={500}
          onClick={() => {}}
        />
      </div>
    </section>
  )
}
