/* Smooth scroll with offset for fixed nav */
export function enableSmoothScroll() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href').slice(1)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      const navH = document.querySelector('.nav')?.offsetHeight || 0
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
      window.scrollTo({ top, behavior: 'smooth' })
      // close mobile menu
      document.querySelector('.nav-menu')?.classList.remove('open')
    }
  })
}

/* Scroll-triggered reveal animations */
export function enableScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el)
  })
}

/* Nav scroll state: transparent → solid */
export function enableNavScroll() {
  const nav = document.querySelector('.nav')
  if (!nav) return
  const sections = document.querySelectorAll('section[id]')
  const navLinks = nav.querySelectorAll('.nav-menu a:not(.nav-cta)')

  function updateNav() {
    const scrollY = window.scrollY
    // toggle solid bg
    if (scrollY > 80) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
    // active section highlighting
    let current = ''
    sections.forEach(section => {
      const top = section.offsetTop - nav.offsetHeight - 100
      if (scrollY >= top) current = section.id
    })
    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', updateNav, { passive: true })
  updateNav()
}

/* Animated stat counters */
export function enableCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]')
  if (!counters.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = parseInt(el.dataset.target, 10)
      const suffix = el.dataset.suffix || '+'
      const duration = 2000
      const start = performance.now()

      function tick(now) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * target)
        el.textContent = current.toLocaleString() + (progress >= 1 ? suffix : '')
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.unobserve(el)
    })
  }, { threshold: 0.5 })

  counters.forEach(c => observer.observe(c))
}