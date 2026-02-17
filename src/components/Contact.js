export default function Contact() {
  const s = document.createElement('section')
  s.id = 'contact'
  s.className = 'section container contact'
  s.innerHTML = `
    <h2>Contact Us</h2>
    <div class="contact-info-static">
      <div class="contact-info-card">
        <h3>AgriNex Overseas</h3>
        <p class="contact-location"><strong>📍 Location:</strong> Mumbai, Maharashtra, India</p>
        <p class="contact-detail"><strong>📧 Email:</strong> <a href="mailto:marketing@agrinexoverseas.com">marketing@agrinexoverseas.com</a></p>
        <p class="contact-detail"><strong>📱 Mobile:</strong> <a href="tel:+919929030015">+91 99290 30015</a></p>
      </div>
      <div class="contact-info-card">
        <h3>International Inquiries</h3>
        <p>For bulk orders and export inquiries, please contact our sales team via email or phone.</p>
        <p class="contact-detail"><strong>Bulk Orders:</strong> Minimum 5MT</p>
        <p class="contact-detail"><strong>Lead Time:</strong> 7-14 days</p>
        <p class="contact-detail"><strong>Payment Terms:</strong> Negotiable</p>
      </div>
    </div>
  `
  return s
}