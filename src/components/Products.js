export default function Products() {
  const s = document.createElement('section')
  s.id = 'products'
  s.className = 'section container'
  s.innerHTML = `
    <h2>Our Rice Products</h2>
    <p class="muted">Premium varieties for global export • Bulk supply & private labeling available</p>
    <div class="cards">
      ${productCard('Indrayani AgriNex Rice', 'Aromatic, soft-textured rice widely consumed globally.', ['Medium grain', '5kg, 10kg, 25kg, 50kg'])}
      ${productCard('Sona Masoori — White Gold Rice', 'Lightweight, aromatic rice ideal for daily consumption and export.')}
      ${productCard('Kolam Rice', 'Short-grain rice known for softness, easy digestion, and daily use.')}
      ${productCard('Parimal Rice', 'Economical aromatic rice with excellent cooking results and aroma.')}
      ${productCard('Basmati Rice', 'Long-grain aromatic rice with superior elongation and fragrance.')}
      ${productCard('Non-Basmati & Brown Rice', 'High-demand bulk varieties. Brown rice — nutritious whole-grain option.')}
    </div>
  `
  function productCard(title, desc, specs=[]) {
    return `
      <article class="card" data-product="${title.toLowerCase()}">
        <h4>${title}</h4>
        <p class="product-desc">${desc}</p>
        ${specs.length ? `<ul class="specs">${specs.map(s=>`<li>✓ ${s}</li>`).join('')}</ul>` : ''}
      </article>
    `
  }
  return s
}