export function enableSmoothScroll() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href').slice(1)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

export function enableScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.section, .card, .about-grid > div').forEach((el) => {
    el.classList.add('reveal')
    observer.observe(el)
  })
}

export function validateContact(formData) {
  const errors = []
  if (!formData.get('name')?.trim()) errors.push('Name is required')
  if (!formData.get('company')?.trim()) errors.push('Company is required')
  if (!formData.get('country')?.trim()) errors.push('Country is required')
  if (!formData.get('riceType')?.trim()) errors.push('Rice type is required')
  if (!formData.get('quantity')?.trim()) errors.push('Quantity is required')
  if (!formData.get('message')?.trim()) errors.push('Message is required')
  return errors
}