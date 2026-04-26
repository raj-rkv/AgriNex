import { icon } from '../utils/icons.js'

export default function Hero() {
  const section = document.createElement('section')
  section.id = 'home'
  section.className = 'hero-section'
  section.innerHTML = `
    <div class="hero-bg" style="background-image:url('./images/hero-bg.png')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-left">
        <h1>Trusted Exporter of <span class="highlight">Premium Agriculture Products</span></h1>
        <p class="hero-lead">AgriNex Overseas delivers premium Indian rice, animal feed additives, and agricultural products to buyers across 25+ countries worldwide — with consistent quality and reliable supply.</p>
        <ul class="hero-badges">
          <li>${icon('award', 16)} ISO Certified</li>
          <li>${icon('clipboard', 16)} APEDA Registered</li>
          <li>${icon('shieldCheck', 16)} FSSAI Approved</li>
          <li>${icon('globe', 16)} Global Export</li>
        </ul>
        <div class="hero-cta">
          <a class="btn primary" href="#products">Explore Products</a>
          <a class="btn ghost" href="#contact">Request a Quote →</a>
        </div>
      </div>
      <div class="hero-right">
        <aside class="hero-card">
          <h3>Bulk Supply & Private Labeling</h3>
          <p>Customized packaging, strict quality control, and timely global delivery for all our product lines — rice, feed additives, and more.</p>
          <dl>
            <dt>Email</dt>
            <dd><a href="mailto:marketing@agrinexoverseas.com">marketing@agrinexoverseas.com</a></dd>
            <dt>Minimum Order</dt>
            <dd>5 Metric Tons</dd>
            <dt>Lead Time</dt>
            <dd>7–14 Business Days</dd>
          </dl>
        </aside>
      </div>
    </div>
  `
  return section
}