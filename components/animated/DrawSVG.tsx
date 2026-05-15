'use client'

import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/lib/gsap'

interface DrawSVGProps {
  svgRaw?: string
  svgSrc?: string
  stroke?: string
  strokeWidth?: number
  scrollTrigger?: string
  duration?: number
  ease?: string
  delay?: number
  repeatDelay?: number
  loop?: boolean
  className?: string
}

export function DrawSVG({
  svgRaw,
  svgSrc,
  stroke = '#2E2D2B',
  strokeWidth = 1,
  scrollTrigger,
  duration = 1.8,
  ease = 'power2.inOut',
  delay = 0,
  repeatDelay = 0.5,
  loop = false,
  className,
}: DrawSVGProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string | null>(svgRaw ?? null)

  useEffect(() => {
    if (!svgSrc) return
    fetch(svgSrc)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load SVG: ${svgSrc}`)
        return r.text()
      })
      .then(setSvgContent)
      .catch(console.error)
  }, [svgSrc])

  useGSAP(
    () => {
      if (!svgContent || !containerRef.current) return

      const paths = containerRef.current.querySelectorAll<SVGPathElement>(
        'path, circle, rect, line, polyline, polygon, ellipse',
      )
      if (!paths.length) return

      // Measure lengths and apply static styles
      const lengths = Array.from(paths).map((path) =>
        'getTotalLength' in path
          ? (path as SVGGeometryElement).getTotalLength()
          : 0,
      )

      paths.forEach((path, i) => {
        gsap.set(path, {
          stroke,
          strokeWidth,
          fill: 'none',
          strokeDasharray: lengths[i],
          strokeDashoffset: lengths[i],
        })
      })

      const staggerAmount = paths.length > 1 ? duration / paths.length / 2 : 0
      // Total wall-clock time for all staggered paths to finish
      const totalDuration = duration + staggerAmount * (paths.length - 1)

      // Builds and plays the draw timeline. Called directly or from onEnter.
      const runAnimation = () => {
        // Reset offsets before each run (needed for loop iterations)
        paths.forEach((path, i) => {
          gsap.set(path, { strokeDashoffset: lengths[i] })
        })

        const tl = gsap.timeline({
          delay,
          onComplete: loop
            ? () => {
                // Erase all paths together, then redraw
                gsap.to(Array.from(paths), {
                  strokeDashoffset: (i) => lengths[i],
                  duration: totalDuration * 0.4,
                  ease: 'power2.in',
                  delay: repeatDelay,
                  onComplete: runAnimation,
                })
              }
            : undefined,
        })

        tl.to(Array.from(paths), {
          strokeDashoffset: 0,
          duration,
          ease,
          stagger: staggerAmount,
        })
      }

      if (scrollTrigger) {
        if (loop) {
          // Looping: ScrollTrigger fires runAnimation once on enter.
          // The loop then runs freely via onComplete — no repeated ScrollTrigger.
          gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: scrollTrigger,
              once: true,
              onEnter: runAnimation,
            },
          })
        } else {
          // Non-looping: attach ScrollTrigger to the draw timeline so
          // toggleActions (play/reverse) work correctly.
          paths.forEach((path, i) => {
            gsap.set(path, { strokeDashoffset: lengths[i] })
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: scrollTrigger,
              toggleActions: 'play none none reverse',
            },
            delay,
          })

          tl.to(Array.from(paths), {
            strokeDashoffset: 0,
            duration,
            ease,
            stagger: staggerAmount,
          })
        }
      } else {
        runAnimation()
      }
    },
    { scope: containerRef, dependencies: [svgContent] },
  )

  if (!svgContent) return null

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}
