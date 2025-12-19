
class ProductViewer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Product';
    const description = this.getAttribute('description') || 'No description available';
    const image = this.getAttribute('image') || 'http://static.photos/industry/640x360';
    
    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        .product-image-container {
          height: 200px;
          overflow: hidden;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-content {
          padding: 1rem;
        }
        .product-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #2563eb;
        }
        .product-description {
          color: #4b5563;
          margin-bottom: 1rem;
        }
        .see-more {
          color: #2563eb;
          font-weight: 600;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .see-more:hover {
          color: #1d4ed8;
        }
        .full-description {
          display: none;
          padding-top: 0.5rem;
          color: #4b5563;
        }
        .expanded .full-description {
          display: block;
        }
        .expanded .see-more i {
          transform: rotate(90deg);
        }
      </style>
      <div class="product-card">
        <div class="product-image-container">
          <img src="${image}" alt="${title}" class="product-image">
        </div>
        <div class="product-content">
          <h3 class="product-title">${title}</h3>
          <p class="product-description">${description}</p>
          <div class="full-description">
            <p>${this.getAttribute('full-description') || 'More detailed information about this product will be shown here.'}</p>
          </div>
          <div class="see-more" id="toggleBtn">
            See more <i data-feather="chevron-down" class="ml-2 w-4 h-4 transition-transform"></i>
          </div>
</div>
      </div>
    `;
    feather.replace();
    
    const toggleBtn = this.shadowRoot.getElementById('toggleBtn');
    const productCard = this.shadowRoot.querySelector('.product-card');
    
    toggleBtn.addEventListener('click', () => {
      productCard.classList.toggle('expanded');
    });
}
}
customElements.define('product-viewer', ProductViewer);