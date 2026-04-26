import { icon } from '../utils/icons.js'

export default function Footer() {
  const footer = document.createElement('footer')
  footer.className = 'site-footer'
  footer.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          ${icon('leaf', 18)} AgriNex Overseas
        </div>
        <p class="footer-desc">Professionally managed agriculture export company from Mumbai, India — delivering premium quality Indian rice, feed additives, and agriculture products to global markets with trust and integrity.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#quality">Quality</a></li>
          <li><a href="#process">Export Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Products</h4>
        <ul class="footer-links">
          <li><a href="#products">Basmati Rice</a></li>
          <li><a href="#products">Sona Masoori</a></li>
          <li><a href="#products">DL-Methionine 99%</a></li>
          <li><a href="#products">Lysine HCL 98.5%</a></li>
          <li><a href="#products">Choline Chloride 60%</a></li>
          <li><a href="#products">MCP 22%</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul class="footer-links">
          <li>${icon('mapPin', 14)} Mumbai, Maharashtra, India</li>
          <li><a href="mailto:marketing@agrinexoverseas.com">${icon('mail', 14)} marketing@agrinexoverseas.com</a></li>
          <li><a href="https://www.agrinexoverseas.com">${icon('globeLink', 14)} www.agrinexoverseas.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom container">
      <span>© ${new Date().getFullYear()} AgriNex Overseas. All rights reserved.</span>
      <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to top</button>
    </div>
  `
  return footer
}
