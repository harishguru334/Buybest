import { useState } from "react";
import image1 from "./image/gallery1.jpg.webp";
import image2 from "./image/gallery2.jpg.webp";
import image3 from "./image/gallery3.jpg.webp";
import image4 from "./image/gallery4.jpg.webp";
import image5 from "./image/gallery5.jpg.webp";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus("Message sent successfully! We'll get back to you soon. 🎉");
        setTimeout(() => setStatus(""), 5000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: "fa-solid fa-house",
            title: "Visit Us",
            details: ["Buttonwood, California.", "Rosemead, CA 91770"]
        },
        {
            icon: "fa-solid fa-mobile-screen-button",
            title: "Call Us",
            details: ["+1 253 565 2365", "Mon to Fri 9am to 6pm"]
        },
        {
            icon: "fa-solid fa-envelope",
            title: "Email Us",
            details: ["support@Fashe.com", "Send us your query anytime!"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100 overflow-hidden">
            {/* Navbars */}
            <Navbar />
            <Navbar2 />

            {/* Hero */}
            <section className="pt-32 pb-24 bg-gradient-to-b from-white/90 via-blue-50/70 to-indigo-100/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 drop-shadow-4xl leading-tight">
                        Contact<span className="text-blue-500 font-normal">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed opacity-95">
                        Got a question? We'd love to hear from you. Get in touch with us today!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative -mt-16 lg:-mt-24 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Contact Form */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/70 hover:shadow-3xl transition-all duration-500">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-5 text-lg bg-gradient-to-r from-gray-50/80 to-blue-50/50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                                        required
                                    />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="px-6 py-5 text-lg bg-gradient-to-r from-gray-50/80 to-blue-50/50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="px-6 py-5 text-lg bg-gradient-to-r from-gray-50/80 to-blue-50/50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                                    />
                                </div>
                                
                                <textarea
                                    name="message"
                                    placeholder="Enter Message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-6 py-5 text-lg bg-gradient-to-r from-gray-50/80 to-blue-50/50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm resize-vertical"
                                    required
                                ></textarea>
                                
                                <button
                                    type="submit"
                                    className="w-full py-6 px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-black text-lg rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-3"
                                >
                                    <i className="fa-solid fa-paper-plane text-xl"></i>
                                    Send Message
                                </button>
                            </form>

                            {status && (
                                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 rounded-2xl backdrop-blur-sm text-emerald-800 font-semibold text-center animate-pulse">
                                    {status}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border border-white/70 hover:border-blue-200">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 p-3 group-hover:scale-110 transition-all duration-400">
                                        <i className={`${info.icon} text-2xl text-white font-bold`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {info.title}
                                        </h3>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-lg text-gray-700 leading-relaxed group-hover:translate-x-2 transition-transform">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <section className="py-24 bg-gradient-to-t from-gray-900/20 via-slate-900/10 to-black/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl">
                        Our Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {[image1, image2, image3, image4, image5].map((img, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                                <img 
                                    src={img} 
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                                    <div className="text-white">
                                        <h4 className="font-bold text-xl mb-1 drop-shadow-lg">Gallery #{index + 1}</h4>
                                        <p className="text-sm opacity-90">Amazing moments</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;