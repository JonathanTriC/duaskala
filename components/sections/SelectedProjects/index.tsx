'use client'

import CTAButton from '@/components/animated/CTAButton'
import Image from 'next/image'
import { useRef } from 'react'

export function SelectedProjects() {
  const selectedProjectsRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={selectedProjectsRef}
      className="selectedProjects-section relative flex min-h-screen flex-col overflow-hidden bg-neutral-600 px-6 py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-row items-center gap-6 pt-12 text-left md:items-start md:pt-24">
          <h1 className="font-antonio shrink-0 text-[42px] leading-[0.9] font-black tracking-tighter text-white uppercase sm:text-[56px] md:text-[72px] lg:text-[128px]">
            Selected{' '}
            <span className="relative inline">
              <Image
                src="/decoration/project-oval-sketch.svg"
                alt=""
                width={478}
                height={216}
                className="pointer-events-none absolute -inset-x-1 -top-5 z-10 h-[160%] w-[calc(150%+2rem)] md:w-[calc(180%+4rem)] lg:w-[calc(200%+6rem)] lg:-inset-x-2 lg:-top-11"
              />
              <span className="relative z-0">Projects</span>
            </span>
            <br />
            We&apos;ve{' '}
            <span className="mt-8 inline-block align-text-bottom">
              <Image
                src="/decoration/target.svg"
                alt=""
                width={184}
                height={184}
                className="pointer-events-none hidden h-10 w-10 md:inline-block md:h-20 md:w-20 lg:h-46 lg:w-46"
              />
            </span>{' '}
            Worked On
          </h1>

          <p className="font-reenie mt-2 w-25 shrink-0 animate-pulse text-center text-[20px] leading-tight text-white uppercase sm:w-32 md:mt-4 md:w-40 lg:w-51 lg:text-[32px]">
            Our project are crafted by professional
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
          <div className="relative flex h-100.5 w-full max-w-[384px] rotate-6 cursor-pointer flex-col bg-neutral-100 p-8 transition-all duration-500 hover:rotate-9 lg:-mt-12 lg:rotate-0">
            <div className="bg-primary-300 absolute -top-4 left-45 h-8.5 w-8.5 rounded-2xl" />
            <Image
              src="/images/sibali-cover.png"
              alt=""
              width={320}
              height={240}
              className="full pointer-events-none h-60 w-80"
            />
            <div className="flex -rotate-5 flex-col">
              <span className="font-reenie text-[48px] font-medium text-neutral-600 uppercase">
                SIBALI
              </span>
              <span className="font-manrope text-[16px] text-neutral-400">
                Itenenary Maker - AI Powered
              </span>
            </div>
          </div>

          <div className="relative -mt-12 flex h-100.5 w-full max-w-[384px] -rotate-6 cursor-pointer flex-col bg-neutral-100 p-8 transition-all duration-500 hover:-rotate-9 lg:rotate-0">
            <div className="bg-primary-300 absolute -top-4 left-45 h-8.5 w-8.5 rounded-2xl" />
            <Image
              src="/images/sibali-cover.png"
              alt=""
              width={320}
              height={240}
              className="full pointer-events-none h-60 w-80"
            />
            <div className="flex -rotate-5 flex-col">
              <span className="font-reenie text-[48px] font-medium text-neutral-600 uppercase">
                SIBALI
              </span>
              <span className="font-manrope text-[16px] text-neutral-400">
                Itenenary Maker - AI Powered
              </span>
            </div>
          </div>

          <div className="relative -mt-12 flex h-100.5 w-full max-w-[384px] rotate-6 cursor-pointer flex-col bg-neutral-100 p-8 transition-all duration-500 hover:rotate-9 lg:rotate-0">
            <div className="bg-primary-300 absolute -top-4 left-45 h-8.5 w-8.5 rounded-2xl" />
            <Image
              src="/images/sibali-cover.png"
              alt=""
              width={320}
              height={240}
              className="full pointer-events-none h-60 w-80"
            />
            <div className="flex -rotate-5 flex-col">
              <span className="font-reenie text-[48px] font-medium text-neutral-600 uppercase">
                SIBALI
              </span>
              <span className="font-manrope text-[16px] text-neutral-400">
                Itenenary Maker - AI Powered
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-11.5 flex w-full justify-center">
          <CTAButton label="See All" />
        </div>
      </div>
    </section>
  )
}
