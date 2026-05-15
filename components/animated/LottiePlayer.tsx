'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

interface LottiePlayerProps {
  src: string
  loop?: boolean
  autoplay?: boolean
  className?: string
  onReady?: () => void
  fallback?: React.ReactNode
}

export function LottiePlayer({
  src,
  loop = true,
  autoplay = true,
  className,
  onReady,
  fallback,
}: LottiePlayerProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const [animData, setAnimData] = useState<object | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error('Not found')
        return r.json()
      })
      .then((data) => {
        setAnimData(data)
        onReady?.()
      })
      .catch(() => setError(true))
  }, [src])

  if (error || (!animData && fallback)) {
    return <>{fallback}</>
  }
  if (!animData) return null

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}
