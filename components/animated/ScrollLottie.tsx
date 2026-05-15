'use client'
import { useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from '@/lib/gsap'

interface ScrollLottieProps {
  animData: LottieAnimationData
  totalFrames?: number
  trigger?: string | React.RefObject<HTMLElement | null>
  pin?: boolean | string | React.RefObject<HTMLElement | null>
  start?: string
  end?: string | number
  className?: string
  toggleClass?: string
}

export function ScrollLottie({
  animData,
  totalFrames,
  trigger,
  pin,
  start,
  end,
  className,
  toggleClass,
}: ScrollLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const frames = totalFrames || animData?.op || 100
      const obj = { frame: 0 }

      let triggerEl: string | Element | null = null
      if (typeof trigger === 'string') {
        triggerEl = trigger
      } else if (trigger && trigger.current) {
        triggerEl = trigger.current
      } else {
        triggerEl = wrapRef.current
      }

      let pinEl: boolean | string | Element = false
      if (typeof pin === 'string' || typeof pin === 'boolean') {
        pinEl = pin
      } else if (pin && pin.current) {
        pinEl = pin.current
      }

      gsap.to(obj, {
        frame: frames - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: start || 'top top',
          end: end || 'bottom center',
          scrub: 0.5,
          pin: pinEl,
          toggleClass: toggleClass,
        },
        onUpdate: () => {
          lottieRef.current?.goToAndStop(obj.frame, true)
        },
      })
    },
    { scope: typeof trigger === 'string' ? undefined : trigger || wrapRef },
  )

  return (
    <div ref={wrapRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animData}
        autoplay={false}
        loop={false}
      />
    </div>
  )
}
