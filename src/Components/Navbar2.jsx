import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
    return (
        <nav 
            className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200"
            style={{ position: "sticky", top: "0", left: "0" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                            Fashe<span className="text-red-500">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Shope" 
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Blog" 
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/About" 
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Contact" 
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - SignIn + Cart + Filter */}
                    <div className="flex items-center space-x-4">
                        {/* Sign In */}
                        <Link 
                            to="/LogIn" 
                            className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Sign In
                        </Link>

                        {/* Cart */}
                        <Link to="/Cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-blue-600"></i>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                3
                            </span>
                        </Link>

                        {/* Filter Toggle */}
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden">
                            <i className="fa-solid fa-bars text-xl text-gray-700"></i>
                        </button>

                        {/* Desktop Filter */}
                        <button className="hidden md:inline-flex p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <i className="fa-solid fa-sliders text-xl text-gray-700 hover:text-blue-600"></i>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            <i className="fa-solid fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;