import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HomeHero = () => {
  const metrics = [
    { value: '$250', label: 'Starting Deposit' },
    { value: '1:200', label: 'Maximum Leverage' },
    { value: '0.0', label: 'Spreads from' },
    { value: '65+', label: 'Tradable Instruments' },
  ];

  const images = [
    { src: 'bitcoin.png', alt: 'Bitcoin', ref: useRef(null), animationProps: { rotationY: 90, opacity: 0, x: 100 }, animationEndProps: { rotationY: 0, opacity: 1, x: 0 } },
    { src: 'ai_transparent_Craiyon.png', alt: 'Trader with VR headset', ref: useRef(null), animationProps: { opacity: 0, scale: 0.8 }, animationEndProps: { opacity: 1, scale: 1 } },
  ];

  useEffect(() => {
    // Animation for the Bitcoin image
    gsap.fromTo(images[0].ref.current, images[0].animationProps, {
      ...images[0].animationEndProps,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5, // Delay before the Bitcoin image animation starts
    });

    // Animation for the trader image
    gsap.fromTo(images[1].ref.current, images[1].animationProps, {
      ...images[1].animationEndProps,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="relative min-h-[820px] overflow-auto bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Trusted.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Regulated.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transparent.</span>
              </h1>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-purple-900/20 p-4 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="text-xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute -right-28" ref={images[0].ref}>
                  <img src={images[0].src} alt={images[0].alt} />
                </div>
                <img
                  ref={images[1].ref}
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-auto scale -75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;