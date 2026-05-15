'use client'

import { useRef } from 'react'
import { DrawSVG } from '@/components/animated/DrawSVG'
import Image from 'next/image'

export function TheStudio() {
  const studioRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={studioRef}
      className="studio-section relative mx-auto flex min-h-screen max-w-7xl flex-col items-center overflow-hidden px-4 py-12 sm:px-6 lg:py-20"
    >
      {/* Header */}
      <div className="relative flex w-full flex-col items-center">
        <p className="studio-creative font-reenie text-accent-200 pointer-events-none hidden select-none lg:absolute lg:top-14 lg:left-0 lg:block lg:-rotate-30 lg:text-[32px] lg:font-medium lg:tracking-tighter lg:uppercase">
          CREATIVE
        </p>

        <div className="flex w-full flex-col items-center">
          <p className="studio-sub font-manrope text-center text-sm font-bold tracking-tighter text-neutral-300 uppercase sm:text-base lg:text-2xl">
            THE STUDIO
          </p>

          <h1 className="studio-title font-antonio mt-2 text-center text-4xl font-bold tracking-wide text-neutral-500 uppercase sm:text-5xl md:text-6xl lg:text-[64px]">
            Two people. One studio.
            <br />
            Zero compromise
          </h1>
        </div>

        <div className="pointer-events-none absolute top-0 right-0 w-12 sm:w-16 lg:w-auto">
          <DrawSVG
            svgSrc="/decoration/sketch.svg"
            loop
            duration={4}
            repeatDelay={1}
            className="studio-sketch"
            scrollTrigger="top bottom"
          />
        </div>
      </div>

      {/*  "Dua" quote */}
      <div className="mt-10 flex w-full flex-row items-center lg:mt-16 lg:items-end lg:justify-center lg:gap-2.5">
        <p className="font-reenie w-full max-w-prose text-left text-[24px] font-medium tracking-tighter text-neutral-600 uppercase sm:text-[32px] lg:w-90 lg:text-[36px]">
          &ldquo;Dua&rdquo; means two in Indonesian. Two people, two
          disciplines, one shared obsession: building digital products that look
          as good as they work.
        </p>

        <Image
          src="/decoration/slicing.svg"
          alt=""
          width={116}
          height={125}
          className="pointer-events-none h-51.25 w-full max-w-xs lg:h-58 lg:w-100"
        />
      </div>

      {/* Fire GIF */}
      <div className="relative mt-10 flex w-full flex-col items-center lg:mt-16">
        <div className="pointer-events-none hidden lg:absolute lg:left-10 lg:block lg:rotate-90">
          <DrawSVG
            svgSrc="/decoration/sketch.svg"
            loop
            duration={4}
            repeatDelay={1}
            className="studio-sketch"
            scrollTrigger="top bottom"
          />
        </div>

        <div className="relative inline-flex flex-col items-center">
          <Image
            src="/decoration/fire.gif"
            alt=""
            width={179}
            height={179}
            className="pointer-events-none h-36 w-36 sm:h-44 sm:w-44 lg:h-44.75 lg:w-44.75"
          />

          <div className="absolute top-4 -right-20 flex items-start sm:-right-28">
            <Image
              src="/decoration/line-bottom-right.svg"
              alt=""
              width={50}
              height={47}
              className="pointer-events-none h-10 w-10 sm:h-11.75 sm:w-12.5"
            />
            <p className="font-reenie ml-2 -rotate-15 text-center text-[24px] font-medium tracking-tighter text-neutral-600 sm:ml-4 sm:text-[32px]">
              This is
              <br />
              fire
            </p>
          </div>
        </div>

        <p className="studio-creative font-reenie text-accent-200 pointer-events-none hidden select-none lg:absolute lg:top-44 lg:right-8 lg:block lg:-rotate-15 lg:text-center lg:text-[32px] lg:font-medium lg:tracking-tighter lg:uppercase">
          LOGICAL
        </p>
      </div>

      {/* "Right team" + "Skala" */}
      <div className="mt-10 flex w-full flex-col items-center gap-8 pt-4 lg:mt-0 lg:flex-row lg:items-start lg:justify-center lg:gap-2.5 lg:pt-16">
        {/* "Right team" paragraph */}
        <p className="font-reenie w-full max-w-prose text-left text-[28px] font-medium tracking-tighter text-neutral-600 uppercase sm:text-[32px] lg:mr-20 lg:w-90 lg:text-[36px]">
          We don&apos;t have a big team. We have the right one. Every project
          gets both of us — the full creative eye and the full technical mind,
          working together from day one.
        </p>

        <div className="flex flex-row items-center lg:flex-col lg:items-end">
          <Image
            src="/decoration/chart.svg"
            alt=""
            width={226}
            height={192}
            className="pointer-events-none h-auto w-40 sm:w-48 lg:h-48 lg:w-56.5"
          />
          <p className="font-reenie mt-6 w-full max-w-prose text-right text-[28px] font-medium tracking-tighter text-neutral-600 uppercase sm:text-[32px] lg:w-90 lg:text-[36px]">
            &ldquo;Skala&rdquo; means scale. What we build isn&apos;t just meant
            to launch — it&apos;s built to grow, adapt, and evolve alongside
            your business.
          </p>
        </div>

        <div className="pointer-events-none hidden lg:absolute lg:right-10 lg:bottom-25 lg:block lg:-rotate-22">
          <DrawSVG
            svgSrc="/decoration/sketch.svg"
            loop
            duration={4}
            repeatDelay={1}
            className="studio-sketch"
            scrollTrigger="top bottom"
          />
        </div>
      </div>
    </section>
  )
}
