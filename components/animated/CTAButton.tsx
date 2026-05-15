'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

interface CTAButtonProps {
  label?: string
  circleWidth?: number
  circleHeight?: number
  onClick?: () => void
}

export default function CTAButton({
  label,
  circleWidth,
  circleHeight,
  onClick,
}: CTAButtonProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const busyRef = useRef(false)

  const handleMouseEnter = () => {
    const img = imgRef.current
    if (!img || busyRef.current) return

    busyRef.current = true

    gsap.killTweensOf(img)

    gsap
      .timeline({
        onComplete: () => {
          busyRef.current = false
        },
      })
      // Pulse out: scale up + fade out
      .to(img, {
        scale: 1.12,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
      // Reset scale instantly, then pulse back in
      .set(img, { scale: 0.9 })
      .to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: 'elastic.out(1, 0.5)',
      })
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      aria-label={label}
      onClick={onClick}
      className="group relative inline-flex cursor-pointer items-center justify-center border-none bg-transparent p-0"
    >
      {/* Text layer */}
      <span className="font-reenie text-primary-300 relative z-10 px-8 py-2.5 text-[30px] font-bold tracking-[3px] transition-transform duration-200 select-none group-hover:scale-105">
        {label}
      </span>

      {/* SVG oval overlay */}
      <Image
        ref={imgRef}
        src="/decoration/blue-oval-sketch.svg"
        alt=""
        aria-hidden
        width={circleWidth || 200}
        height={circleHeight || 80}
        className="pointer-events-none absolute inset-0 h-full w-full object-fill"
        style={{
          width: circleWidth || '100%',
          height: circleHeight || '100%',
        }}
      />
    </button>
  )
}
