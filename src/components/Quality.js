export default function Quality() {
  const s = document.createElement('section')
  s.id = 'quality'
  s.className = 'section container'
  s.innerHTML = `
    <h2>Quality & Certifications</h2>
    <p>We comply with international quality and food safety standards from sourcing to export.</p>
    <ul class="certs">
      <li>ISO Certified</li>
      <li>APEDA Registered</li>
      <li>FSSAI Approved</li>
    </ul>
    <h3>Export Markets</h3>
    <p>We proudly serve buyers across <strong>Middle East · Africa · Europe · Asia</strong></p>
    <h3>Why Choose AgriNex Overseas?</h3>
    <ul class="why">
      <li>Premium quality rice sourcing from trusted farms</li>
      <li>Competitive export pricing & transparent quotations</li>
      <li>Strict quality control at every stage</li>
      <li>Hygienic & customizable packaging options</li>
      <li>Timely global delivery with full documentation</li>
    </ul>
  `
  return s
}