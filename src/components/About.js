export default function About() {
  const s = document.createElement('section')
  s.id = 'about'
  s.className = 'section container about'
  s.innerHTML = `
    <h2>About Us</h2>
    <p>Based in <strong>Mumbai, Maharashtra</strong>, AgriNex Overseas is a professionally managed rice export company specializing in premium Indian rice varieties. We leverage a strong sourcing network, modern processing practices, and strict quality inspections to ensure every shipment meets global expectations.</p>
    <div class="about-grid">
      <div>
        <h3>Our Mission</h3>
        <p>Deliver premium Indian rice to global markets with trust, quality, and integrity. We believe in building long-term relationships with our buyers through transparency and reliability.</p>
      </div>
      <div>
        <h3>Our Vision</h3>
        <p>Become a globally recognized rice export brand from India, known for excellence, innovation, and customer-centric solutions in international markets.</p>
      </div>
    </div>
  `
  return s
}