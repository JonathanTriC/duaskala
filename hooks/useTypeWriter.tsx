import { useEffect, useRef, useState } from 'react'

export function useTypeWriter(
  content = '',
  speed = 90,
  loop = false,
  eraseSpeed = 50, // ms per char while erasing
  pauseBeforeErase = 1200, // pause after fully typed
  pauseBeforeType = 400, // pause after fully erased
) {
  const [animated, setAnimated] = useState('')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevContent = useRef('')
  const cancelled = useRef(false)

  useEffect(() => {
    // Cancel any in-flight animation from previous run
    cancelled.current = true
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    // Reset if content changed
    if (prevContent.current !== content) {
      prevContent.current = content
      setAnimated('')
    }

    if (!content) return

    // Fresh run — new cancel token
    cancelled.current = false

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(() => {
        if (!cancelled.current) fn()
      }, delay)
    }

    const erase = (index: number) => {
      if (index < 0) {
        // Fully erased — pause then retype
        schedule(() => type(0), pauseBeforeType)
        return
      }
      setAnimated(content.slice(0, index))
      schedule(() => erase(index - 1), eraseSpeed)
    }

    const type = (index: number) => {
      if (index > content.length) return
      setAnimated(content.slice(0, index))

      if (index < content.length) {
        schedule(() => type(index + 1), speed)
      } else if (loop) {
        // Fully typed — pause then erase
        schedule(() => erase(content.length), pauseBeforeErase)
      }
    }

    type(0)

    return () => {
      cancelled.current = true
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [content, speed, loop, eraseSpeed, pauseBeforeErase, pauseBeforeType])

  return animated
}
