class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'description', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
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
                    transition: all 0.3s ease;
                }
                .product-image {
                    height: 200px;
                    object-fit: cover;
                }
                .learn-more {
                    transition: all 0.3s ease;
                }
                .learn-more:hover {
                    transform: translateX(5px);
                }
            </style>
            <div class="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src="${image}" alt="${title}" class="product-image w-full">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${title}</h3>
                    <p class="text-gray-600 mb-4">${description}</p>
                    <a href="#contact" class="learn-more text-emerald-600 font-semibold flex items-center">
                        Learn more <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
            </div>
            <script>
                feather.replace();
            </script>
        `;
    }
}

customElements.define('product-card', ProductCard);