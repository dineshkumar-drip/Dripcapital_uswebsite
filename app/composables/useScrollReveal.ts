export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  function init() {
    if (typeof window === 'undefined') return

    // Disconnect any existing observer
    if (observer) observer.disconnect()

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
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    observeAll()
  }

  function observeAll() {
    if (!observer) return
    const elements = document.querySelectorAll('.reveal:not(.visible)')
    elements.forEach((el) => observer?.observe(el))
  }

  function refresh() {
    // Re-observe any new .reveal elements that appeared after route change
    if (!observer) {
      init()
      return
    }
    observeAll()
  }

  function destroy() {
    observer?.disconnect()
    observer = null
  }

  return { init, refresh, destroy }
}
