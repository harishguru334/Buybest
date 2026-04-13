import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import axios from "axios";

function NewProducts() {
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addItem, inCart } = useCart();

    // Fetch products
    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const res = await axios.get("http://localhost:8000/product/get");
                setProducts(res.data.message);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    const AddToCart = async (_id) => {
        try {
            const res = await axios.post(`http://localhost:8000/AddToCart/${_id}`);
            console.log("Added to cart:", res);
        } catch (err) {
            console.error("Cart error:", err);
        }
    };

    const getId = async (_id) => {
        try {
            await axios.post(`http://localhost:8000/deleteProduct/${_id}`);
            console.log("Deleted:", _id);
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[400px] flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                        New Arrivals
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our latest collection of trendy fashion items
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {Products.map((item) => {
                        // Convert base64 image
                        const imageSrc = `data:image/jpeg;base64,${btoa(
                            String.fromCharCode(...new Uint8Array(item?.image?.data?.data || ""))
                        )}`;

                        return (
                            <div 
                                key={item._id} 
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
                            >
                                {/* Image */}
                                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                    <img 
                                        src={imageSrc} 
                                        alt={item?.Title || "Product"}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                                        }}
                                    />
                                    {/* Quick View Badge */}
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg">
                                        New
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {item?.Title}
                                    </h3>
                                    
                                    <div className="space-y-1 mb-6">
                                        <p className="text-sm text-gray-500 capitalize">
                                            Category: {item?.catagory}
                                        </p>
                                        <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                            ${item?.Rate}
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        {inCart(item?._id) ? (
                                            <button className="flex-1 py-3 px-6 bg-green-100 hover:bg-green-200 text-green-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm border border-green-200">
                                                ✓ Added to Cart
                                            </button>
                                        ) : (
                                            <button 
                                                onClick={() => AddToCart(item._id)}
                                                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-sm"
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                        
                                        <Link 
                                            to={`/More3?id=${item._id}`}
                                            className="flex-1 py-3 px-6 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm border border-gray-200 text-center"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Products */}
                {Products.length === 0 && !loading && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-2xl flex items-center justify-center">
                            <i className="fa-solid fa-box-open text-3xl text-gray-500"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
                        <p className="text-gray-500">Check back later for new arrivals!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewProducts;