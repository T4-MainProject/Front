import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

export default function AppHeader() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  // 홈페이지로 이동하는 함수
  const handleGoHome = () => {
    navigate('/');
  };

  useEffect(() => {
    // GSAP 애니메이션
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)", delay: 0.3 }
    );
  }, []);

  return (
    <header 
      ref={headerRef}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={handleGoHome}>
          <div 
            ref={logoRef}
            className="relative group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">L</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:scale-125"></div>
          </div>
          
          <div className="group">
            <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-500">
              Lang_Check
            </h1>
            <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
              AI Powered Grading System
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-semibold text-green-700">실시간 운영중</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              <span className="font-bold text-blue-600">99.8%</span>
              <span className="text-gray-600 ml-1">정확도</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              <span className="font-bold text-purple-600">2.3초</span>
              <span className="text-gray-600 ml-1">처리시간</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}