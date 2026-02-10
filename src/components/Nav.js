export default function Nav() {
  const header = document.createElement('header')
  header.className = 'nav'
  header.innerHTML = `
    <div class="container nav-inner">
      <a class="brand" href="#home">AgriNex Overseas</a>
      <button id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation">Menu</button>
      <nav id="nav-menu" class="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#process">Export Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `
  // mobile toggle
  const toggle = header.querySelector('#nav-toggle')
  toggle.addEventListener('click', () => {
    const nav = header.querySelector('#nav-menu')
    const expanded = nav.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(expanded))
  })
  return header
}