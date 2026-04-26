import { icon } from '../utils/icons.js'

const WEBHOOK_URL = 'https://chat.googleapis.com/v1/spaces/AAQA1kPxNes/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=93NIbDe-TfLz6YUw_MhrvlJbIswPLBPnpG0if7r7eKY'

/**
 * Sends form data to Google Chat Space via webhook
 */
async function sendToGoogleChat(data) {
  const card = {
    cardsV2: [{
      cardId: 'inquiry-card',
      card: {
        header: {
          title: '📩  New Inquiry Received',
          subtitle: `From ${data.name} — ${data.company}`,
          imageUrl: 'https://www.agrinexoverseas.com/images/favicon.png',
          imageType: 'CIRCLE'
        },
        sections: [
          {
            header: '👤  Contact Details',
            collapsible: false,
            widgets: [
              {
                decoratedText: {
                  topLabel: 'Full Name',
                  text: data.name,
                  startIcon: { knownIcon: 'PERSON' }
                }
              },
              {
                decoratedText: {
                  topLabel: 'Company',
                  text: data.company,
                  startIcon: { knownIcon: 'MEMBERSHIP' }
                }
              },
              {
                decoratedText: {
                  topLabel: 'Email',
                  text: data.email,
                  startIcon: { knownIcon: 'EMAIL' }
                }
              },
              {
                decoratedText: {
                  topLabel: 'Country',
                  text: data.country,
                  startIcon: { knownIcon: 'MAP_PIN' }
                }
              }
            ]
          },
          {
            header: '📦  Order Details',
            collapsible: false,
            widgets: [
              {
                decoratedText: {
                  topLabel: 'Product',
                  text: `<b>${data.product}</b>`,
                  startIcon: { knownIcon: 'STORE' }
                }
              },
              {
                decoratedText: {
                  topLabel: 'Quantity',
                  text: data.quantity,
                  startIcon: { knownIcon: 'TICKET' }
                }
              }
            ]
          },
          {
            header: '💬  Message',
            collapsible: false,
            widgets: [
              {
                textParagraph: {
                  text: data.message
                }
              }
            ]
          },
          {
            widgets: [
              {
                decoratedText: {
                  topLabel: 'Submitted At',
                  text: new Date().toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'Asia/Kolkata'
                  }),
                  startIcon: { knownIcon: 'CLOCK' }
                }
              }
            ]
          },
          {
            widgets: [
              {
                buttonList: {
                  buttons: [
                    {
                      text: 'Reply via Email',
                      onClick: {
                        openLink: {
                          url: `mailto:${data.email}?subject=Re: AgriNex Inquiry — ${data.product}&body=Dear ${data.name},%0A%0AThank you for your inquiry about ${data.product}.%0A%0A`
                        }
                      },
                      color: {
                        red: 0.42,
                        green: 0.66,
                        blue: 0.31,
                        alpha: 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }]
  }

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(card)
  })

  if (!response.ok) {
    throw new Error(`Webhook failed: ${response.status}`)
  }
  return response.json()
}

export default function Contact() {
  const s = document.createElement('section')
  s.id = 'contact'
  s.className = 'section section-alt container'
  s.innerHTML = `
    <div class="section-header">
      <div class="section-label">Get In Touch</div>
      <h2>Contact <span class="accent">Us</span></h2>
      <p class="section-subtitle">Ready to place an order or have questions? Send us an inquiry and our team will respond within 24 hours.</p>
    </div>
    <div class="contact-grid">
      <div class="contact-form reveal">
        <form id="inquiry-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="cf-name">Full Name *</label>
              <input type="text" id="cf-name" name="name" placeholder="Your name" required>
              <div class="form-error" id="err-name"></div>
            </div>
            <div class="form-group">
              <label for="cf-company">Company *</label>
              <input type="text" id="cf-company" name="company" placeholder="Company name" required>
              <div class="form-error" id="err-company"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cf-email">Email Address *</label>
              <input type="email" id="cf-email" name="email" placeholder="you@company.com" required>
              <div class="form-error" id="err-email"></div>
            </div>
            <div class="form-group">
              <label for="cf-country">Country *</label>
              <input type="text" id="cf-country" name="country" placeholder="Your country" required>
              <div class="form-error" id="err-country"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cf-product">Product Category *</label>
              <select id="cf-product" name="productType" required>
                <option value="">Select product category</option>
                <optgroup label="Premium Rice">
                  <option>Basmati Rice</option>
                  <option>Sona Masoori</option>
                  <option>Kolam Rice</option>
                  <option>Brown Rice</option>
                  <option>Parimal Rice</option>
                  <option>Red Rice</option>
                </optgroup>
                <optgroup label="Feed Additives">
                  <option>DL-Methionine 99%</option>
                  <option>Lysine HCL 98.5%</option>
                  <option>Threonine 98.5%</option>
                  <option>Choline Chloride 60%</option>
                  <option>MCP 22%</option>
                  <option>Magnesium Oxide 85%</option>
                </optgroup>
                <option>Multiple Products</option>
              </select>
              <div class="form-error" id="err-product"></div>
            </div>
            <div class="form-group">
              <label for="cf-qty">Quantity (MT) *</label>
              <input type="text" id="cf-qty" name="quantity" placeholder="e.g. 10 MT" required>
              <div class="form-error" id="err-qty"></div>
            </div>
          </div>
          <div class="form-group full">
            <label for="cf-message">Message *</label>
            <textarea id="cf-message" name="message" placeholder="Tell us about your requirements..." rows="4" required></textarea>
            <div class="form-error" id="err-message"></div>
          </div>
          <button type="submit" class="form-submit" id="submit-btn">Send Inquiry →</button>
        </form>
        <div class="form-success" id="form-success">
          <div class="success-icon">${icon('checkCircle', 48)}</div>
          <h3>Thank You!</h3>
          <p>Your inquiry has been received. Our team will contact you within 24 hours.</p>
        </div>
      </div>
      <div class="contact-info-side">
        <div class="contact-info-card reveal">
          <h3>AgriNex Overseas</h3>
          <p><strong>${icon('mapPin', 16)} Location</strong><br>Mumbai, Maharashtra, India</p>
          <p><strong>${icon('mail', 16)} Email</strong><br><a href="mailto:marketing@agrinexoverseas.com">marketing@agrinexoverseas.com</a></p>
          <p><strong>${icon('globeLink', 16)} Website</strong><br><a href="https://www.agrinexoverseas.com">www.agrinexoverseas.com</a></p>
        </div>
        <div class="contact-info-card reveal">
          <h3>Quick Facts</h3>
          <p><strong>Minimum Order:</strong> 5 Metric Tons</p>
          <p><strong>Lead Time:</strong> 7–14 Business Days</p>
          <p><strong>Payment Terms:</strong> Negotiable</p>
          <p><strong>Packaging:</strong> Custom & Private Label</p>
        </div>
      </div>
    </div>
  `

  // Form validation & webhook submission
  setTimeout(() => {
    const form = document.getElementById('inquiry-form')
    if (!form) return
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      let valid = true
      const fields = [
        { name: 'name', id: 'err-name', msg: 'Name is required' },
        { name: 'company', id: 'err-company', msg: 'Company is required' },
        { name: 'email', id: 'err-email', msg: 'Valid email is required' },
        { name: 'country', id: 'err-country', msg: 'Country is required' },
        { name: 'productType', id: 'err-product', msg: 'Please select a product' },
        { name: 'quantity', id: 'err-qty', msg: 'Quantity is required' },
        { name: 'message', id: 'err-message', msg: 'Message is required' },
      ]
      fields.forEach(f => {
        const el = form.elements[f.name]
        const errEl = document.getElementById(f.id)
        const val = el?.value?.trim()
        if (!val || (f.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))) {
          errEl.textContent = f.msg
          errEl.classList.add('show')
          el.style.borderColor = '#e74c3c'
          valid = false
        } else {
          errEl.classList.remove('show')
          el.style.borderColor = ''
        }
      })

      if (valid) {
        const submitBtn = document.getElementById('submit-btn')
        submitBtn.disabled = true
        submitBtn.textContent = 'Sending...'

        const formData = {
          name: form.elements.name.value.trim(),
          company: form.elements.company.value.trim(),
          email: form.elements.email.value.trim(),
          country: form.elements.country.value.trim(),
          product: form.elements.productType.value.trim(),
          quantity: form.elements.quantity.value.trim(),
          message: form.elements.message.value.trim(),
        }

        try {
          await sendToGoogleChat(formData)
        } catch (err) {
          console.warn('Webhook notification failed:', err)
        }

        form.style.display = 'none'
        document.getElementById('form-success').classList.add('show')
      }
    })
  }, 100)

  return s
}