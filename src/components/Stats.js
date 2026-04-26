import { icon } from '../utils/icons.js'

export default function Stats() {
  const section = document.createElement('section')
  section.className = 'stats-bar'
  section.setAttribute('aria-label', 'Company statistics')
  section.innerHTML = `
    <div class="stats-inner">
      <div class="stat-item reveal">
        <div class="stat-icon">${icon('globe', 28)}</div>
        <div class="stat-number" data-target="25">0</div>
        <div class="stat-label">Countries Served</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-icon">${icon('package', 28)}</div>
        <div class="stat-number" data-target="50">0</div>
        <div class="stat-label">Product Lines</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-icon">${icon('ship', 28)}</div>
        <div class="stat-number" data-target="50000" data-suffix=" MT">0</div>
        <div class="stat-label">Annual Export Capacity</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-icon">${icon('star', 28)}</div>
        <div class="stat-number" data-target="5">0</div>
        <div class="stat-label">Years of Excellence</div>
      </div>
    </div>
  `
  return section
}
