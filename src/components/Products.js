import { icon } from '../utils/icons.js'

export default function Products() {
  const riceProducts = [
    { title:'Basmati Rice', desc:'Long-grain aromatic rice with superior elongation and exquisite fragrance, prized in global markets.', tags:['Long Grain','Aromatic','Premium'], img:'images/basmati-rice.png' },
    { title:'Sona Masoori', desc:'Lightweight, aromatic medium-grain rice ideal for daily consumption and international export.', tags:['Medium Grain','Lightweight','Popular'], img:'images/sona-masoori.png' },
    { title:'Kolam Rice', desc:'Short-grain rice known for its softness, easy digestion, and suitability for everyday cooking.', tags:['Short Grain','Soft','Daily Use'], img:'images/kolam-rice.png' },
    { title:'Brown Rice', desc:'Nutrient-rich whole-grain option with high fiber content and excellent health benefits.', tags:['Whole Grain','High Fiber','Healthy'], img:'images/brown-rice.png' },
    { title:'Parimal Rice', desc:'Economical aromatic rice delivering excellent cooking results with natural aroma.', tags:['Aromatic','Economical','Versatile'], img:'images/parimal-rice.png' },
    { title:'Red Rice', desc:'Nutrient-dense premium variety with unique flavor profile and antioxidant properties.', tags:['Nutrient Dense','Antioxidant','Premium'], img:'images/red-rice.png' },
  ]

  const feedProducts = [
    { title:'DL-Methionine 99%', desc:'Essential amino acid feed additive for poultry and livestock. Enhances growth performance, feather development, and feed conversion efficiency.', tags:['Amino Acid','99% Purity','Poultry'], img:'images/dl-methionine.png' },
    { title:'Lysine HCL 98.5%', desc:'High-purity L-Lysine hydrochloride for animal nutrition. Supports muscle growth, immune function, and optimal protein synthesis in feed formulations.', tags:['Amino Acid','98.5% Purity','Feed Grade'], img:'images/lysine-hcl.png' },
    { title:'Threonine 98.5%', desc:'Essential amino acid for balanced animal feed. Improves gut health, nutrient absorption, and overall growth performance in poultry and swine.', tags:['Amino Acid','98.5% Purity','Livestock'], img:'images/threonine.png' },
    { title:'Choline Chloride 60%', desc:'Corn cob base choline chloride for animal feed. Essential for liver function, fat metabolism, and nervous system development in poultry and livestock.', tags:['Corn Cob Base','60% Purity','Vitamin B4'], img:'images/choline-chloride.png' },
    { title:'MCP 22%', desc:'Monocalcium Phosphate feed grade — a highly bioavailable source of phosphorus and calcium for poultry, swine, and aquaculture feed formulations.', tags:['Phosphate','22% P','Mineral'], img:'images/mcp-phosphate.png' },
    { title:'Magnesium Oxide 85%', desc:'High-grade magnesium oxide for animal feed supplementation. Supports bone development, enzyme activation, and metabolic processes in livestock.', tags:['Mineral','85% MgO','Feed Grade'], img:'images/magnesium-oxide.png' },
  ]

  const s = document.createElement('section')
  s.id = 'products'
  s.className = 'section container'
  s.innerHTML = `
    <div class="section-header">
      <div class="section-label">Our Products</div>
      <h2>Premium Agriculture <span class="accent">Products</span></h2>
      <p class="section-subtitle">Carefully sourced and processed for global export — from premium Indian rice to high-quality animal feed additives.</p>
    </div>

    <div class="product-tabs" id="product-tabs">
      <button class="tab-btn active" data-tab="rice">
        ${icon('wheat', 18)}
        <span class="tab-text">Premium Rice</span>
      </button>
      <button class="tab-btn" data-tab="feed">
        ${icon('flask', 18)}
        <span class="tab-text">Feed Additives</span>
      </button>
    </div>

    <div class="tab-content" id="tab-rice">
      <div class="cards stagger-children">
        ${riceProducts.map(p => `
          <article class="card reveal" data-product="${p.title.toLowerCase()}">
            <div class="card-image">
              <img src="${p.img}" alt="${p.title}" loading="lazy">
            </div>
            <div class="card-body">
              <h4>${p.title}</h4>
              <ul class="card-tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
              <p class="product-desc">${p.desc}</p>
              <span class="card-link">Learn more →</span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>

    <div class="tab-content hidden" id="tab-feed">
      <div class="cards stagger-children">
        ${feedProducts.map(p => `
          <article class="card reveal" data-product="${p.title.toLowerCase()}">
            <div class="card-image">
              <img src="${p.img}" alt="${p.title}" loading="lazy">
            </div>
            <div class="card-body">
              <h4>${p.title}</h4>
              <ul class="card-tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
              <p class="product-desc">${p.desc}</p>
              <span class="card-link">Learn more →</span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `

  setTimeout(() => {
    const tabs = s.querySelectorAll('.tab-btn')
    const ricePanel = s.querySelector('#tab-rice')
    const feedPanel = s.querySelector('#tab-feed')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        tab.classList.add('active')

        const target = tab.dataset.tab
        if (target === 'rice') {
          ricePanel.classList.remove('hidden')
          feedPanel.classList.add('hidden')
        } else {
          feedPanel.classList.remove('hidden')
          ricePanel.classList.add('hidden')
        }

        const cards = s.querySelectorAll(`#tab-${target} .card`)
        cards.forEach((card, i) => {
          card.classList.remove('active')
          setTimeout(() => card.classList.add('active'), i * 80)
        })
      })
    })
  }, 50)

  return s
}