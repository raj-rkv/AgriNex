export default function Products() {
  const s = document.createElement('section')
  s.id = 'products'
  s.className = 'section container'
  s.innerHTML = `
    <h2>Our Rice Products</h2>
    <p class="muted">Premium varieties for global export • Bulk supply & private labeling available</p>
    <div class="cards">
      ${productCard('Basmati Rice', 'Long-grain aromatic rice with superior elongation and fragrance.', [], 'images/basmati-rice.png')}
      ${productCard('Sona Masoori White Gold', 'Lightweight, aromatic rice ideal for daily consumption and export.', [], 'images/sona-masoori.png')}
      ${productCard('Kolam Rice', 'Short-grain rice known for softness, easy digestion, and daily use.', [], 'images/kolam-rice.png')}
      ${productCard('Brown Rice', 'High-demand nutritious whole-grain option with excellent health benefits.', [], 'images/brown-rice.png')}
      ${productCard('Parimal Rice', 'Economical aromatic rice with excellent cooking results and aroma.', [], 'images/parimal-rice.png')}
      ${productCard('Red Rice', 'Nutrient-dense premium variety with unique flavor profile.', [], 'images/red-rice.webp')}
    </div>
  `
  function productCard(title, desc, specs=[], imgSrc='') {
    return `
      <article class="card" data-product="${title.toLowerCase()}">
        ${imgSrc ? `<div class="card-image"><img src="${imgSrc}" alt="${title}" loading="lazy"></div>` : ''}
        <h4>${title}</h4>
        <p class="product-desc">${desc}</p>
        ${specs.length ? `<ul class="specs">${specs.map(s=>`<li>✓ ${s}</li>`).join('')}</ul>` : ''}
      </article>
    `
  }
  return s
}