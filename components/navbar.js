class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    transition: all 0.3s ease;
                }
                .navbar.scrolled {
                    background-color: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .nav-link {
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #2563eb;
transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .mobile-menu {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                }
                .mobile-menu.open {
                    max-height: 500px;
                }
            </style>
                    
                    <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                
                <div id="mobile-menu" class="mobile-menu md:hidden">
                    <div class="pt-4 pb-2 space-y-3">
                        <a href="#about" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About</a>
                        <a href="#products" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Products</a>
                        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</a>
                    </div>
                </div>
            </nav>
            
            <script>
                feather.replace();
                
                // Mobile menu toggle
                const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
                const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
                
                menuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('open');
                    const icon = menuButton.querySelector('i');
                    if (mobileMenu.classList.contains('open')) {
                        icon.setAttribute('data-feather', 'x');
                    } else {
                        icon.setAttribute('data-feather', 'menu');
                    }
                    feather.replace();
                });
                
                // Change navbar style on scroll
                const navbar = this.shadowRoot.querySelector('.navbar');
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                        navbar.classList.remove('bg-transparent');
                        navbar.classList.add('bg-white');
                    } else {
                        navbar.classList.remove('scrolled');
                        if (window.innerWidth >= 768) {
                            navbar.classList.add('bg-transparent');
                            navbar.classList.remove('bg-white');
                        }
                    }
                });
            </script>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
