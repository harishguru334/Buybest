import { useState, useEffect } from "react";
import slider1 from "./image/second-2 .jpg";
import slider2 from "./image/first-1.jpg";

function Slide() {
    const imagesData = [
        {
            id: 1,
            image: slider1,
            text1: "Fashion sale",
            text2: "Minimal ladiez Style",
            text3: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
            contentSide: "right"
        },
        {
            id: 2,
            image: slider2,
            text1: "Fashion sale",
            text2: "Minimal Menz Style",
            text3: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
            contentSide: "left"
        },
    ];

    const [Data, setData] = useState(0);
    const [isAuto, setIsAuto] = useState(true);

    useEffect(() => {
        if (!isAuto) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [Data, isAuto]);

    const prevSlide = () => {
        setData((prev) => prev === 0 ? imagesData.length - 1 : prev - 1);
        setIsAuto(false);
    };

    const nextSlide = () => {
        setData((prev) => prev === imagesData.length - 1 ? 0 : prev + 1);
        setIsAuto(false);
    };

    const goToSlide = (index) => {
        setData(index);
        setIsAuto(false);
    };

    const currentSlide = imagesData[Data];

    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
            {/* Background Image + Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={currentSlide.image} 
                    alt={`${currentSlide.text2} - ${currentSlide.text1}`}
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay - z-index low */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content - HIGH z-index, positioned BESIDE image */}
            <div className={`
                absolute top-0 right-0 bottom-0 w-full md:w-1/2 lg:w-2/5 h-full z-40
                ${currentSlide.contentSide === 'right' 
                    ? 'md:left-auto md:right-0 lg:right-10 xl:right-20' 
                    : 'md:left-0 lg:left-10 xl:left-20'
                }
                flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-12
                bg-gradient-to-b from-transparent/0 via-black/20 to-black/40 backdrop-blur-sm
            `}>
                <div className="text-white space-y-6 max-w-lg mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                        {currentSlide.text1}
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light italic text-blue-100 drop-shadow-xl">
                        {currentSlide.text2}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed opacity-95 drop-shadow-lg font-light">
                        {currentSlide.text3}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={nextSlide}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-transparent"
                        >
                            Shop Now →
                        </button>
                        <button 
                            onClick={prevSlide}
                            className="px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows - High z-index */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-xl hover:bg-white text-gray-900 p-3 md:p-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl font-bold"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-xl hover:bg-white text-gray-900 p-3 md:p-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl font-bold"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Dots - Bottom center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {imagesData.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-500 shadow-lg ${
                            index === Data 
                                ? "bg-white w-12 shadow-2xl" 
                                : "bg-white/60 hover:bg-white hover:scale-110"
                        }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-2 left-12 right-12 md:bottom-4 md:left-20 md:right-20 bg-white/40 backdrop-blur-sm rounded-full h-1.5 overflow-hidden shadow-lg z-30">
                <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full shadow-lg transition-all duration-1000"
                    style={{ width: `${((Data + 1) / imagesData.length) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}

export default Slide;