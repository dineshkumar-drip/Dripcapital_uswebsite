export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  function init() {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer?.observe(el))
  }

  function refresh() {
    if (!observer) return
    const elements = document.querySelectorAll('.reveal:not(.visible)')
    elements.forEach((el) => observer?.observe(el))
  }

  function destroy() {
    observer?.disconnect()
    observer = null
  }

  return { init, refresh, destroy }
}
