import { icon } from '../utils/icons.js'

export default function Process() {
  const steps = [
    { icon: 'clipboardList', title:'Inquiry', desc:'Share your product requirements & specifications' },
    { icon: 'microscope', title:'Sourcing & QC', desc:'Premium sourcing with rigorous quality testing' },
    { icon: 'package', title:'Packaging', desc:'Food-safe, customizable, moisture-proof packaging' },
    { icon: 'fileText', title:'Documentation', desc:'Complete export docs & certifications' },
    { icon: 'ship', title:'Shipping', desc:'Coordinated global logistics & dispatch' },
    { icon: 'checkCircle', title:'Delivery', desc:'Guaranteed on-time with full support' },
  ]

  const s = document.createElement('section')
  s.id = 'process'
  s.className = 'section container'
  s.innerHTML = `
    <div class="section-header">
      <div class="section-label">How It Works</div>
      <h2>Our 6-Step <span class="accent">Export Process</span></h2>
      <p class="section-subtitle">From inquiry to delivery — quality and reliability at every step of your order, across all product categories.</p>
    </div>
    <div class="timeline stagger-children">
      ${steps.map((step, i) => `
        <div class="timeline-step reveal">
          <div class="step-circle">
            ${icon(step.icon, 24)}
            <span class="step-num">${i + 1}</span>
          </div>
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      `).join('')}
    </div>
  `
  return s
}