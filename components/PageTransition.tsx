'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation after 1.5 seconds
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Complete loading after animation finishes
    const timer2 = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // If loading is complete, don't render anything
  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-[#c7232c] to-[#e54a4a] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">
          KARANG TARUNA KRIDA YASA BARU
        </h1>
        <div className="flex justify-center items-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationDuration: '0.7s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}