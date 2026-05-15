import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CSSPlugin } from 'gsap/CSSPlugin'

// Register once — module-level, never inside components
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, DrawSVGPlugin, CSSPlugin)

// Global defaults matching Tailwind expo-out easing
gsap.defaults({
  ease: 'power3.out',
  duration: 0.7,
})

// Prevent jumpback on tab focus
gsap.ticker.lagSmoothing(0)

export { gsap, ScrollTrigger, DrawSVGPlugin }
export default gsap
