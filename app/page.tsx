'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout'
import {
  Contacts,
  Footer,
  Hero,
  OurService,
  SelectedProjects,
  TheStudio,
} from '@/components/sections'
import { ScrollTrigger } from '@/lib/gsap'
import { ScrollLottie } from '@/components/animated/ScrollLottie'
import rideBicycleData from '@/public/animation/ride-bicycle.json'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const scrollDistance = 1500

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'unset'

      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }, 1200)

    return () => {
      document.body.style.overflow = 'unset'
      clearTimeout(timer)
    }
  }, [])

  return (
    <main className="relative">
      <div
        className={`bg-background fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isLoading
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
          <p className="animate-pulse text-sm font-medium tracking-widest uppercase">
            Loading Experience...
          </p>
        </div>
      </div>

      <Navbar />
      <Hero />

      <div className="lottie-trigger-region relative z-0 flex flex-col items-center justify-center">
        <ScrollLottie
          animData={rideBicycleData}
          trigger=".lottie-trigger-region"
          pin={true}
          start="top top"
          end={`+=${scrollDistance}`}
          className="flex w-full items-center justify-center pt-20 md:h-150 md:w-200 lg:h-250 lg:w-334.25"
        />
      </div>

      <div
        className="relative z-10"
        style={{ marginTop: `-${scrollDistance}px` }}
      >
        <div className="h-140 w-full" />
        <div className="bg-background shadow-[0_-50px_50px_rgba(0,0,0,0.1)]">
          <OurService />
          <TheStudio />
          <SelectedProjects />
          <Contacts />
          <Footer />
        </div>
      </div>
    </main>
  )
}
