import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Landing.css';

const MovingIcon = () => (
    <div className="w-12 h-12 text-blue-400 moving-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
        >
            <path d="M12 17l-5-5h10l-5 5zm0 4a1 1 0 01-.707-1.707L16.293 12H7.707l4.586 4.586A1 1 0 0112 21z" />
        </svg>
    </div>
);

const Landing = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(currentScrollPos < 100);
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

            {/* <div
                className={`absolute bottom-12 transition-all duration-500 ease-in-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
                <div className="flex flex-col items-center space-y-2">
                    <MovingIcon />
                </div>
            </div> */}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        </div>
    );
};

export default Landing;
