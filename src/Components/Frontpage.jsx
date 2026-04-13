import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Frontpage() {
    const [Products, setProducts] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");
    const { addItem, inCart } = useCart();

    // Fetch products from your backend
    async function getProducts() {
        try {
            setLoading(true);
            const data = await fetch("https://dummyjson.com/products");
            const jsondata = await data.json();
            setProducts(jsondata.products);
            setFilterData(jsondata.products);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    // Filter by category
    const filterItem = (category) => {
        setActiveFilter(category);
        if (category === "All") {
            setFilterData(Products);
        } else {
            const filtered = Products.filter((item) => item.category === category);
            setFilterData(filtered);
        }
    };

    // Get unique categories
    const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                        Shop by Category
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover amazing products across various categories. Filter and find what you love!
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-20">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => filterItem(category)}
                            className={`px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-sm md:text-base shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === category
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl"
                                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200 hover:border-blue-200"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
                    {filterData.map((item) => {
                        const firstImage = Array.isArray(item.images) ? item.images[0] : item.images;
                        
                        return (
                            <div
                                key={item.id}
                                className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-white/50 hover:border-blue-200 hover:bg-white"
                            >
                                {/* Image */}
                                <div className="relative h-56 md:h-64 lg:h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50">
                                    <img
                                        src={firstImage}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                                        }}
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        -{Math.floor(Math.random() * 30 + 10)}%
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-7">
                                    <div className="space-y-3">
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500 capitalize font-medium">
                                                {item.category}
                                            </span>
                                            <span className="text-2xl font-black text-gray-900">
                                                ${item.price}
                                            </span>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 pt-4">
                                            {inCart(item.id) ? (
                                                <button className="flex-1 py-3 px-4 bg-green-100 hover:bg-green-200 text-green-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm border border-green-200 flex items-center justify-center gap-2">
                                                    <i className="fa-solid fa-check text-green-600"></i>
                                                    Added
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => addItem(item)}
                                                    className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-xs md:text-sm flex items-center justify-center gap-2"
                                                >
                                                    <i className="fa-solid fa-cart-shopping text-xs"></i>
                                                    Add to Cart
                                                </button>
                                            )}
                                            
                                            <Link
                                                to={`/more?id=${item.id}`}
                                                className="py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm border border-gray-200 flex items-center justify-center gap-2 hover:text-blue-600"
                                            >
                                                <i className="fa-solid fa-eye text-sm"></i>
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
                {filterData.length === 0 && !loading && (
                    <div className="text-center py-32">
                        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center shadow-xl">
                            <i className="fa-solid fa-magnifying-glass text-4xl text-gray-500"></i>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-700 mb-4">No Products Found</h3>
                        <p className="text-xl text-gray-500 mb-8">Try another category or clear filters</p>
                        <button
                            onClick={() => filterItem("All")}
                            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                        >
                            Show All Products
                        </button>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{Products.length}+</div>
                        <div className="text-gray-600 font-semibold">Total Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-emerald-600 mb-2">{categories.length - 1}+</div>
                        <div className="text-gray-600 font-semibold">Categories</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">100%</div>
                        <div className="text-gray-600 font-semibold">Quality Guaranteed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage;