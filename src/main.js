import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Products from './components/Products.js'
import Quality from './components/Quality.js'
import Process from './components/Process.js'
import Contact from './components/Contact.js'
import { enableSmoothScroll, enableScrollAnimations } from './utils/dom.js'

const app = document.getElementById('app')

// Compose layout
app.appendChild(Nav())
const main = document.createElement('main')
main.className = 'main'
main.appendChild(Hero())
main.appendChild(About())
main.appendChild(Products())
main.appendChild(Quality())
main.appendChild(Process())
main.appendChild(Contact())
app.appendChild(main)

// footer
const footer = document.createElement('footer')
footer.className = 'site-footer'
footer.innerHTML = `© ${new Date().getFullYear()} AgriNex Overseas — Mumbai, India • <a href="mailto:marketing@agrinexoverseas.com">marketing@agrinexoverseas.com</a>`
app.appendChild(footer)

// interactions
enableSmoothScroll()
enableScrollAnimations()