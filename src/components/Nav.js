import { icon } from '../utils/icons.js'

export default function Nav() {
  const header = document.createElement('header')
  header.className = 'nav'
  header.innerHTML = `
    <div class="container nav-inner">
      <a class="brand" href="#home">
        <span class="brand-icon">${icon('leaf', 16)}</span>
        AgriNex Overseas
      </a>
      <button id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation">
        <span class="hamburger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </span>
        Menu
      </button>
      <nav id="nav-menu" class="nav-menu">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#quality">Quality</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
        <a href="#contact" class="nav-cta">Get a Quote</a>
      </nav>
    </div>
  `
  const toggle = header.querySelector('#nav-toggle')
  toggle.addEventListener('click', () => {
    const nav = header.querySelector('#nav-menu')
    const expanded = nav.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(expanded))
    const iconEl = toggle.querySelector('.hamburger-icon')
    iconEl.innerHTML = expanded
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
  })
  return header
}