import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";

function ProductLayout({ data: initialData }) {
    const [products, setProducts] = useState(initialData || []);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || "Mobile Phones";
    const { inCart, addItem } = useCart();

    // Simulate loading if no data
    useEffect(() => {
        if (!initialData || initialData.length === 0) {
            setLoading(true);
            // You can fetch from API here
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            setProducts(initialData);
        }
    }, [initialData]);

    const handleAddToCart = (item) => {
        addItem(item);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 font-semibold">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100">
                {/* Navbars */}
                <Navbar />
                <Navbar2 />

                {/* Category Header */}
                <section className="pt-32 pb-20 bg-gradient-to-b from-white/80 via-blue-50/50 to-indigo-100/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 drop-shadow-3xl leading-tight">
                            {category}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
                            Discover the best {category.toLowerCase()} with amazing deals and fast delivery
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Filter Bar - Optional */}
                        <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
                            {["All", "New", "Popular", "Discounted"].map((filter) => (
                                <button
                                    key={filter}
                                    className={`px-6 py-3 rounded-2xl font-semibold text-sm md:text-base shadow-lg transition-all duration-300 ${
                                        filter === "New"
                                            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/50 hover:shadow-emerald-600/60 hover:scale-105"
                                            : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200 hover:border-blue-200 hover:shadow-blue-200/50"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Products */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
                            {products.map((item) => {
                                const firstImage = Array.isArray(item.images) ? item.images[0] : item.images;
                                
                                return (
                                    <div
                                        key={item.id || item._id}
                                        className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:bg-white transition-all duration-700 overflow-hidden border border-white/70 hover:border-blue-200 hover:shadow-blue-200/50"
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100/50 to-blue-50/30">
                                            <img
                                                src={firstImage}
                                                alt={item.title || item.Title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.target.src = "https://via.placeholder.com/350x350?text=No+Image";
                                                }}
                                            />
                                            {/* Discount Badge */}
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm">
                                                -25%
                                            </div>
                                            {/* Quick Actions */}
                                            <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center">
                                                    <i className="fa-solid fa-heart text-red-500 text-sm"></i>
                                                </button>
                                                <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                                                    <i className="fa-solid fa-eye text-xs"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                                                    {item.title || item.Title}
                                                </h3>
                                                
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-500 capitalize font-medium">
                                                        {item.category || item.catagory}
                                                    </span>
                                                    <div className="text-right">
                                                        <span className="text-2xl md:text-3xl font-black text-gray-900 block">
                                                            ${item.price || item.Rate}
                                                        </span>
                                                        <span className="text-sm text-gray-400 line-through">
                                                            ${((item.price || item.Rate) * 1.25).toFixed(0)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Buttons */}
                                                <div className="flex gap-3 pt-4">
                                                    {inCart(item.id || item._id) ? (
                                                        <button className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-sm flex items-center justify-center gap-2">
                                                            <i className="fa-solid fa-check text-sm"></i>
                                                            Added
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleAddToCart(item)}
                                                            className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-sm flex items-center justify-center gap-2"
                                                        >
                                                            <i className="fa-solid fa-cart-shopping text-sm"></i>
                                                            Add to Cart
                                                        </button>
                                                    )}
                                                    
                                                    <Link
                                                        to={`/More2?id=${item.id || item._id}`}
                                                        className="flex-1 py-3 px-6 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-sm border border-gray-200 flex items-center justify-center gap-2"
                                                    >
                                                        <i className="fa-solid fa-info-circle text-sm"></i>
                                                        Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* No Products */}
                        {(!products || products.length === 0) && !loading && (
                            <div className="col-span-full text-center py-32">
                                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center shadow-xl">
                                    <i className="fa-solid fa-boxes-stacked text-4xl text-gray-500"></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-700 mb-4">No Products Found</h3>
                                <p className="text-xl text-gray-500 mb-8">Try adjusting your search or filters</p>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                    Browse All Products
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProductLayout;