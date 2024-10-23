import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Landing() {
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
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-black text-white p-4">
      <div className="landing-content max-w-4xl mx-auto text-center">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="Clouds logo.png" 
            alt="Clouds logo" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
            loading="eager"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            CLOUDS
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold bg-gradient-to-r from-white-400 to-cyan-300 bg-clip-text text-transparent">
              Computer Legends Of the Unified Department of Science
            </span>
          {/* <p>
          Clouds which stands for Computer Legends Of the Unified Department is
          a student organization of Computer Science and Engineering students at
          SCEM. It aims to enhance the academic and professional lives of its
          members. We at CLOUDS endeavor to create a healthy competitive
          environment by providing opportunities for all to benefit from it.
          </p> */}
          </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 animate-bounce transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown 
          className="w-8 h-8 text-blue-400"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
}