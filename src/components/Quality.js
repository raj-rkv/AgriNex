import { icon } from '../utils/icons.js'

export default function Quality() {
  const s = document.createElement('section')
  s.id = 'quality'
  s.className = 'section section-alt container'
  s.innerHTML = `
    <div class="section-header">
      <div class="section-label">Quality & Trust</div>
      <h2>Certifications & <span class="accent">Standards</span></h2>
      <p class="section-subtitle">We comply with international quality and food safety standards at every stage — from sourcing to export.</p>
    </div>

    <div class="cert-cards stagger-children">
      <div class="cert-card reveal">
        <div class="cert-icon">${icon('award', 32)}</div>
        <h4>ISO Certified</h4>
        <p>International quality management systems ensuring consistent product excellence.</p>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">${icon('clipboard', 32)}</div>
        <h4>APEDA Registered</h4>
        <p>Authorized agricultural and processed food exporter under Government of India.</p>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">${icon('shieldCheck', 32)}</div>
        <h4>FSSAI Approved</h4>
        <p>Full compliance with India's Food Safety and Standards Authority regulations.</p>
      </div>
    </div>

    <h3>Export Markets</h3>
    <div class="markets-strip">
      <span class="market-tag">${icon('globe', 16)} Middle East</span>
      <span class="market-tag">${icon('globe', 16)} Africa</span>
      <span class="market-tag">${icon('globe', 16)} Europe</span>
      <span class="market-tag">${icon('globe', 16)} Asia</span>
      <span class="market-tag">${icon('globe', 16)} North America</span>
      <span class="market-tag">${icon('globe', 16)} South America</span>
    </div>

    <h3>Why Choose AgriNex Overseas?</h3>
    <div class="why-grid stagger-children">
      <div class="why-item reveal">
        <div class="why-icon">${icon('wheat', 20)}</div>
        <div>
          <h4>Premium Sourcing</h4>
          <p>Direct partnerships with trusted farms and certified manufacturers across India.</p>
        </div>
      </div>
      <div class="why-item reveal">
        <div class="why-icon">${icon('dollarSign', 20)}</div>
        <div>
          <h4>Competitive Pricing</h4>
          <p>Transparent quotations with competitive export pricing for bulk orders.</p>
        </div>
      </div>
      <div class="why-item reveal">
        <div class="why-icon">${icon('search', 20)}</div>
        <div>
          <h4>Quality Control</h4>
          <p>Multi-stage quality inspection for all products — rice, feed additives, and minerals.</p>
        </div>
      </div>
      <div class="why-item reveal">
        <div class="why-icon">${icon('package', 20)}</div>
        <div>
          <h4>Custom Packaging</h4>
          <p>Hygienic, moisture-proof packaging with private labeling options available.</p>
        </div>
      </div>
      <div class="why-item reveal">
        <div class="why-icon">${icon('ship', 20)}</div>
        <div>
          <h4>Global Logistics</h4>
          <p>Coordinated shipping with full documentation and real-time tracking.</p>
        </div>
      </div>
      <div class="why-item reveal">
        <div class="why-icon">${icon('handshake', 20)}</div>
        <div>
          <h4>Dedicated Support</h4>
          <p>Responsive communication and dedicated account management for every buyer.</p>
        </div>
      </div>
    </div>
  `
  return s
}