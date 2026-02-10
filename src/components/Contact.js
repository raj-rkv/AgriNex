import { validateContact } from '../utils/dom.js'

export default function Contact() {
  const s = document.createElement('section')
  s.id = 'contact'
  s.className = 'section container contact'
  s.innerHTML = `
    <h2>Contact Us</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <p class="contact-company"><strong>AgriNex Overseas</strong></p>
        <p class="contact-location">Mumbai, Maharashtra, India</p>
        <p class="contact-section"><strong>Email</strong></p>
        <p class="contact-detail"><a href="mailto:Info@AgriNex.com">Info@AgriNex.com</a></p>
        <p class="contact-section"><strong>Mobile</strong></p>
        <p class="contact-detail"><a href="tel:+919929030015">+91 99290 30015</a></p>
      </div>
      <form id="contactForm" class="contact-form" novalidate>
        <label><span>Name</span><input type="text" name="name" placeholder="Your full name" required/></label>
        <label><span>Company</span><input type="text" name="company" placeholder="Company name" required/></label>
        <label><span>Country</span><input type="text" name="country" placeholder="Country" required/></label>
        <label><span>Rice Type</span><input type="text" name="riceType" placeholder="e.g. Basmati / Sona Masoori" required/></label>
        <label><span>Quantity</span><input type="text" name="quantity" placeholder="e.g. 10 MT / 1000 bags" required/></label>
        <label><span>Message</span><textarea name="message" rows="4" placeholder="Additional details or requirements" required></textarea></label>
        <div class="form-actions">
          <button type="submit" class="btn primary">Send Inquiry</button>
        </div>
        <div id="formFeedback" class="form-feedback" aria-live="polite"></div>
      </form>
    </div>
  `
  // form handling
  const form = s.querySelector('#contactForm')
  const feedback = s.querySelector('#formFeedback')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const fd = new FormData(form)
    const errors = validateContact(fd)
    if (errors.length) {
      feedback.textContent = errors.join('; ')
      feedback.classList.add('error')
      return
    }
    // simulate submit
    feedback.classList.remove('error')
    feedback.textContent = 'Sending…'
    setTimeout(() => {
      feedback.textContent = 'Inquiry sent successfully! We will contact you shortly.'
      form.reset()
    }, 800)
  })
  return s
}