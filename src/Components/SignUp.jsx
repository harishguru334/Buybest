import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Name: "",
        Username: "",
        Email: "",
        Password: ""
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.post("http://localhost:8000/CreateUser", formData);
            if (response.data.status === true) {
                toast.success("User Created Successfully! 🎉", {
                    duration: 3000,
                    position: "top-right",
                    style: {
                        background: "linear-gradient(45deg, #10B981, #059669)",
                        color: "white",
                        fontWeight: "bold"
                    }
                });
                setTimeout(() => {
                    setLoading(false);
                    navigate('/LogIn');
                }, 2000);
            } else {
                toast.error("Something went wrong. Try again!", {
                    duration: 4000,
                    position: "top-right"
                });
                setLoading(false);
            }
        } catch (error) {
            toast.error("Registration failed. Please try again.", {
                duration: 4000,
                position: "top-right"
            });
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            
            {/* 3-Column Split Screen */}
            <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900/30 to-blue-900 flex items-stretch overflow-hidden">
                
                {/* Left Column - Decorative */}
                <div className="hidden lg:flex flex-1 bg-gradient-to-b from-emerald-900/80 via-teal-900/60 to-blue-900/70 backdrop-blur-xl items-center justify-center p-20 relative overflow-hidden">
                    <div className="text-center text-white z-10 max-w-lg mx-auto">
                        <div className="w-28 h-28 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/50 animate-pulse">
                            <i className="fa-solid fa-user-plus text-3xl font-bold"></i>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
                            Join Estore Today
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-100/90 font-light leading-relaxed mb-8 opacity-90 max-w-md mx-auto">
                            Create your account and start shopping with the best deals and fastest delivery.
                        </p>
                        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <i className="fa-solid fa-gift text-white text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Welcome Bonus</h4>
                                    <p className="text-emerald-100 text-sm">$10 off first order</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <i className="fa-solid fa-star text-white text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">VIP Member</h4>
                                    <p className="text-emerald-100 text-sm">Exclusive deals</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Login Call to Action */}
                        <Link 
                            to="/LogIn"
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-white/20 to-emerald-500/30 backdrop-blur-xl border-2 border-white/40 hover:border-white/60 hover:bg-white/30 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-400 text-lg"
                        >
                            <i className="fa-solid fa-right-to-bracket group-hover:translate-x-1 transition-transform"></i>
                            <span>Have Account? Login</span>
                        </Link>
                    </div>
                    
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-bounce"></div>
                    </div>
                </div>

                {/* Right Column - SignUp Form */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 lg:p-20 space-y-8 bg-white/95 backdrop-blur-xl border-l border-white/20">
                    
                    {/* Logo/Title */}
                    <div className="text-center w-full max-w-md mx-auto">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6">
                            <i className="fa-solid fa-user-plus text-xl text-white font-bold"></i>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent mb-4">
                            Create Account
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 font-light">
                            Join us today and start shopping!
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                        
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Enter your full name"
                                value={formData.Name}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all duration-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Username
                            </label>
                            <input
                                type="text"
                                name="Username"
                                placeholder="Choose a username"
                                value={formData.Username}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="Email"
                                placeholder="your@email.com"
                                value={formData.Email}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all duration-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Password
                            </label>
                            <input
                                type="password"
                                name="Password"
                                placeholder="Create a password"
                                value={formData.Password}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400 transition-all duration-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-5 h-5 text-emerald-600 bg-gray-100 border-2 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2 cursor-pointer"
                                    disabled={loading}
                                />
                                <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-5 px-8 text-xl font-black rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-400 uppercase tracking-wide flex items-center justify-center gap-3 ${
                                loading
                                    ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                                    : "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700"
                            } text-white`}
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-user-plus"></i>
                                    Sign Up
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative flex items-center py-8">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink-0 mx-6 text-gray-500 font-semibold px-4 py-2 bg-white/60 rounded-2xl text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Google Sign Up */}
                    <a
                        href="https://myaccount.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 text-gray-700 font-semibold text-sm md:text-base group"
                    >
                        <div className="w-11 h-11 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                            <i className="fa-brands fa-google text-lg text-white"></i>
                        </div>
                        <span>Continue with Google</span>
                    </a>

                    {/* Login Link */}
                    <div className="pt-8 border-t-2 border-gray-100 text-center">
                        <Link
                            to="/LogIn"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-400 text-lg uppercase tracking-wide group"
                        >
                            <i className="fa-solid fa-right-to-bracket group-hover:translate-x-1 transition-transform"></i>
                            <span>Already have account? Login</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            By signing up, you agree to our{' '}
                            <Link to="/terms" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-all">
                                Terms
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-all">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;