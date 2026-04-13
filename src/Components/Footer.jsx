import { Link } from "react-router-dom";
import { 
    FaFacebookF, 
    FaInstagram, 
    FaTwitter, 
    FaYoutube, 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt 
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="text-2xl font-bold text-white">F</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                Estore
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 opacity-90">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        
                        {/* Newsletter */}
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12 pr-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Offers & Discounts", href: "/offers" },
                                { label: "Get Coupon", href: "/coupons" },
                                { label: "Contact Us", href: "/contact" }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link 
                                        to={item.href}
                                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white hover:translate-x-2"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* New Products */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">New Products</h3>
                        <ul className="space-y-3">
                            {[
                                "Woman Cloth",
                                "Fashion Accessories",
                                "Man Accessories",
                                "Rubber made Toys"
                            ].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to="/products"
                                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white hover:translate-x-2"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        <span className="font-medium">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white drop-shadow-lg">Support</h3>
                        <ul className="space-y-4">
                            {[
                                "Frequently Asked Questions",
                                "Terms & Conditions",
                                "Privacy Policy",
                                "Report a Payment Issue"
                            ].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to="/support"
                                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white hover:translate-x-2"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        <span className="font-medium">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-12 mt-12">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        
                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-blue-400 text-xl" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-emerald-400 text-xl" />
                                <span>hello@estore.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                                <span>123 Street, City</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {[
                                { icon: FaFacebookF, color: "from-blue-600 to-blue-700", href: "#" },
                                { icon: FaInstagram, color: "from-pink-500 to-purple-600", href: "#" },
                                { icon: FaTwitter, color: "from-sky-400 to-blue-500", href: "#" },
                                { icon: FaYoutube, color: "from-red-500 to-red-600", href: "#" }
                            ].map(({ icon: Icon, color, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`group p-3 rounded-2xl bg-white/10 backdrop-blur-sm hover:${color} hover:text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-white/20`}
                                >
                                    <Icon className="text-xl group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-sm md:text-base">
                            © 2026 Estore. All rights reserved. Made with ❤️ for awesome shopping experience.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;