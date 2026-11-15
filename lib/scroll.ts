// One shared scroll/resize listener for every scroll-driven effect on the page.
// Subscribers run at most once per animation frame.

type Fn = () => void

const subs = new Set<Fn>()
let raf = 0

function tick() {
  raf = 0
  subs.forEach((fn) => fn())
}

function request() {
  if (!raf) raf = requestAnimationFrame(tick)
}

export function onFrame(fn: Fn): () => void {
  subs.add(fn)
  if (subs.size === 1) {
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
  }
  request()
  return () => {
    subs.delete(fn)
    if (subs.size === 0) {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }
}

export const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n)

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
