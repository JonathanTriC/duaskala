'use client'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FFF8F6] pt-12 md:pt-16">
      {/* Top grid — 3 columns on desktop, stacked on mobile */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-6 md:px-12">
        {/* Column 1 — Contact */}
        <div className="flex flex-col gap-2">
          <p className="font-manrope text-sm text-neutral-400">
            New project / Bussiness
          </p>
          <a
            href="mailto:info@duaskala.com"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            info@duaskala.com
          </a>
          <a
            href="tel:+628818374113"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            (+62) 8818374113
          </a>
        </div>

        {/* Column 2 — Services */}
        <div className="flex flex-col gap-2">
          <p className="font-manrope text-sm text-neutral-400">Our Services</p>
          <a
            href="#"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            Proffesional Website
          </a>
          <a
            href="#"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            Custom App Development
          </a>
        </div>

        {/* Column 3 — Nav */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            Home
          </a>
          <a
            href="#"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            About
          </a>
          <a
            href="#"
            className="font-manrope hover:text-primary-300 text-base text-neutral-800 transition-opacity"
          >
            Porfolio
          </a>
        </div>
      </div>

      {/* Giant wordmark — bleeds to edges */}
      <div className="mt-8 md:mt-12">
        <p className="font-antonio text-center text-[28vw] leading-none font-black tracking-tighter text-neutral-900 uppercase select-none sm:text-[24vw] md:text-[22vw] lg:text-[21vw]">
          DUASKALA
        </p>
      </div>

      {/* Copyright — sits on top of the wordmark's bottom edge */}
      <div className="relative -mt-10 bg-[#FFF8F6] py-4 text-center sm:-mt-16 md:-mt-20 lg:-mt-32 lg:py-9">
        <p className="font-manrope text-[16px] text-neutral-600">
          © 2026 DUASKALA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
