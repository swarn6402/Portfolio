import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)

  // Decide on mount (client-only) whether the cursor should render at all.
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    setEnabled(isDesktop && !prefersReducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { x: target.x, y: target.y }
    let frame = 0

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const render = () => {
      // Lerp toward the target ~12% per frame for a trailing feel.
      pos.x += (target.x - pos.x) * 0.12
      pos.y += (target.y - pos.y) * 0.12
      const el = dotRef.current
      if (el) {
        el.style.transform = `translate(${pos.x - 8}px, ${pos.y - 8}px)`
      }
      frame = requestAnimationFrame(render)
    }

    // Hide the native cursor while the custom one is active.
    const previousCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', handleMouseMove)
    frame = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frame)
      document.body.style.cursor = previousCursor
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        border: '1px solid var(--portfolio-accent)',
        borderRadius: '50%',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
      }}
    />
  )
}
