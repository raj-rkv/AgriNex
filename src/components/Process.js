export default function Process() {
  const s = document.createElement('section')
  s.id = 'process'
  s.className = 'section container'
  s.innerHTML = `
    <h2>Our 6-Step Export Process</h2>
    <p class="section-subtitle">From selection to delivery — quality and reliability at every step</p>
    <ol class="process-list">
      <li><strong>Product Selection</strong> — Sourcing premium rice from trusted farms</li>
      <li><strong>Quality Inspection</strong> — Rigorous testing for purity and standards</li>
      <li><strong>Hygienic Packaging</strong> — Food-safe, customizable, moisture-proof packaging</li>
      <li><strong>Documentation & Compliance</strong> — Complete export documentation and certifications</li>
      <li><strong>Logistics & Shipping</strong> — Coordinated global logistics and timely dispatch</li>
      <li><strong>On-Time Delivery</strong> — Guaranteed delivery with tracking and support</li>
    </ol>
  `
  return s
}