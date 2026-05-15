'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useGSAP } from '@/hooks/useGSAP'

const NAV_LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
]

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(
    () => {
      const showAnim = gsap
        .from(navRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: 'power2.out',
        })
        .progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          if (self.scroll() < 80 || self.direction === -1) {
            showAnim.play()
          } else if (self.direction === 1 && self.scroll() > 80) {
            showAnim.reverse()
          }
        },
      })
    },
    { scope: navRef },
  )

  return (
    <header
      ref={navRef}
      className="fixed top-0 right-0 left-0 z-50 bg-[#FFF8F6]/80 px-6 py-5 backdrop-blur-sm md:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo - Blue icon with DUASKALA text */}
        <Link href="/" className="z-10 flex items-center gap-1.5">
          <Image
            src="/icons/logo-text.svg"
            alt=""
            width={129}
            height={21}
            loading="eager"
          />
        </Link>

        {/* Desktop nav links - Handwritten Reenie Beanie style */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-reenie text-[28px] leading-none transition-colors hover:text-neutral-500 ${
                  link.active ? 'text-neutral-500' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book a call — Hand-drawn circle with arrow */}
        <div className="group relative hidden md:block">
          <Link
            href="#contact"
            className="font-manrope relative z-10 block px-6 py-2.5 text-[14px] font-bold text-neutral-500 transition-transform duration-200 group-hover:scale-105"
          >
            Book a call
          </Link>
          {/* Hand-drawn SVG circle */}
          <Image
            src="/decoration/round-circle-handrawn.svg"
            alt=""
            width={158}
            height={80}
            loading="eager"
            className="pointer-events-none absolute inset-0 -top-3 left-0.5 h-[calc(100%+20px)] w-[calc(100%+24px)] object-fill transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="z-10 flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-neutral-600 transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-600 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-600 transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-[#FFF8F6] transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-screen border-b border-neutral-600/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-reenie text-[28px] leading-none transition-colors hover:text-neutral-500 ${
                  link.active ? 'text-neutral-500' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div>
            <Link
              href="#contact"
              className="font-manrope mt-4 px-8 py-2 font-bold text-neutral-600"
            >
              Book a call
            </Link>
            {/* Hand-drawn SVG circle */}
            <Image
              src="/decoration/round-circle-handrawn.svg"
              alt=""
              width={58}
              height={20}
              loading="eager"
              className="pointer-events-none absolute bottom-6 h-[calc(22%)] w-[calc(34%)] object-fill"
            />
          </div>
        </ul>
      </div>
    </header>
  )
}
