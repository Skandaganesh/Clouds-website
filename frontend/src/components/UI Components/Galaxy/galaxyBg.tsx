import React, { useEffect, useRef } from 'react';
import "./galaxy.css"; 

const GalaxyBackground = () => {
  const starCount = 800;
  const maxZ = 1000;
  const speed = 1.5;
  const spaceContainerRef = useRef<HTMLDivElement>(null);
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spaceContainer = spaceContainerRef.current;
    const starsContainer = starsContainerRef.current;

    if (!spaceContainer || !starsContainer) return;

    const createBackgroundPatches = () => {
      const colors = ['#000033', '#000066', '#1A0033', '#33001A', '#0D0D0D'];
      const patchCount = 15;

      for (let i = 0; i < patchCount; i++) {
        const patch = document.createElement('div');
        patch.className = 'background-patch';

        const size = Math.random() * 50 + 20;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];

        patch.style.width = `${size}vw`;
        patch.style.height = `${size}vw`;
        patch.style.left = `${x}vw`;
        patch.style.top = `${y}vh`;
        patch.style.background = color;

        spaceContainer.appendChild(patch);
      }
    };

    const createNebula = () => {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      const hue = Math.random() * 60 + 180; // Blue to purple hues
      nebula.style.background = `
        radial-gradient(
          circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
          hsla(${hue}, 100%, 60%, 0.2) 0%, 
          transparent 60%
        )
      `;
      spaceContainer.appendChild(nebula);
    };

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      let z = Math.random() * maxZ;

      const size = Math.random() * 2 + 0.5;
      const hue = Math.random() * 60 + 180; // Blue to purple hues
      const saturation = Math.random() * 50 + 50;
      const lightness = Math.random() * 40 + 60; // Lighter shades
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.background = color;
      star.style.boxShadow = `0 0 ${size * 2}px ${color}`;

      const animateStar = () => {
        z -= speed;
        if (z < 0) z = maxZ;

        const scale = (maxZ - z) / maxZ;
        star.style.transform = `translateZ(${z}px) scale(${scale})`;
        star.style.opacity = scale.toString();

        const streakOpacity = Math.max(0, (z - maxZ / 2) / (maxZ / 2));
        star.style.setProperty('--streak-opacity', (streakOpacity * 0.7).toString());
      };

      starsContainer.appendChild(star);
      return animateStar;
    };

    // Create background patches
    createBackgroundPatches();

    // Create nebulae
    for (let i = 0; i < 5; i++) {
      createNebula();
    }

    const starAnimations = Array.from({ length: starCount }, createStar);

    const animateStars = () => {
      starAnimations.forEach(animate => animate());
      requestAnimationFrame(animateStars);
    };

    animateStars();

    const handleResize = () => {
      const stars = starsContainer.getElementsByClassName('star');
      Array.from(stars).forEach((star: Element) => {
        if (star instanceof HTMLElement) {
          star.style.left = `${Math.random() * window.innerWidth}px`;
          star.style.top = `${Math.random() * window.innerHeight}px`;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup
      window.removeEventListener('resize', handleResize);
      while (spaceContainer.firstChild) {
        spaceContainer.removeChild(spaceContainer.firstChild);
      }
    };
  }, []);

  return (
    <div id="space" ref={spaceContainerRef}>
      <div id="stars" ref={starsContainerRef}></div>
    </div>
  );
};

export default GalaxyBackground;