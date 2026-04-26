import { icon } from '../utils/icons.js'

export default function About() {
  const s = document.createElement('section')
  s.id = 'about'
  s.className = 'section section-alt container'
  s.innerHTML = `
    <div class="section-header">
      <div class="section-label">About Us</div>
      <h2>Delivering <span class="accent">Excellence</span> Across Agriculture</h2>
    </div>
    <p class="about-intro">Based in <strong>Mumbai, Maharashtra</strong>, AgriNex Overseas is a professionally managed agriculture export company specializing in premium Indian rice varieties and high-quality animal feed additives. We leverage a strong sourcing network, modern processing practices, and strict quality inspections to ensure every shipment meets global expectations.</p>
    <div class="about-grid">
      <div class="about-card reveal">
        <div class="about-card-icon">${icon('target', 24)}</div>
        <h3>Our Mission</h3>
        <p>Deliver premium agriculture products to global markets with trust, quality, and integrity. We believe in building long-term relationships with our buyers through transparency and reliability.</p>
      </div>
      <div class="about-card reveal">
        <div class="about-card-icon">${icon('telescope', 24)}</div>
        <h3>Our Vision</h3>
        <p>Become a globally recognized agriculture export brand from India, known for excellence in rice, feed additives, and innovative customer-centric solutions in international markets.</p>
      </div>
    </div>
  `
  return s
}