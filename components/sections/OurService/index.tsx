'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function OurService() {
  const serviceRef = useRef<HTMLElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const line4Ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActive((prev) => (prev === index ? null : index))
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line 2 — rotates to +3deg
      gsap.fromTo(
        line2Ref.current,
        { rotation: -3 },
        {
          rotation: 3,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: line2Ref.current,
            start: 'top 95%',
            end: 'top 20%',
            scrub: 1.5,
          },
        },
      )

      // Line 3 — rotates to -3deg
      gsap.fromTo(
        line3Ref.current,
        { rotation: 3 },
        {
          rotation: -3,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: line3Ref.current,
            start: 'top 95%',
            end: 'top 20%',
            scrub: 1.5,
          },
        },
      )

      // Line 4 — rotates to +3deg
      gsap.fromTo(
        line4Ref.current,
        { rotation: -3 },
        {
          rotation: 3,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: line4Ref.current,
            start: 'top 95%',
            end: 'top 20%',
            scrub: 1.5,
          },
        },
      )
    }, serviceRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={serviceRef}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-6 py-20"
    >
      <p className="font-manrope text-center text-2xl font-bold tracking-tighter text-neutral-300 uppercase">
        Our Service
      </p>

      <div className="mx-6 flex w-full flex-col items-center sm:mx-8 md:mx-4 lg:mx-0">
        {/* Line 1 */}
        <h1 className="font-antonio text-[48px] font-bold text-neutral-600 md:text-[80px] lg:text-[128px]">
          WE CRAFT CUSTOM
        </h1>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="mx-6 mt-12 w-full sm:mx-8 md:mx-4 lg:mx-0"
        >
          <div className="-mb-0.5 h-4 w-1/3 rounded-tl-3xl rounded-tr-3xl bg-neutral-600 md:h-6 md:w-64 lg:w-91.75" />
          <div
            onClick={() => handleToggle(0)}
            className={`cursor-pointer rounded-tr-3xl ${active === 0 ? '' : 'rounded-b-3xl'} bg-neutral-600 p-4 transition-all duration-500 active:scale-[0.99] md:p-8 lg:p-12.5`}
          >
            <h1 className="font-antonio hover:text-accent-300 flex flex-wrap items-center gap-2 text-[40px] font-bold text-white sm:text-[48px] md:text-[64px] lg:text-[128px]">
              WEBSITE
              {/* (
              <Image
                src="/icons/website.svg"
                alt=""
                width={120}
                height={120}
                className="h-10 w-10 transition-all md:h-20 md:w-20 lg:h-30 lg:w-30"
              />
              ) */}
              <FontAwesomeIcon
                icon={faSortDown}
                className={`${active === 0 ? 'rotate-180' : ''} text-4xl transition-all duration-500`}
              />
            </h1>
          </div>
          {/* Line 2  Content */}
          <div
            className={`-mt-1 w-full overflow-hidden rounded-bl-3xl bg-neutral-600 p-8 transition-all duration-500 ${
              active === 0 ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col">
              <p className="font-manrope w-full text-left text-[16px] text-white md:text-[20px] lg:w-6xl lg:text-[24px]">
                We design and build modern, high-performing websites tailored to
                your business goals. From landing pages to full-scale platforms
                built to convert
              </p>
              <button className="group mt-8 w-6xl text-left">
                <span className="font-manrope text-primary-300 text-[18px] md:text-[24px]">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Line 3 */}
        <div
          ref={line3Ref}
          className="mx-6 -mt-12 w-full sm:mx-8 md:mx-4 lg:mx-0"
        >
          <div className="bg-accent-200 -mb-0.5 ml-auto h-4 w-1/3 rounded-tl-3xl rounded-tr-3xl md:h-6 md:w-64 lg:w-91.75" />
          <div
            onClick={() => handleToggle(1)}
            className={`bg-accent-200 cursor-pointer rounded-tl-3xl ${active === 1 ? '' : 'rounded-b-3xl'} flex justify-end p-4 transition-all duration-500 active:scale-[0.99] md:p-8 lg:p-12.5`}
          >
            <h1 className="font-antonio hover:text-accent-300 flex w-full flex-wrap items-center justify-end gap-2 text-right text-[40px] font-bold text-neutral-600 sm:text-[48px] md:text-[64px] lg:text-[128px]">
              <FontAwesomeIcon
                icon={faSortDown}
                className={`${active === 1 ? 'rotate-180' : ''} text-4xl transition-all duration-500`}
              />{' '}
              {/* (
              <Image
                src="/icons/software.svg"
                alt=""
                width={120}
                height={120}
                className="h-10 w-10 transition-all md:h-20 md:w-20 lg:h-30 lg:w-30"
              />
              )  */}
              MOBILE APPS
            </h1>
          </div>
          {/* Line 3 Content */}
          <div
            className={`bg-accent-200 -mt-1 w-full overflow-hidden rounded-b-3xl p-8 transition-all duration-500 ${
              active === 1 ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col items-end">
              <p className="font-manrope w-full text-right text-[16px] text-white md:text-[20px] lg:w-6xl lg:text-[24px]">
                We create scalable, reliable solutions based on your unique
                needs not assumptions
              </p>
              <button className="group mt-8 w-6xl text-right">
                <span className="font-manrope text-primary-300 text-[18px] md:text-[24px]">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Line 4 */}
        <div
          ref={line4Ref}
          className="mx-6 -mt-12 w-full sm:mx-8 md:mx-4 lg:mx-0"
        >
          <div className="-mb-0.5 h-4 w-1/3 rounded-tl-3xl rounded-tr-3xl bg-neutral-600 md:h-6 md:w-64 lg:w-91.75" />
          <div
            onClick={() => handleToggle(2)}
            className={`cursor-pointer rounded-tr-3xl ${active === 2 ? '' : 'rounded-b-3xl'} bg-neutral-600 p-4 transition-all duration-500 active:scale-[0.99] md:p-8 lg:p-12.5`}
          >
            <h1 className="font-antonio hover:text-accent-300 inline-flex w-full items-center gap-2 text-[40px] font-bold text-white sm:text-[48px] md:text-[64px] lg:text-[128px]">
              UIUX DESIGN
              {/* (
              <Image
                src="/icons/uiux.svg"
                alt=""
                width={120}
                height={120}
                className="h-10 w-10 transition-all md:h-20 md:w-20 lg:h-30 lg:w-30"
              />
              ) */}{' '}
              <FontAwesomeIcon
                icon={faSortDown}
                className={`${active === 2 ? 'rotate-180' : ''} text-4xl transition-all duration-500`}
              />
            </h1>
          </div>
          {/* Line 4 Content */}
          <div
            className={`-mt-1 w-full overflow-hidden rounded-b-3xl bg-neutral-600 p-8 transition-all duration-500 ${
              active === 2 ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col">
              <p className="font-manrope w-full text-left text-[16px] text-white md:text-[20px] lg:w-6xl lg:text-[24px]">
                We craft intuitive and user-centered designs that elevate your
                product experience.
              </p>
              <button className="group mt-8 w-6xl text-left">
                <span className="font-manrope text-primary-300 text-[18px] md:text-[24px]">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
