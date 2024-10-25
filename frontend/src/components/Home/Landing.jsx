import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';
import './Landing.css';

const Landing = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const landingSection = document.querySelector('.landing-container');
            if (landingSection) {
                const rect = landingSection.getBoundingClientRect();
                setIsVisible(rect.top >= 0 && rect.bottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="landing-container min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-grow">
                <div className="landing-content space-y-12 sm:space-y-16 text-center">
                    <div className="landing-image">
                        <img
                            src="Clouds logo.png"
                            alt="Clouds logo"
                            className="w-80 sm:w-96 md:w-[40rem] mx-auto object-contain transform hover:scale-110 transition-all duration-500 ease-in-out"
                            loading="eager"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-relaxed px-4">
                                <span className="font-semibold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                                    <Typewriter
                                        words={['Computer Legends Of the Unified Department(CLOUDS).']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={3000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`scroll-arrow-container ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="scroll-arrow">
                    <ChevronDown size={40} strokeWidth={2.5} />
                </div>
                <div className="scroll-arrow" style={{ animationDelay: '0.2s' }}>
                    <ChevronDown size={40} strokeWidth={2.5} />
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        </div>
    );
};

export default Landing;