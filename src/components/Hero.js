export default function Hero() {
  const section = document.createElement('section')
  section.id = 'home'
  section.className = 'hero container'
  section.innerHTML = `
    <div class="hero-left">
      <h1>Trusted Exporter of <span>Premium Indian Rice</span></h1>
      <p class="lead">AgriNex Overseas delivers authentic taste, consistent quality and reliable supply of premium Indian rice to global markets.</p>
      <div class="cta">
        <a class="btn primary" href="#products">View Our Products</a>
        <a class="btn ghost" href="#contact">Request a Quote</a>
      </div>
      <ul class="facts">
        <li><strong>ISO Certified</strong> · APEDA Registered · FSSAI Approved</li>
        <li>Export Markets: Middle East · Africa · Europe · Asia</li>
      </ul>
    </div>
    <aside class="hero-card">
      <h3>Bulk supply & private labeling</h3>
      <p>Customized packaging, strict quality control, and timely global delivery.</p>
      <dl>
        <dt>Email</dt><dd><a href="mailto:Info@AgriNex.com">Info@AgriNex.com</a></dd>
        <dt>Mobile</dt><dd><a href="tel:+919929030015">+91 99290 30015</a></dd>
      </dl>
    </aside>
  `
  return section
}