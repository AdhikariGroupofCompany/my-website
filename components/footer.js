class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #2563eb;
transform: translateX(5px);
                }
            </style>
            <footer class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">Adhikari Group of Company</h3>
<p class="text-gray-400">Diversified production-driven enterprise committed to quality, innovation, and sustainable growth.</p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="#about" class="footer-link text-gray-400 hover:text-emerald-400 transition duration-300 flex items-center"><i data-feather="chevron-right" class="mr-2 w-4 h-4"></i> About Us</a></li>
                                <li><a href="#products" class="footer-link text-gray-400 hover:text-emerald-400 transition duration-300 flex items-center"><i data-feather="chevron-right" class="mr-2 w-4 h-4"></i> Our Products</a></li>
                                <li><a href="#contact" class="footer-link text-gray-400 hover:text-emerald-400 transition duration-300 flex items-center"><i data-feather="chevron-right" class="mr-2 w-4 h-4"></i> Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Business Sectors</h4>
                            <ul class="space-y-2">
                                <li class="text-gray-400 flex items-center"><i data-feather="box" class="mr-2 w-4 h-4"></i> Plastic Manufacturing</li>
                                <li class="text-gray-400 flex items-center"><i data-feather="tree" class="mr-2 w-4 h-4"></i> Agriculture</li>
                                <li class="text-gray-400 flex items-center"><i data-feather="cpu" class="mr-2 w-4 h-4"></i> Emerging Technologies</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
                            <ul class="space-y-2">
                                <li class="text-gray-400 flex items-start"><i data-feather="map-pin" class="mr-2 mt-1 w-4 h-4"></i> 123 Industrial Park, Kathmandu, Nepal</li>
                                <li class="text-gray-400 flex items-center"><i data-feather="mail" class="mr-2 w-4 h-4"></i> info@adhikarigroup.com</li>
                                <li class="text-gray-400 flex items-center"><i data-feather="phone" class="mr-2 w-4 h-4"></i> +977 1 1234567</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 mb-4 md:mb-0">© ${new Date().getFullYear()} Adhikari Group. All rights reserved.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-300"><i data-feather="facebook"></i></a>
                            <a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-300"><i data-feather="twitter"></i></a>
                            <a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-300"><i data-feather="linkedin"></i></a>
                            <a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-300"><i data-feather="instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <script>
                feather.replace();
            </script>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);