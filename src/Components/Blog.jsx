import { Link } from 'react-router-dom';
import Image1 from './image/single_blog_1.png.webp';
import Image2 from './image/single_blog_2.png.webp';
import Image3 from './image/single_blog_3.png.webp';
import Image4 from './image/single_blog_4.png.webp';
import Image5 from './image/single_blog_5.png.webp';
import Post1 from './image/post_1.png.webp';
import Post2 from './image/post_2.png.webp';
import Post3 from './image/post_3.png.webp';
import Post4 from './image/post_4.png.webp';
import post5 from './image/post_5.png.webp';
import post6 from './image/post_6.png.webp';
import post7 from './image/post_7.png.webp';
import post8 from './image/post_8.png.webp';
import post9 from './image/post_9.png.webp';
import post10 from './image/post_10.png.webp';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';

function Blog() {
    const blogPosts = [
        { image: Image1, date: "15 Jan", title: "Google inks pact for new 35-storey office", category: "Travel.Lifestyle", comments: "03 comments" },
        { image: Image2, date: "15 Jan", title: "Google inks pact for new 35-storey office", category: "Travel.Lifestyle", comments: "03 comments" },
        { image: Image3, date: "15 Jan", title: "Google inks pact for new 35-storey office", category: "Travel.Lifestyle", comments: "03 comments" },
        { image: Image4, date: "15 Jan", title: "Google inks pact for new 35-storey office", category: "Travel.Lifestyle", comments: "03 comments" },
        { image: Image5, date: "15 Jan", title: "Google inks pact for new 35-storey office", category: "Travel.Lifestyle", comments: "03 comments" },
    ];

    const recentPosts = [
        { image: Post1, title: "From life was you fish...", date: "January 12, 2019" },
        { image: Post2, title: "From life was you fish...", date: "02 Hours ago" },
        { image: Post3, title: "Astronomy Or Astrology", date: "03 Hours ago" },
        { image: Post4, title: "Asteroids telescope", date: "01 Hours ago" },
    ];

    const categories = [
        "Resaurant food(37)",
        "Travel news(10)",
        "Modern technology(03)",
        "Product(11)",
        "Inspiration(21)",
        "Health Care(21)"
    ];

    const tags = ["project", "Love", "technology", "travel", "restaurant", "life style", "design", "illustration"];

    const instagramPosts = [post5, post6, post7, post8, post9, post10];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100">
            {/* Navbars */}
            <Navbar />
            <Navbar2 />

            {/* Hero */}
            <section className="pt-32 pb-24 bg-gradient-to-b from-white/80 to-blue-50/70 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 drop-shadow-3xl leading-tight">
                        Blog<span className="text-blue-500">.</span>
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-12 lg:-mt-16">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                    
                    {/* Blog Posts - Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 overflow-hidden border border-white/60 hover:border-blue-200">
                                
                                {/* Featured Image + Date */}
                                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100/50 to-blue-50/50">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Date Badge */}
                                    <div className="absolute top-6 left-6 bg-gradient-to-br from-red-500 to-orange-500 text-white px-4 py-2 rounded-2xl font-bold shadow-2xl backdrop-blur-sm border border-white/30">
                                        <span className="text-sm md:text-base">{post.date}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 lg:p-12">
                                    <div className="flex items-center gap-4 mb-6 text-sm md:text-base">
                                        <Link to="/blog/category" className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 font-semibold rounded-2xl backdrop-blur-sm hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 border border-emerald-500/30">
                                            <i className="fa-solid fa-user text-xs"></i>
                                            <span>Travel.Lifestyle</span>
                                        </Link>
                                        <span className="text-gray-400">|</span>
                                        <Link to="/blog/post" className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 font-semibold transition-colors">
                                            <i className="fa-solid fa-comments text-sm"></i>
                                            <span>{post.comments}</span>
                                        </Link>
                                    </div>

                                    <Link to={`/blog/post/${index}`}>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight hover:text-blue-600 transition-colors group-hover:translate-y-[-2px] line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl line-clamp-3 mb-8 opacity-90">
                                        That dominion stars lights dominion divide years for fourth have don't stars is that 
                                        he earth it first without heaven in place seed it second morning saying.
                                    </p>

                                    <Link 
                                        to={`/blog/post/${index}`}
                                        className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group/link transition-all duration-300"
                                    >
                                        Read More
                                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 lg:sticky lg:top-24 lg:h-screen lg:overflow-y-auto">
                        
                        {/* Search */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/60">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Search</h3>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search Keyword"
                                    className="w-full pl-12 pr-32 py-4 bg-gradient-to-r from-gray-100 to-blue-50 rounded-2xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/50 transition-all duration-300 text-lg shadow-inner"
                                />
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap text-sm">
                                    SEARCH
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/60">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Category</h3>
                            <ul className="space-y-3">
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <Link 
                                            to="/blog/category"
                                            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 text-gray-700 hover:text-blue-600 font-medium hover:translate-x-2"
                                        >
                                            <span>{category}</span>
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/60">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Post</h3>
                            <div className="space-y-4">
                                {recentPosts.map((post, index) => (
                                    <Link key={index} to="/blog/recent" className="group flex gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-300 hover:shadow-lg">
                                        <img 
                                            src={post.image} 
                                            alt={post.title}
                                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors mb-1">
                                                {post.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">{post.date}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Tag Cloud */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/60">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Tag Clouds</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <Link 
                                        key={index}
                                        to={`/blog/tag/${tag}`}
                                        className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/40 hover:to-purple-500/40 text-indigo-700 hover:text-indigo-600 font-medium rounded-xl transition-all duration-300 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-md text-sm"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/60">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Instagram Feeds</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {instagramPosts.map((post, index) => (
                                    <a key={index} href="#" className="group block aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-400">
                                        <img 
                                            src={post} 
                                            alt="Instagram post"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-emerald-500/30">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Newsletter</h3>
                            <div className="space-y-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter email"
                                    className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 text-lg shadow-inner"
                                />
                                <button className="w-full py-4 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg uppercase tracking-wide">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Blog;