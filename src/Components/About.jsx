import Img1 from './image/about_us_video.png.webp';
import icon1 from './image/feature_icon_1.svg';
import icon2 from './image/feature_icon_2.svg';
import icon3 from './image/feature_icon_3.svg';
import icon4 from './image/feature_icon_1.svg'; // Reuse icon1
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Slide2 from './Slide2';
import Footer from './Footer';

function About() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                {/* Navbars */}
                <Navbar />
                <Navbar2 />

                {/* Hero Section */}
                <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white to-blue-50/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 drop-shadow-2xl leading-tight">
                            About Us
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 opacity-90">
                                Crafting exceptional shopping experiences with passion and innovation
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 lg:py-32 bg-white/80 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            
                            {/* Mission Text */}
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Our Mission
                                    </h3>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                        Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. 
                                        Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                                    </h2>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    We believe in creating seamless shopping experiences that delight our customers. 
                                    From curated collections to lightning-fast delivery, we're redefining e-commerce.
                                </p>
                            </div>

                            {/* Video Thumbnail */}
                            <div className="order-1 lg:order-2 relative group">
                                <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                                    <img 
                                        src={Img1} 
                                        alt="About us video preview"
                                        className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <a 
                                        href="https://youtu.be/DWHB6nTyKDI?si=vXf8jHidj-lDj0h9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="group-hover:scale-110 transition-all duration-300">
                                            <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-2xl flex items-center justify-center mx-auto backdrop-blur-xl border-4 border-white/50 group-hover:shadow-3xl group-hover:scale-110 transition-all duration-400">
                                                <i className="fa-solid fa-play text-3xl md:text-4xl text-gray-900 font-bold ml-2"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Credibly Section */}
                <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight max-w-4xl mx-auto">
                            Credibly innovate granular internal or organic sources whereas standards
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed max-w-3xl mx-auto opacity-95">
                            Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources. 
                            Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {[
                                { icon: icon1, title: "Credit Card Support", desc: "Secure payment processing with all major credit cards" },
                                { icon: icon2, title: "Online Order", desc: "Fast and easy ordering from anywhere, anytime" },
                                { icon: icon3, title: "Free Delivery", desc: "Complimentary shipping on orders over $50" },
                                { icon: icon4, title: "Product with Gift", desc: "Add special gift wrapping and messages" }
                            ].map((feature, index) => (
                                <div key={index} className="group text-center hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl shadow-lg rounded-3xl p-8 bg-gradient-to-b from-white to-blue-50/50 border border-gray-100 hover:border-blue-200">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm">
                                        <img src={feature.icon} alt={feature.title} className="w-10 h-10 filter brightness-0 invert" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Slide2 */}
                <Slide2 />

                {/* Newsletter */}
                <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                                Get promotions & updates!
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90">
                                Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources credibly innovate granular internal.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                                />
                                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap text-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

export default About;