import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import Stats from './components/Stats.js'
import About from './components/About.js'
import Products from './components/Products.js'
import Quality from './components/Quality.js'
import Process from './components/Process.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import { enableSmoothScroll, enableScrollAnimations, enableNavScroll, enableCounters } from './utils/dom.js'

const app = document.getElementById('app')

// Compose layout
app.appendChild(Nav())
app.appendChild(Hero())
app.appendChild(Stats())

const main = document.createElement('main')
main.className = 'main'
main.appendChild(About())
main.appendChild(Products())
main.appendChild(Quality())
main.appendChild(Process())
main.appendChild(Contact())
app.appendChild(main)

app.appendChild(Footer())

// Interactions
enableSmoothScroll()
enableScrollAnimations()
enableNavScroll()
enableCounters()